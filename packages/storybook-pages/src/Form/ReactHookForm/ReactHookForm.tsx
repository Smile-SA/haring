import type { ReactElement } from 'react';
import type {
  FieldErrors,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';

import { Box, Button, Checkbox, Group, TextInput } from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';

import { withExceptionCapturing } from '../utilities/react-hook-form-utilities';

interface IFields {
  email: string;
  termsOfService: boolean;
}

export interface IReactHookFormProps {
  onFormErrors: (errors: FieldErrors<IFields>) => void;
  onFormSubmit: (data: IFields) => void;
}

export function ReactHookForm(props: IReactHookFormProps): ReactElement {
  const { onFormErrors, onFormSubmit } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFields>({
    defaultValues: {
      email: '',
      termsOfService: false,
    },
  });
  const onValidSubmit: SubmitHandler<IFields> = (data) => onFormSubmit(data);
  const onInvalidSubmit: SubmitErrorHandler<IFields> = (errors) =>
    onFormErrors(errors);

  return (
    <Box maw={340} mx="auto">
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
    </Box>
  );
}
