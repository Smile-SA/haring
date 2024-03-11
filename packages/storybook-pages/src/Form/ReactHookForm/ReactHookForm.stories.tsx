import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { ReactHookForm } from './ReactHookForm';

const meta = {
  component: ReactHookForm,
  title: '2-mantine/Form',
} satisfies Meta<typeof ReactHookForm>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const ReactHookFormExample: IStory = {
  args: {
    onFormErrors: action('Form Errors'),
    onFormSubmit: action('Form Submit'),
  },
};
