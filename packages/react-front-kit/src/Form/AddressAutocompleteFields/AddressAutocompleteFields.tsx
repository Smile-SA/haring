'use client';
import type { IAddressFields } from '../../../dist/Form/AddressAutocompleteFields/AddressAutocompleteFields';
import type {
  IFetchAutocompleteFieldProps,
  IValue,
} from '../FetchAutocompleteField/FetchAutocompleteField';
import type { TextInputProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { useState } from 'react';

import { AddressFields } from '../AddressFields/AddressFields';
import { FetchAutocompleteField } from '../FetchAutocompleteField/FetchAutocompleteField';

export interface IAddressAutocompleteFieldsProps<T>
  extends Omit<IFetchAutocompleteFieldProps<T>, 'onOptionSubmit'> {
  addressFieldsProps: IAddressFields;
  onFieldsValuesChange?: (value: IAddressFields) => void;
  onOptionSubmit: (value: IValue<T>) => IAddressFields;
  textInputProps?: TextInputProps;
}

export function AddressAutocompleteFields<T>(
  props: IAddressAutocompleteFieldsProps<T>,
): ReactElement {
  const {
    addressFieldsProps,
    onOptionSubmit,
    onFieldsValuesChange,
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

  return (
    <div>
      <FetchAutocompleteField
        onOptionSubmit={(value) => onOptionSubmitHandle(value)}
        {...fetchAutocompleteFieldProps}
      />
      <AddressFields
        value={{
          city: cityValue,
          country: countryValue,
          number: numberValue,
          postCode: postCodeValue,
          street: streetValue,
        }}
      />
    </div>
  );
}
