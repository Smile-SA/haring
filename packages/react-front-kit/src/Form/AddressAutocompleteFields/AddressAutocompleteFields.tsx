'use client';
import type {
  IFetchAutocompleteFieldProps,
  IValue,
} from '../FetchAutocompleteField/FetchAutocompleteField';
import type { TextInputProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { TextInput } from '@mantine/core';
import { useState } from 'react';

import { FetchAutocompleteField } from '../FetchAutocompleteField/FetchAutocompleteField';

import classes from './AddressAutocompleteFields.module.css';

export interface IAddressFields {
  city?: string;
  country?: string;
  number?: string;
  postCode?: string;
  street?: string;
}

export interface ICity {
  description?: string;
  label?: string;
  placeholder?: string;
}
export interface ICountry {
  description?: string;
  label?: string;
  placeholder?: string;
}
export interface INumber {
  description?: string;
  label?: string;
  placeholder?: string;
}
export interface IPostcode {
  description?: string;
  label?: string;
  placeholder?: string;
}

export interface IStreet {
  description?: string;
  label?: string;
  placeholder?: string;
}

export interface IAddressAutocompleteFieldsProps<T>
  extends Omit<IFetchAutocompleteFieldProps<T>, 'onOptionSubmit'> {
  city?: ICity;
  country?: ICountry;
  number?: INumber;
  onFieldsValuesChange?: (value: IAddressFields) => void;
  onOptionSubmit: (value: IValue<T>) => IAddressFields;
  postCode?: IPostcode;
  street?: IStreet;
  textInputProps?: TextInputProps;
}

export function AddressAutocompleteFields<T>(
  props: IAddressAutocompleteFieldsProps<T>,
): ReactElement {
  const {
    street = {
      label: 'Street Name',
      placeholder: 'Pall Mall',
    },
    city = {
      label: 'City',
      placeholder: 'London',
    },
    country = { label: 'Country', placeholder: 'United Kingdom' },
    number = { label: 'Street number', placeholder: '89' },
    onOptionSubmit,
    onFieldsValuesChange,
    postCode = {
      label: 'Postal code',
      placeholder: 'SW1Y 5HS',
    },
    textInputProps,
    ...fetchAutocompleteFieldProps
  } = props;

  const [streetValue, setStreetValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [postCodeValue, setPostCodeValue] = useState('');
  const [countryValue, setCountryValue] = useState('');

  function onOptionSubmitHandle(value: IValue<T>): void {
    const addressFields = onOptionSubmit(value);
    setStreetValue(addressFields.street ?? '');
    setNumberValue(addressFields.number ?? '');
    setCityValue(addressFields.city ?? '');
    setPostCodeValue(addressFields.postCode ?? '');
    setCountryValue(addressFields.country ?? '');
  }

  function onChangeHandle(label: string, value: string): void {
    onFieldsValuesChange?.({ [label]: value });
  }

  const inputs = [
    {
      description: street.description,
      label: street.label,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setStreetValue(e.target.value);
        onChangeHandle('street', e.target.value);
      },
      placeholder: street.placeholder,
      value: streetValue,
    },
    {
      description: number.description,
      label: number.label,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumberValue(e.target.value);
        onChangeHandle('number', e.target.value);
      },
      placeholder: number.placeholder,
      value: numberValue,
    },
    {
      description: city.description,
      label: city.label,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityValue(e.target.value);
        onChangeHandle('city', e.target.value);
      },
      placeholder: city.placeholder,
      value: cityValue,
    },
    {
      description: postCode.description,
      label: postCode.label,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostCodeValue(e.target.value);
        onChangeHandle('postCode', e.target.value);
      },
      placeholder: postCode.placeholder,
      value: postCodeValue,
    },
    {
      description: country.description,
      label: country.label,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountryValue(e.target.value);
        onChangeHandle('country', e.target.value);
      },
      placeholder: country.placeholder,
      value: countryValue,
    },
  ];

  return (
    <div>
      <FetchAutocompleteField
        onOptionSubmit={(value) => onOptionSubmitHandle(value)}
        {...fetchAutocompleteFieldProps}
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
