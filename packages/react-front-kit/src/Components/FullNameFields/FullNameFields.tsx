'use client';

import type { TextInputProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { TextInput } from '@mantine/core';
import { useState } from 'react';

import classes from './FullNaleFields.module.css';

interface IFullNameFieldsValues {
  firstNameValue?: string;
  lastNameValue?: string;
}

type ITextInputProps = Omit<
  TextInputProps,
  'defaultValue' | 'error' | 'label' | 'placeholder'
>;

export interface IFullNameFieldsProps {
  firstNameDefaultValue?: string;
  firstNameError?: string;
  firstNameLabel?: string;
  firstNamePlaceholder?: string;
  firstNameProps: ITextInputProps;
  lastNameDefaultValue?: string;
  lastNameError?: string;
  lastNameLabel?: string;
  lastNamePlaceholder?: string;
  lastNameProps: ITextInputProps;
  onGetValues: (value: IFullNameFieldsValues) => void;
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
  } = props;

  onGetValues({ firstNameValue, lastNameValue });
  return (
    <div className={classes.root}>
      <TextInput
        defaultValue={firstNameDefaultValue}
        error={firstNameError}
        label={firstNameLabel}
        onChange={(e) => setFirstNameValue(e.target.value)}
        placeholder={firstNamePlaceholder}
        value={firstNameValue}
        {...firstNameProps}
      />
      <TextInput
        defaultValue={lastNameDefaultValue}
        error={lastNameError}
        label={lastNameLabel}
        onChange={(e) => setLastNameValue(e.target.value)}
        placeholder={lastNamePlaceholder}
        value={lastNameValue}
        {...lastNameProps}
      />
    </div>
  );
}
