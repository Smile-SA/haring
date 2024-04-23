'use client';
import type { IAddressFieldsValues } from '../AddressFields/AddressFields';
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
  addressFieldsProps: IAddressFieldsValues;
  onFieldsValuesChange?: (value: IAddressFieldsValues) => void;
  onOptionSubmit: (value: IValue<T>) => IAddressFieldsValues;
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

  function onChangeHandle(values: IAddressFieldsValues): void {
    values.street !== undefined && setStreetValue(values.street);
    values.number !== undefined && setNumberValue(values.number);
    values.city !== undefined && setCityValue(values.city);
    values.postCode !== undefined && setPostCodeValue(values.postCode);
    values.country !== undefined && setCountryValue(values.country);
  }

  return (
    <div>
      <FetchAutocompleteField
        onOptionSubmit={(value) => onOptionSubmitHandle(value)}
        {...fetchAutocompleteFieldProps}
      />
      <AddressFields
        onChange={(values) => onChangeHandle(values)}
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
