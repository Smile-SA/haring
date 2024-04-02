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

export interface IValue<F> {
  label: string;
  value: F;
}

export interface IFetchAutocompleteFieldProps<F, G>
  extends Omit<AutocompleteProps, 'onOptionSubmit'> {
  baseUrl: string;
  fetchDataLabelKey: string;
  fetchOthersOptions?: IFetchOption[];
  fetchSearchOptionKey?: string;
  minValueLength?: number;
  onOptionSubmit?: (value: unknown) => void;
  transformResultsFunction: (data: G) => IValue<F>[];
}

function getParamsForUrl(params: string): string {
  return params
    .replaceAll(/ +(?= )/g, '')
    .replaceAll(' ', '+')
    .replaceAll("'", '%27')
    .toLowerCase();
}

export function FetchAutocompleteField<F, G>(
  props: IFetchAutocompleteFieldProps<F, G>,
): ReactElement {
  const {
    baseUrl,
    fetchDataLabelKey,
    fetchOthersOptions,
    fetchSearchOptionKey = 'q',
    label = 'Find an address',
    minValueLength = 5,
    placeholder = "89 Pall Mall, St. James's, London SW1Y 5HS, United Kingdom",
    onOptionSubmit,
    transformResultsFunction,
    ...autocompleteProps
  } = props;
  const [data, setData] = useState<IValue<F>[]>([]);
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
            const newData: G = JSON.parse(xhr.responseText);
            const transformResult = transformResultsFunction(newData);
            setData(transformResult);
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
    transformResultsFunction,
  ]);

  function onOptionSubmitHandle(value: string): void {
    const result = data.filter((element) => {
      if (element.label === value) {
        return true;
      }
      return false;
    })[0];

    onOptionSubmit && onOptionSubmit(result);
  }

  return (
    <Autocomplete
      {...autocompleteProps}
      data={data.map((element) => element.label)}
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
