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

export interface IFetchAutocompleteFieldProps<F>
  extends Omit<AutocompleteProps, 'onOptionSubmit'> {
  baseUrl: string;
  minValueLength?: number;
  onFetchData: (value: string) => Promise<IValue<F>[]>;
  onOptionSubmit?: (value: unknown) => void;
}

export function FetchAutocompleteField<F>(
  props: IFetchAutocompleteFieldProps<F>,
): ReactElement {
  const {
    label = 'Find an address',
    minValueLength = 5,
    placeholder = "89 Pall Mall, St. James's, London SW1Y 5HS, United Kingdom",
    onOptionSubmit,
    onFetchData,
    ...autocompleteProps
  } = props;
  const [data, setData] = useState<IValue<F>[]>([]);
  const [value, setValue] = useDebouncedState('', 1000);

  useEffect(() => {
    function getData(): void {
      if (value.length >= minValueLength && value.length >= 0) {
        onFetchData(value)
          .then((data) => {
            setData(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      } else {
        setData([]);
      }
    }
    getData();
  }, [minValueLength, onFetchData, value]);

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
// TODO: Enlever getParamsForUrl et se renseigner
