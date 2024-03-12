import type { IFields } from '../ReactHookFormComplex';
import type { ReactElement } from 'react';
import type {
  FieldErrors,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';

import { Button, Card, Checkbox, Group, Text, TextInput } from '@mantine/core';
import { Controller, useForm, useFormContext } from 'react-hook-form';

import { withExceptionCapturing } from '../../utilities/react-hook-form-utilities';

export interface IStep2Fields {
  email: string;
  termsOfService: boolean;
}

export interface IStep2Props {
  onFormErrors: (errors: FieldErrors<IStep2Fields>) => void;
  onFormSubmit: (data: IStep2Fields) => void;
}

export function Step2(props: IStep2Props): ReactElement {
  const { onFormErrors, onFormSubmit } = props;

  const { getValues } = useFormContext<IFields>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IStep2Fields>({
    defaultValues: {
      email: '',
      termsOfService: false,
    },
  });
  const onValidSubmit: SubmitHandler<IStep2Fields> = (data) =>
    onFormSubmit(data);
  const onInvalidSubmit: SubmitErrorHandler<IStep2Fields> = (errors) =>
    onFormErrors(errors);

  return (
    <Card bg="orange.2" p={20} radius={10}>
      <p>Step 2</p>
      <form
        onSubmit={withExceptionCapturing(
          handleSubmit(onValidSubmit, onInvalidSubmit),
        )}
      >
        <Text size="sm">Name: {getValues().fullName}</Text>
        <br />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextInput
              label="Email"
              placeholder="your@email.com"
              withAsterisk
              {...field}
              error={errors.email?.message}
            />
          )}
          rules={{
            pattern: {
              message: 'Invalid email',
              value: /\S+@\S+\.\S+/,
            },
            required: 'Required field',
          }}
        />
        <Controller
          control={control}
          name="termsOfService"
          render={({ field }) => (
            <Checkbox
              checked={field.value}
              label="I agree to sell my privacy"
              mt="md"
              {...field}
              value="termsOfService"
            />
          )}
        />
        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Card>
  );
}
