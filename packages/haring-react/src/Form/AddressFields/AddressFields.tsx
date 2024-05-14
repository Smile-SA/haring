'use client';
import type { TextInputProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { TextInput } from '@mantine/core';

import classes from './AddressFields.module.css';

export interface IAddressFieldsValues {
  city?: string;
  country?: string;
  number?: string;
  postCode?: string;
  street?: string;
}

export interface IAddressFieldsProps {
  cityProps?: TextInputProps;
  countryProps?: TextInputProps;
  numberProps?: TextInputProps;
  onChange: (value: IAddressFieldsValues) => void;
  postCodeProps?: TextInputProps;
  streetProps?: TextInputProps;
  value?: IAddressFieldsValues;
}

export function AddressFields(props: IAddressFieldsProps): ReactElement {
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

  function onChangeHandle(key: string, val: string): void {
    const otherValue = value
      ? value
      : { city: '', country: '', number: '', postalCode: '', street: '' };
    onChange({ ...otherValue, [key]: val });
  }

  const inputs = [
    {
      description: streetProps.description,
      error: streetProps.error,
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandle('street', e.target.value);
      },
      label: streetProps.label,
      placeholder: streetProps.placeholder,
      value: value?.street,
    },
    {
      description: numberProps.description,
      error: numberProps.error,
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandle('number', e.target.value);
      },
      label: numberProps.label,
      placeholder: numberProps.placeholder,
      value: value?.number,
    },
    {
      description: cityProps.description,
      error: cityProps.error,
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandle('city', e.target.value);
      },
      label: cityProps.label,
      placeholder: cityProps.placeholder,
      value: value?.city,
    },
    {
      description: postCodeProps.description,
      error: postCodeProps.error,
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandle('postCode', e.target.value);
      },
      label: postCodeProps.label,
      placeholder: postCodeProps.placeholder,
      value: value?.postCode,
    },
    {
      description: countryProps.description,
      error: countryProps.error,
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandle('country', e.target.value);
      },
      label: countryProps.label,
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
            error={input.error}
            label={input.label}
            onChange={input.handleChange}
            placeholder={input.placeholder}
            value={input.value}
          />
        );
      })}
    </div>
  );
}
