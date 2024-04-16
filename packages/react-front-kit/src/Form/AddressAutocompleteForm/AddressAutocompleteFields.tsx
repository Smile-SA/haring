'use client';
import type { IFetchAutocompleteFieldProps } from '../FetchAutocompleteField/FetchAutocompleteField';
import type { TextInputProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { Group, TextInput } from '@mantine/core';
import { useState } from 'react';

import { FetchAutocompleteField } from '../FetchAutocompleteField/FetchAutocompleteField';

export interface IAdressFields {
  city?: string;
  country?: string;
  number?: string;
  postCode?: string;
  street?: string;
}

export interface IAddressAutocompleteFieldsProps<T>
  extends Omit<IFetchAutocompleteFieldProps<T>, 'onOptionSubmit'> {
  cityDescription?: string;
  cityLabel?: string;
  cityPlaceholder?: string;
  countryDescription?: string;
  countryLabel?: string;
  countryPlaceholder?: string;
  numberDescription?: string;
  numberLabel?: string;
  numberPlaceholder?: string;
  onFieldsValuesChange: (value: IAdressFields) => void;
  onOptionSubmit: (value: unknown) => IAdressFields;
  postCodeDescription?: string;
  postCodeLabel?: string;
  postCodePlaceholder?: string;
  streetDescription?: string;
  streetLabel?: string;
  streetPlaceholder?: string;
  textInputProps?: TextInputProps;
}

export function AddressAutocompleteFields<T>(
  props: IAddressAutocompleteFieldsProps<T>,
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
    onOptionSubmit,
    onFieldsValuesChange,
    postCodeDescription,
    postCodeLabel = 'Postal code',
    postCodePlaceholder = 'SW1Y 5HS',
    textInputProps,
    ...FetchAutocompleteFieldProps
  } = props;

  const [streetValue, setStreetValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [postCodeValue, setPostCodeValue] = useState('');
  const [countryValue, setCountryValue] = useState('');

  function onOptionSubmitHandle(value: unknown): void {
    const addressFields = onOptionSubmit(value);
    addressFields.street && setStreetValue(addressFields.street);
    addressFields.number && setNumberValue(addressFields.number);
    addressFields.city && setCityValue(addressFields.city);
    addressFields.postCode && setPostCodeValue(addressFields.postCode);
    addressFields.country && setCountryValue(addressFields.country);
  }

  function onChangeHandle(label: string, value: string): void {
    onFieldsValuesChange({ [label]: value });
  }

  return (
    <div>
      <FetchAutocompleteField
        onOptionSubmit={(value) => onOptionSubmitHandle(value)}
        {...FetchAutocompleteFieldProps}
      />
      <Group grow mt="15">
        <TextInput
          description={streetDescription}
          label={streetLabel}
          onChange={(e) => {
            setStreetValue(e.target.value);
            onChangeHandle('street', e.target.value);
          }}
          placeholder={streetPlaceholder}
          value={streetValue}
        />
        <TextInput
          description={numberDescription}
          label={numberLabel}
          onChange={(e) => {
            setNumberValue(e.target.value);
            onChangeHandle('number', e.target.value);
          }}
          placeholder={numberPlaceholder}
          value={numberValue}
        />
      </Group>
      <Group grow>
        <TextInput
          description={cityDescription}
          label={cityLabel}
          onChange={(e) => {
            setCityValue(e.target.value);
            onChangeHandle('city', e.target.value);
          }}
          placeholder={cityPlaceholder}
          value={cityValue}
          {...textInputProps}
        />
        <TextInput
          description={postCodeDescription}
          label={postCodeLabel}
          onChange={(e) => {
            setPostCodeValue(e.target.value);
            onChangeHandle('postCode', e.target.value);
          }}
          placeholder={postCodePlaceholder}
          value={postCodeValue}
          {...textInputProps}
        />
      </Group>
      <TextInput
        description={countryDescription}
        label={countryLabel}
        onChange={(e) => {
          setCountryValue(e.target.value);
          onChangeHandle('country', e.target.value);
        }}
        placeholder={countryPlaceholder}
        value={countryValue}
        {...textInputProps}
      />
    </div>
  );
}

// TODO: Faire le responsive
// TODO: Crée un fonction pour modifier dans le composant qui modifie le format des datas envoyés
