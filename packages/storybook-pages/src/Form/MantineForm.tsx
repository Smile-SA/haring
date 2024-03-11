import type { FormErrors } from '@mantine/form';
import type { ReactElement } from 'react';

import { Box, Button, Checkbox, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

interface IFields {
  email: string;
  termsOfService: boolean;
}

export interface IMantineFormProps {
  onFormErrors: (errors: FormErrors) => void;
  onFormSubmit: (data: IFields) => void;
}

export function MantineForm(props: IMantineFormProps): ReactElement {
  const { onFormErrors, onFormSubmit } = props;
  const form = useForm<IFields>({
    initialValues: {
      email: '',
      termsOfService: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form
        onSubmit={form.onSubmit(
          (values) => onFormSubmit(values),
          (validationErrors) => onFormErrors(validationErrors),
        )}
      >
        <TextInput
          label="Email"
          placeholder="your@email.com"
          withAsterisk
          {...form.getInputProps('email')}
        />
        <Checkbox
          label="I agree to sell my privacy"
          mt="md"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />
        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
