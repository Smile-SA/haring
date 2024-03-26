/* eslint-disable @typescript-eslint/naming-convention */
'use client';

import type { AutocompleteProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { Autocomplete } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import { useEffect, useState } from 'react';

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

export interface IAddressFieldProps extends AutocompleteProps {
  minValueLength?: number;
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

function getParamsForUrl(params: string): string {
  return params
    .replaceAll(/ +(?= )/g, '')
    .replaceAll(' ', '+')
    .replaceAll("'", '%27')
    .toLowerCase();
}

export function AddressField(props: IAddressFieldProps): ReactElement {
  const {
    label = 'Find an address',
    placeholder = "89 Pall Mall, St. James's, London SW1Y 5HS, United Kingdom",
    minValueLength = 5,
    ...autocompleteProps
  } = props;
  const [data, setData] = useState<ILocation[] | null>(null);
  const [value, setValue] = useDebouncedState('', 1000);

  function getData(params: string): void {
    try {
      if (minValueLength < 0) {
        throw new Error('the value must be positive');
      }
      const valueForUrl = getParamsForUrl(params);
      console.log(valueForUrl);
      const xhr = new XMLHttpRequest();
      xhr.open(
        'GET',
        `https://nominatim.openstreetmap.org/search.php?q=${valueForUrl}&format=jsonv2&addressdetails=1`,
      );
      xhr.onload = function () {
        if (xhr.status === 200) {
          const newData: ILocation[] = JSON.parse(xhr.responseText);
          const newDataWithoutDuplicate = removeDuplicates(newData);
          setData(newDataWithoutDuplicate);
          console.log(newDataWithoutDuplicate);
        }
      };
      xhr.send();
    } catch (error) {
      console.error(`error: ${error as string}`);
    }
  }

  useEffect(() => {
    getData(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  function onOptionSubmitHandle(value: string): void {
    // console.log(value);
  }

  function getRenderOptions(option: {
    option: { value: string };
  }): ReactElement {
    return (
      <>
        {data?.map((element) => {
          console.log(option.option.value);
          console.log(element.osm_id);
          return (
            element.osm_id.toString() === option.option.value && (
              <p key={option.option.value}>{element.display_name}</p>
            )
          );
        })}{' '}
      </>
    );
  }

  return (
    <Autocomplete
      {...autocompleteProps}
      data={data?.map((location) => `${location.osm_id}`)}
      filter={({ options }) => {
        return options;
      }}
      label={label}
      onChange={(e) => setValue(e)}
      onOptionSubmit={(value) => onOptionSubmitHandle(value)}
      placeholder={placeholder}
      renderOption={getRenderOptions}
    />
  );
}
// TODO: Faire en sorte qu'on puissent renvoyer tous l'objet au clique de l'item de la liste des propositions
