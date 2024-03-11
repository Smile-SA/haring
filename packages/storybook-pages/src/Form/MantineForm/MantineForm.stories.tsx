import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { MantineForm } from './MantineForm';

const meta = {
  component: MantineForm,
  title: '2-mantine/Form',
} satisfies Meta<typeof MantineForm>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const MantineFormExample: IStory = {
  args: {
    onFormErrors: action('Form Errors'),
    onFormSubmit: action('Form Submit'),
  },
};
