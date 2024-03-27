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

export interface IFetchAutocompleteFieldProps
  extends Omit<AutocompleteProps, 'onOptionSubmit'> {
  acceptLanguage?: string;
  countryCodes?: string;
  minValueLength?: number;
  onOptionSubmit?: (location: ILocation) => void;
  resultsLimit?: number;
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

export function FetchAutocompleteField(
  props: IFetchAutocompleteFieldProps,
): ReactElement {
  const {
    acceptLanguage = '',
    countryCodes = '',
    label = 'Find an address',
    placeholder = "89 Pall Mall, St. James's, London SW1Y 5HS, United Kingdom",
    resultsLimit = 10,
    minValueLength = 5,
    onOptionSubmit,
    ...autocompleteProps
  } = props;
  const [data, setData] = useState<ILocation[] | null>(null);
  const [value, setValue] = useDebouncedState('', 1000);

  useEffect(() => {
    function getData(params: string): void {
      try {
        if (minValueLength < 0) {
          throw new Error('the value must be positive');
        } else if (value.length >= minValueLength) {
          const valueForUrl = getParamsForUrl(params);
          const xhr = new XMLHttpRequest();

          const url = new URL('https://nominatim.openstreetmap.org/search.php');
          url.searchParams.set('q', valueForUrl);
          url.searchParams.set('format', 'jsonv2');
          url.searchParams.set('addressdetails', '1');
          url.searchParams.set('countrycodes', countryCodes);
          url.searchParams.set('accept-language', acceptLanguage);
          url.searchParams.set('limit', resultsLimit.toString());

          xhr.open('GET', url);
          xhr.onload = function () {
            if (xhr.status === 200) {
              const newData: ILocation[] = JSON.parse(xhr.responseText);
              const newDataWithoutDuplicate = removeDuplicates(newData);
              setData(newDataWithoutDuplicate);
            }
          };
          xhr.send();
        } else {
          setData([]);
        }
      } catch (error) {
        console.error(`error: ${error as string}`);
      }
    }

    getData(value);
  }, [
    acceptLanguage,
    countryCodes,
    minValueLength,
    resultsLimit,
    setData,
    value,
  ]);

  function onOptionSubmitHandle(value: string): void {
    const locationObj: ILocation | undefined = data?.filter((element) => {
      return element.display_name.toString() === value && element;
    })[0];
    onOptionSubmit && locationObj && onOptionSubmit(locationObj);
  }

  return (
    <Autocomplete
      {...autocompleteProps}
      data={data?.map((location) => `${location.display_name}`)}
      filter={({ options }) => {
        return options;
      }}
      label={label}
      onChange={(e) => setValue(e)}
      onOptionSubmit={(value) => onOptionSubmitHandle(value)}
      placeholder={placeholder}
    />
  );
}
