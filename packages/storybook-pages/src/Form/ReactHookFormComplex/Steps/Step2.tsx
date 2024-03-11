import type { ReactElement } from 'react';
import type {
  FieldErrors,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';

import { Button, Card, Group, TextInput } from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';

import { withExceptionCapturing } from '../../utilities/react-hook-form-utilities';

export interface IStep2Fields {
  familyName: string;
  firstName: string;
}

export interface IStep2Props {
  onFormErrors: (errors: FieldErrors<IStep2Fields>) => void;
  onFormSubmit: (data: IStep2Fields) => void;
}

export function Step2(props: IStep2Props): ReactElement {
  const { onFormErrors, onFormSubmit } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IStep2Fields>({
    defaultValues: {
      familyName: '',
      firstName: '',
    },
  });
  const onValidSubmit: SubmitHandler<IStep2Fields> = (data) =>
    onFormSubmit(data);
  const onInvalidSubmit: SubmitErrorHandler<IStep2Fields> = (errors) =>
    onFormErrors(errors);

  // TODO: validate something with multiple fields

  return (
    <Card bg="blue.2" p={20} radius={10}>
      <p>Step 2</p>
      <form
        onSubmit={withExceptionCapturing(
          handleSubmit(onValidSubmit, onInvalidSubmit),
        )}
      >
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <TextInput
              label="FirstName"
              placeholder="Your Firstname"
              withAsterisk
              {...field}
              error={errors.firstName?.message}
            />
          )}
          rules={{
            // pattern: {
            //   message: 'Invalid email',
            //   value: /\S+@\S+\.\S+/,
            // },
            required: 'Required field',
          }}
        />
        <Controller
          control={control}
          name="familyName"
          render={({ field }) => (
            <TextInput
              label="FamilyName"
              placeholder="Your FamilyName"
              withAsterisk
              {...field}
              error={errors.familyName?.message}
            />
          )}
          rules={{
            // pattern: {
            //   message: 'Invalid email',
            //   value: /\S+@\S+\.\S+/,
            // },
            required: 'Required field',
          }}
        />
        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Card>
  );
}
