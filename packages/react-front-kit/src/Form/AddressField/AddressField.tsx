/* eslint-disable @typescript-eslint/naming-convention */
'use client';

import type { AutocompleteProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { Autocomplete } from '@mantine/core';
import { useState } from 'react';

interface ILocation {
  address: {
    ISO3166_2_lvl4: string;
    ISO3166_2_lvl6: string;
    country: string;
    country_code: string;
    county: string;
    house_number: string;
    municipality: string;
    postcode: string;
    region: string;
    road: string;
    state: string;
    village: string;
  };
  addresstype: string;
  boundingbox: [string, string, string, string];
  category: string;
  display_name: string;
  importance: number;
  lat: string;
  licence: string;
  lon: string;
  name: string;
  osm_id: number;
  osm_type: string;
  place_id: number;
  place_rank: number;
  type: string;
}
function removeDuplicates(locations: ILocation[]): ILocation[] {
  const seenDisplayNames: Record<string, boolean> = {};

  return locations.filter((location) => {
    if (seenDisplayNames[location.display_name]) {
      return false;
    }
    seenDisplayNames[location.display_name] = true;
    return true;
  });
}

export interface IAddressFieldProps extends AutocompleteProps {
  minValueLength?: number;
}

export function AddressField(props: IAddressFieldProps): ReactElement {
  const {
    label = 'Find an address',
    placeholder = "89 Pall Mall, St. James's, London SW1Y 5HS, United Kingdom",
    minValueLength = 5,
    ...autocompleteProps
  } = props;
  const [data, setData] = useState<ILocation[] | null>(null);
  const [requestTimeOutActive, setRequestTimeOutActive] = useState(false);

  function getData(value: string): void {
    if (!requestTimeOutActive) {
      try {
        const valueForUrl = value.replace(' ', '+');
        const xhr = new XMLHttpRequest();
        xhr.open(
          'GET',
          `https://nominatim.openstreetmap.org/search.php?street=${valueForUrl}&format=jsonv2&addressdetails=1&dedupe=1`,
        );
        xhr.onload = function () {
          if (xhr.status === 200) {
            const newData: ILocation[] = JSON.parse(xhr.responseText);
            const newDataWithoutDuplicate = removeDuplicates(newData);
            setData(newDataWithoutDuplicate);
            setRequestTimeOutActive(true);
            console.log('on');
            setTimeout(() => {
              setRequestTimeOutActive(false);
              console.log('off');
            }, 10000);
          }
        };
        xhr.send();
      } catch (error) {
        console.error(`error: ${error as string}`);
      }
    }
  }

  function handleChange(newValue: string): void {
    newValue.length >= minValueLength && getData(newValue);
  }
  return (
    <Autocomplete
      {...autocompleteProps}
      data={data?.map((location) => location.display_name)}
      label={label}
      onChange={(e) => handleChange(e)}
      placeholder={placeholder}
    />
  );
}

//TODO: se renseigner sur debounce voir sur mantine (useDebounceState + useEffect (peux etre un truck préfer au mieux) utiliser le state sans le value) https://mantine.dev/hooks/use-debounced-state/
// TODO: min param superieur ou égale a 0
//TODO: voir https://mantine.dev/core/autocomplete/#options-filtering juste return options
//TODO: Faire en sorte qu'on puissent renvoyer tous l'objet au clique de l'item de la liste des propositions
