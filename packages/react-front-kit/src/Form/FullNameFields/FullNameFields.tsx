'use client';

import type { FlexProps, TextInputProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { Flex, TextInput } from '@mantine/core';

interface IFullNameFieldsValues {
  firstName?: string;
  lastName?: string;
}

export interface IFullNameFieldsProps<T extends IFullNameFieldsValues>
  extends Omit<FlexProps, 'onChange'> {
  firstNameProps?: TextInputProps;
  lastNameProps?: TextInputProps;
  onChange?: (value: T) => void;
  value?: T;
}

export function FullNameFields(
  props: IFullNameFieldsProps<IFullNameFieldsValues>,
): ReactElement {
  const { firstNameProps, lastNameProps, value, onChange, ...flexProps } =
    props;

  return (
    <Flex gap="sm" {...flexProps}>
      <TextInput
        label="First name"
        onChange={(e) => onChange?.({ ...value, lastName: e.target.value })}
        placeholder="Jean"
        value={value?.firstName}
        {...firstNameProps}
      />
      <TextInput
        label="Last name"
        onChange={(e) => onChange?.({ ...value, lastName: e.target.value })}
        placeholder="Dupont"
        value={value?.lastName}
        {...lastNameProps}
      />
    </Flex>
  );
}
