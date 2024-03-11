import type { ReactElement } from 'react';
import type {
  FieldErrors,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';

import { Button, Card, Checkbox, Group, TextInput } from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';

import { withExceptionCapturing } from '../../utilities/react-hook-form-utilities';

export interface IStep1Fields {
  email: string;
  termsOfService: boolean;
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
    formState: { errors },
  } = useForm<IStep1Fields>({
    defaultValues: {
      email: '',
      termsOfService: false,
    },
  });
  const onValidSubmit: SubmitHandler<IStep1Fields> = (data) =>
    onFormSubmit(data);
  const onInvalidSubmit: SubmitErrorHandler<IStep1Fields> = (errors) =>
    onFormErrors(errors);

  return (
    <Card bg="orange.2" p={20} radius={10}>
      <p>Step 1</p>
      <form
        onSubmit={withExceptionCapturing(
          handleSubmit(onValidSubmit, onInvalidSubmit),
        )}
      >
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
