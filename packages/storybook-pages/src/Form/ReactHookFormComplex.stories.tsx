import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { ReactHookFormComplex } from './ReactHookFormComplex';

const meta = {
  component: ReactHookFormComplex,
  title: '2-mantine/Form',
} satisfies Meta<typeof ReactHookFormComplex>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const ReactHookFormComplexExample: IStory = {
  args: {
    onFormErrors: action('Form Errors'),
    onFormSubmit: action('Form Submit'),
  },
};
