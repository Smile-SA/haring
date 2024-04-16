'use client';
import type { IFetchAutocompleteFieldProps } from '../FetchAutocompleteField/FetchAutocompleteField';
import type { TextInputProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { TextInput } from '@mantine/core';
import { useState } from 'react';

import { FetchAutocompleteField } from '../FetchAutocompleteField/FetchAutocompleteField';

import classes from './AddressAutocompleteFields.module.css';

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
  onFieldsValuesChange?: (value: IAdressFields) => void;
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
    countryLabel = 'Country',
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
    onFieldsValuesChange?.({ [label]: value });
  }

  const inputs = [
    {
      description: streetDescription,
      label: streetLabel,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setStreetValue(e.target.value);
        onChangeHandle('street', e.target.value);
      },
      placeholder: streetPlaceholder,
      value: streetValue,
    },
    {
      description: numberDescription,
      label: numberLabel,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumberValue(e.target.value);
        onChangeHandle('number', e.target.value);
      },
      placeholder: numberPlaceholder,
      value: numberValue,
    },
    {
      description: cityDescription,
      label: cityLabel,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityValue(e.target.value);
        onChangeHandle('city', e.target.value);
      },
      placeholder: cityPlaceholder,
      value: cityValue,
    },
    {
      description: postCodeDescription,
      label: postCodeLabel,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostCodeValue(e.target.value);
        onChangeHandle('postCode', e.target.value);
      },
      placeholder: postCodePlaceholder,
      value: postCodeValue,
    },
    {
      description: countryDescription,
      label: countryLabel,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountryValue(e.target.value);
        onChangeHandle('country', e.target.value);
      },
      placeholder: countryPlaceholder,
      value: countryValue,
    },
  ];

  return (
    <div>
      <FetchAutocompleteField
        onOptionSubmit={(value) => onOptionSubmitHandle(value)}
        {...FetchAutocompleteFieldProps}
      />
      <div className={classes.inputContainer}>
        {inputs.map((input) => {
          return (
            <TextInput
              key={input.label}
              className={classes.input}
              description={input.description}
              label={input.label}
              onChange={(e) => {
                input.onchange(e);
              }}
              placeholder={input.placeholder}
              value={input.value}
            />
          );
        })}
      </div>
    </div>
  );
}
