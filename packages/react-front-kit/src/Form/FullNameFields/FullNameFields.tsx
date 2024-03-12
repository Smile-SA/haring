'use client';

import type { FlexProps, TextInputProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { Flex, TextInput } from '@mantine/core';
import { useState } from 'react';

interface IFullNameFieldsValues {
  firstNameValue?: string;
  lastNameValue?: string;
}

type ITextInputProps = Omit<
  TextInputProps,
  'defaultValue' | 'error' | 'label' | 'placeholder'
>;

export interface IFullNameFieldsProps extends FlexProps {
  firstNameDefaultValue?: string;
  firstNameError?: string;
  firstNameLabel?: string;
  firstNamePlaceholder?: string;
  firstNameProps?: ITextInputProps;
  lastNameDefaultValue?: string;
  lastNameError?: string;
  lastNameLabel?: string;
  lastNamePlaceholder?: string;
  lastNameProps?: ITextInputProps;
  onGetValues?: (value: IFullNameFieldsValues) => void;
  onValueChange?: (name: string, value: string) => void;
}

export function FullNameFields(props: IFullNameFieldsProps): ReactElement {
  const [firstNameValue, setFirstNameValue] = useState<string | undefined>();
  const [lastNameValue, setLastNameValue] = useState<string | undefined>();

  const {
    firstNameLabel = 'First name',
    firstNamePlaceholder = 'Jean',
    firstNameDefaultValue,
    firstNameError,
    lastNameLabel = 'Last Name',
    lastNamePlaceholder = 'Dupont',
    lastNameDefaultValue,
    lastNameError,
    firstNameProps,
    lastNameProps,
    onGetValues,
    onValueChange,
    ...flexProps
  } = props;

  onGetValues && onGetValues({ firstNameValue, lastNameValue });

  function firstNameHandle(newValue: string): void {
    setFirstNameValue(newValue);
    onValueChange && onValueChange('firstName', newValue);
  }

  function lastNameHandle(newValue: string): void {
    setLastNameValue(newValue);
    onValueChange && onValueChange('lastName', newValue);
  }

  return (
    <Flex gap="sm" {...flexProps}>
      <TextInput
        defaultValue={firstNameDefaultValue}
        error={firstNameError}
        label={firstNameLabel}
        onChange={(e) => firstNameHandle(e.target.value)}
        placeholder={firstNamePlaceholder}
        value={firstNameValue}
        {...firstNameProps}
      />
      <TextInput
        defaultValue={lastNameDefaultValue}
        error={lastNameError}
        label={lastNameLabel}
        onChange={(e) => lastNameHandle(e.target.value)}
        placeholder={lastNamePlaceholder}
        value={lastNameValue}
        {...lastNameProps}
      />
    </Flex>
  );
}
