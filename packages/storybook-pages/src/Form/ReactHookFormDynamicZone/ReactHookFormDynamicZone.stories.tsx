import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { ReactHookFormDynamicZone } from './ReactHookFormDynamicZone';

const meta = {
  component: ReactHookFormDynamicZone,
  title: '2-mantine/Form',
} satisfies Meta<typeof ReactHookFormDynamicZone>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const FormDynamicZoneExample: IStory = {
  args: {
    onFormErrors: action('Form Errors'),
    onFormSubmit: action('Form Submit'),
  },
};
