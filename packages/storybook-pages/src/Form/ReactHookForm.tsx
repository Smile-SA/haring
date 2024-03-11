import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';

import { Box, Button, Checkbox, Group, TextInput } from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';

interface IFields {
  email: string;
  termsOfService: boolean;
}

function withExceptionCapturing<S, T extends unknown[]>(
  fn: (...rest: T) => Promise<S>,
) {
  return (...args: T) => {
    fn(...args).catch((error) => {
      console.log('Unexpected error', error);
    });
  };
}

export function ReactHookForm(): ReactElement {
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
  const onSubmit: SubmitHandler<IFields> = (data) => console.log(data);
  console.log('render');

  // TODO: make complex example with multi-step form,
  //  all different kinds of default and complex validation, multi-field and custom validation,
  //  nested forms,
  //  and dynamic field adding/deleting/moving
  //  Make the same example with @mantine/form maybe?

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={withExceptionCapturing(handleSubmit(onSubmit))}>
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
