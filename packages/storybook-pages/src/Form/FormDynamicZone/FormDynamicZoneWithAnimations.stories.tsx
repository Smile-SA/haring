import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { FormDynamicZoneWithAnimations } from './FormDynamicZoneWithAnimations';

const meta = {
  component: FormDynamicZoneWithAnimations,
  title: '2-mantine/Form/FormDynamicZone',
} satisfies Meta<typeof FormDynamicZoneWithAnimations>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const WithAnimations: IStory = {
  args: {
    onFormErrors: action('Form Errors'),
    onFormSubmit: action('Form Submit'),
  },
};
