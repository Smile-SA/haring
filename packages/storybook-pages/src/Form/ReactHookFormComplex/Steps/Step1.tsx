import type { ReactElement } from 'react';
import type {
  FieldErrors,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';

import { Button, Card, Code, Group, Text, TextInput } from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';

import { withExceptionCapturing } from '../../utilities/react-hook-form-utilities';

export interface IStep1Fields {
  city: string;
  familyName: string;
  firstName: string;
  postalCode: number | '';
  streetName: string;
  streetNumber: string;
}

export interface IStep1Props {
  onFormErrors: (errors: FieldErrors<IStep1Fields>) => void;
  onFormSubmit: (data: IStep1Fields) => void;
}

export function Step1(props: IStep1Props): ReactElement {
  const { onFormErrors, onFormSubmit } = props;
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IStep1Fields>({
    defaultValues: {
      city: '',
      familyName: '',
      firstName: '',
      postalCode: '',
      streetName: '',
      streetNumber: '',
    },
  });
  const onValidSubmit: SubmitHandler<IStep1Fields> = (data) =>
    onFormSubmit(data);
  const onInvalidSubmit: SubmitErrorHandler<IStep1Fields> = (errors) =>
    onFormErrors(errors);

  return (
    <Card bg="blue.2" p={20} radius={10}>
      <p>Step 1</p>
      <form
        onSubmit={withExceptionCapturing(
          handleSubmit(onValidSubmit, onInvalidSubmit),
        )}
      >
        <Group justify="flex-start" mt="md">
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <TextInput
                label="First Name"
                placeholder="Your Firstname"
                withAsterisk
                {...field}
                error={errors.firstName?.message}
              />
            )}
            rules={{ required: 'Required field' }}
          />
          <Controller
            control={control}
            name="familyName"
            render={({ field }) => (
              <TextInput
                label="Family Name"
                placeholder="Your FamilyName"
                withAsterisk
                {...field}
                error={errors.familyName?.message}
              />
            )}
            rules={{ required: 'Required field' }}
          />
        </Group>
        <Group justify="flex-start" mt="md">
          <Controller
            control={control}
            name="streetNumber"
            render={({ field }) => (
              <TextInput
                label="Street N°"
                placeholder="123"
                withAsterisk
                {...field}
                error={errors.streetNumber?.message}
              />
            )}
            rules={{ required: 'Required field' }}
          />
          <Controller
            control={control}
            name="streetName"
            render={({ field }) => (
              <TextInput
                label="Street Name"
                placeholder="My Street"
                withAsterisk
                {...field}
                error={errors.streetName?.message}
              />
            )}
            rules={{ required: 'Required field' }}
          />
          <Controller
            control={control}
            name="city"
            render={({ field }) => (
              <TextInput
                label="City"
                placeholder="My City"
                withAsterisk
                {...field}
                error={errors.city?.message}
                onChange={(e) => field.onChange(e.target.value.toUpperCase())}
              />
            )}
            rules={{ required: 'Required field' }}
          />
          <Controller
            control={control}
            name="postalCode"
            render={({ field }) => (
              <TextInput
                label="Postal Code"
                placeholder="12345"
                withAsterisk
                {...field}
                error={errors.postalCode?.message}
              />
            )}
            rules={{
              minLength: {
                message: 'Postal codes must have 5 numbers',
                value: 5,
              },
              required: 'Required field',
              validate: {
                postalCode: (v) =>
                  getValues().city === 'LYON'
                    ? v.toString().startsWith('69')
                      ? true
                      : "Lyon's Postal Code must begin with 69"
                    : true,
              },
            }}
          />
        </Group>
        <Group justify="flex-start" mt="md">
          <Text size="lg">
            If City is <Code>Lyon</Code>, Postal Code must begin with{' '}
            <Code>69</Code>, in this format <Code>69xxx</Code>.
          </Text>
        </Group>
        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Card>
  );
}
