/* eslint-disable @typescript-eslint/naming-convention */
'use client';

import type { AutocompleteProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { Autocomplete } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import { useEffect, useState } from 'react';

export interface IFetchOption {
  key: string;
  value: string;
}

export interface IFetchAutocompleteFieldProps
  extends Omit<AutocompleteProps, 'onOptionSubmit'> {
  baseUrl: string;
  fetchDataLabelKey: string;
  fetchOthersOptions?: IFetchOption[];
  fetchSearchOptionKey?: string;
  minValueLength?: number;
  onOptionSubmit?: (value: unknown) => void;
}

type IFetchData<T> = Record<string, T>;

function removeDuplicates(values: IFetchData<string>[]): IFetchData<string>[] {
  const seenDisplayNames: Record<string, boolean> = {};

  return values.filter((element) => {
    if (seenDisplayNames[element.fetchDataLabelKey]) {
      return false;
    }
    seenDisplayNames[element.fetchDataLabelKey] = true;
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
    baseUrl,
    fetchDataLabelKey,
    fetchSearchOptionKey = 'q',
    label = 'Find an address',
    placeholder = "89 Pall Mall, St. James's, London SW1Y 5HS, United Kingdom",
    minValueLength = 5,
    onOptionSubmit,
    fetchOthersOptions,
    ...autocompleteProps
  } = props;
  const [data, setData] = useState<IFetchData<string>[] | null>(null);
  const [value, setValue] = useDebouncedState('', 1000);

  useEffect(() => {
    function getData(params: string): void {
      if (value.length >= minValueLength && value.length >= 0) {
        const valueForUrl = getParamsForUrl(params);
        const xhr = new XMLHttpRequest();
        const url = new URL(baseUrl);
        url.searchParams.set(fetchSearchOptionKey, valueForUrl);
        fetchOthersOptions?.forEach((element) => {
          url.searchParams.set(element.key, element.value);
        });
        xhr.open('GET', url);
        xhr.onload = function () {
          if (xhr.status === 200) {
            const newData: IFetchData<string>[] = JSON.parse(xhr.responseText);
            console.log(newData);
            if (!Array.isArray(newData)) {
              throw new Error(`data fetch is not an array`);
            }
            const newDataWithoutDuplicate = removeDuplicates(newData);
            setData(newDataWithoutDuplicate);
          } else {
            throw new Error(`code ${xhr.status}, something went wrong`);
          }
        };
        xhr.send();
      } else {
        setData([]);
      }
    }

    getData(value);
  }, [
    baseUrl,
    fetchSearchOptionKey,
    fetchOthersOptions,
    minValueLength,
    setData,
    value,
  ]);

  function onOptionSubmitHandle(value: string): void {
    const locationObj: IFetchData<string> | undefined = data?.filter(
      (element) => {
        return element[fetchDataLabelKey] === value && element;
      },
    )[0];
    onOptionSubmit && locationObj && onOptionSubmit(locationObj);
  }

  return (
    <Autocomplete
      {...autocompleteProps}
      data={data?.map((element) => `${element[fetchDataLabelKey]}`)}
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
// TODO: faire une props qui format les data avant de renvoyer un label et une value
// TODO: regarder fetch
