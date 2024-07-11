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
      error: errors?.street,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandle('street', e.target.value);
      },
      value: value?.street,
      ...streetProps,
    },
    {
      error: errors?.number,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandle('number', e.target.value);
      },
      value: value?.number,
      ...numberProps,
    },
    {
      error: errors?.city,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandle('city', e.target.value);
      },
      value: value?.city,
      ...cityProps,
    },
    {
      error: errors?.postCode,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandle('postCode', e.target.value);
      },
      value: value?.postCode,
      ...postCodeProps,
    },
    {
      description: countryProps.description,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandle('country', e.target.value);
      },
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
            {...input}
          />
        );
      })}
    </div>
  );
}
