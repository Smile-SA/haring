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

export interface IValue<T> {
  label: string;
  value: T;
}

export interface IFetchAutocompleteFieldProps<T>
  extends Omit<AutocompleteProps, 'onOptionSubmit'> {
  deDebounce?: number;
  minValueLength?: number;
  onFetchData: (value: string) => Promise<IValue<T>[]>;
  onOptionSubmit?: (value: IValue<T>) => void;
}

export function FetchAutocompleteField<T>(
  props: IFetchAutocompleteFieldProps<T>,
): ReactElement {
  const {
    deDebounce = 1000,
    label = 'Find an address',
    minValueLength = 5,
    placeholder = "89 Pall Mall, St. James's, London SW1Y 5HS, United Kingdom",
    onOptionSubmit,
    onFetchData,
    ...autocompleteProps
  } = props;
  const [data, setData] = useState<IValue<T>[]>([]);
  const [value, setValue] = useDebouncedState('', deDebounce);

  useEffect(() => {
    function getData(): void {
      if (value.length >= minValueLength && value.length >= 0) {
        onFetchData(value)
          .then((data) => {
            setData(data);
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
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
