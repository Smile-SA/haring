import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { FormDynamicZone } from './FormDynamicZone';

const meta = {
  component: FormDynamicZone,
  title: '2-mantine/Form/FormDynamicZone',
} satisfies Meta<typeof FormDynamicZone>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const FormDynamicZoneExample: IStory = {
  args: {
    onFormErrors: action('Form Errors'),
    onFormSubmit: action('Form Submit'),
  },
};
