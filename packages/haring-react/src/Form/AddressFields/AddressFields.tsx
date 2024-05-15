'use client';
import type { TextInputProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { TextInput } from '@mantine/core';

import classes from './AddressFields.module.css';

type ITextInputProps = Omit<TextInputProps, 'error'>;

export interface IAddressFieldsValues {
  city?: string;
  country?: string;
  number?: string;
  postCode?: string;
  street?: string;
}

export interface IAddressFieldsProps {
  cityProps?: ITextInputProps;
  countryProps?: ITextInputProps;
  errors?: {
    city?: string;
    country?: string;
    number?: string;
    postCode?: string;
    street?: string;
  };
  numberProps?: ITextInputProps;
  onChange: (value: IAddressFieldsValues) => void;
  postCodeProps?: ITextInputProps;
  streetProps?: ITextInputProps;
  value?: IAddressFieldsValues;
}

export function AddressFields(props: IAddressFieldsProps): ReactElement {
  const {
    errors,
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
      error: errors?.street,
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandle('street', e.target.value);
      },
      label: streetProps.label,
      placeholder: streetProps.placeholder,
      value: value?.street,
      ...streetProps,
    },
    {
      description: numberProps.description,
      error: errors?.number,
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandle('number', e.target.value);
      },
      label: numberProps.label,
      placeholder: numberProps.placeholder,
      value: value?.number,
      ...numberProps,
    },
    {
      description: cityProps.description,
      error: errors?.city,
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandle('city', e.target.value);
      },
      label: cityProps.label,
      placeholder: cityProps.placeholder,
      value: value?.city,
      ...cityProps,
    },
    {
      description: postCodeProps.description,
      error: errors?.postCode,
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandle('postCode', e.target.value);
      },
      label: postCodeProps.label,
      placeholder: postCodeProps.placeholder,
      value: value?.postCode,
      ...postCodeProps,
    },
    {
      description: countryProps.description,
      error: errors?.country,
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandle('country', e.target.value);
      },
      label: countryProps.label,
      placeholder: countryProps.placeholder,
      value: value?.country,
      ...countryProps,
    },
  ];

  return (
    <div className={classes.inputContainer}>
      {inputs.map((input) => {
        return (
          <TextInput
            key={input.label as string}
            className={classes.input}
            onChange={input.handleChange}
            {...input}
          />
        );
      })}
    </div>
  );
}
