'use client';
import type { IAddressFieldsValues } from '../AddressFields/AddressFields';
import type {
  IFetchAutocompleteFieldProps,
  IValue,
} from '../FetchAutocompleteField/FetchAutocompleteField';
import type { TextInputProps } from '@mantine/core';
import type { ElementType, ReactElement } from 'react';

import { useEffect, useState } from 'react';

import { AddressFields } from '../AddressFields/AddressFields';
import { FetchAutocompleteField } from '../FetchAutocompleteField/FetchAutocompleteField';

export interface IAddressAutocompleteFieldsProps<T>
  extends Omit<IFetchAutocompleteFieldProps<T>, 'onFetchData'> {
  AutocompleteField?: ElementType;
  addressFieldsProps?: IAddressFieldsValues;
  onFetchData?: (value: string) => Promise<IValue<T>[]>;
  onFieldsValuesChange?: (value: IAddressFieldsValues) => void;
  onOptionSubmit?: (value: IValue<T>) => IAddressFieldsValues;
  textInputProps?: TextInputProps;
}

export function AddressAutocompleteFields<T>(
  props: IAddressAutocompleteFieldsProps<T>,
): ReactElement {
  const {
    AutocompleteField = FetchAutocompleteField,
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

  function setAllFieldsValues(values: IAddressFieldsValues): void {
    setStreetValue(values.street ?? '');
    setNumberValue(values.number ?? '');
    setCityValue(values.city ?? '');
    setPostCodeValue(values.postCode ?? '');
    setCountryValue(values.country ?? '');
  }

  function onOptionSubmitHandle(value: IValue<T>): void {
    const addressFields = onOptionSubmit?.(value);
    addressFields && setAllFieldsValues(addressFields);
  }

  function onChangeHandle(values: IAddressFieldsValues): void {
    setAllFieldsValues(values);
    onFieldsValuesChange?.(values);
  }
  useEffect(() => {
    setAllFieldsValues(addressFieldsProps ?? {});
  }, [addressFieldsProps]);
  return (
    <div>
      <AutocompleteField
        onOptionSubmit={(value: IValue<T>) => onOptionSubmitHandle(value)}
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
        {...addressFieldsProps}
      />
    </div>
  );
}
