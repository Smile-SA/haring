'use client';
import type { IFetchAutocompleteFieldProps } from '../FetchAutocompleteField/FetchAutocompleteField';
import type { TextInputProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { Group, TextInput } from '@mantine/core';

import { FetchAutocompleteField } from '../FetchAutocompleteField/FetchAutocompleteField';

export interface IAddressAutocompleteFormProps<T>
  extends IFetchAutocompleteFieldProps<T> {
  cityDescription?: string;
  cityLabel?: string;
  cityPlaceholder?: string;
  countryDescription?: string;
  countryLabel?: string;
  countryPlaceholder?: string;
  numberDescription?: string;
  numberLabel?: string;
  numberPlaceholder?: string;
  postCodeDescription?: string;
  postCodeLabel?: string;
  postCodePlaceholder?: string;
  streetDescription?: string;
  streetLabel?: string;
  streetPlaceholder?: string;
  textInputProps?: TextInputProps;
}

export function AddressAutocompleteForm<T>(
  props: IAddressAutocompleteFormProps<T>,
): ReactElement {
  const {
    streetDescription,
    streetLabel = 'Street Name',
    streetPlaceholder = 'Pall Mall',
    cityDescription,
    cityLabel = 'City',
    cityPlaceholder = 'London',
    countryDescription,
    countryLabel = 'country',
    countryPlaceholder = 'United Kingdom',
    numberDescription,
    numberLabel = 'Street number',
    numberPlaceholder = '89',
    postCodeDescription,
    postCodeLabel = 'Postal code',
    postCodePlaceholder = 'SW1Y 5HS',
    textInputProps,
    ...FetchAutocompleteFieldProps
  } = props;
  return (
    <div>
      <FetchAutocompleteField {...FetchAutocompleteFieldProps} />
      <Group grow mt="15">
        <TextInput
          description={streetDescription}
          label={streetLabel}
          placeholder={streetPlaceholder}
        />
        <TextInput
          description={numberDescription}
          label={numberLabel}
          placeholder={numberPlaceholder}
        />
      </Group>
      <Group grow>
        <TextInput
          description={cityDescription}
          label={cityLabel}
          placeholder={cityPlaceholder}
          {...textInputProps}
        />
        <TextInput
          description={postCodeDescription}
          label={postCodeLabel}
          placeholder={postCodePlaceholder}
          {...textInputProps}
        />
      </Group>
      <TextInput
        description={countryDescription}
        label={countryLabel}
        placeholder={countryPlaceholder}
        {...textInputProps}
      />
    </div>
  );
}
