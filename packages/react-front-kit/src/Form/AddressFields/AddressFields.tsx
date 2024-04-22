'use client';
import type { TextInputProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { TextInput } from '@mantine/core';

import classes from './AddressFields.module.css';

export interface IAdressFieldsValues {
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

export interface IAddressFieldsProps<T extends IAdressFieldsValues> {
  cityProps?: TextInputProps;
  countryProps?: TextInputProps;
  numberProps?: TextInputProps;
  onChange?: (value: T) => void;
  postCodeProps?: TextInputProps;
  streetProps?: TextInputProps;
  value?: T;
}

export function AddressFields(
  props: IAddressFieldsProps<IAdressFieldsValues>,
): ReactElement {
  const {
    streetProps = {
      label: 'Street Name',
      placeholder: 'Pall Mall',
    },
    cityProps = {
      label: 'City',
      placeholder: 'London',
    },
    countryProps = { label: 'Country', placeholder: 'United Kingdom' },
    numberProps = { label: 'Street number', placeholder: '89' },
    onChange,
    postCodeProps = {
      label: 'Postal code',
      placeholder: 'SW1Y 5HS',
    },
    value,
  } = props;

  function onChangeHandle(label: string, value: string): void {
    onChange?.({ [label]: value });
  }

  const inputs = [
    {
      description: streetProps.description,
      label: streetProps.label,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandle('street', e.target.value);
      },
      placeholder: streetProps.placeholder,
      value: value?.street,
    },
    {
      description: numberProps.description,
      label: numberProps.label,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandle('number', e.target.value);
      },
      placeholder: numberProps.placeholder,
      value: value?.number,
    },
    {
      description: cityProps.description,
      label: cityProps.label,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandle('city', e.target.value);
      },
      placeholder: cityProps.placeholder,
      value: value?.city,
    },
    {
      description: postCodeProps.description,
      label: postCodeProps.label,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandle('postCode', e.target.value);
      },
      placeholder: postCodeProps.placeholder,
      value: value?.postCode,
    },
    {
      description: countryProps.description,
      label: countryProps.label,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandle('country', e.target.value);
      },
      placeholder: countryProps.placeholder,
      value: value?.country,
    },
  ];

  return (
    <div className={classes.inputContainer}>
      {inputs.map((input) => {
        return (
          <TextInput
            key={input.label as string}
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
  );
}
