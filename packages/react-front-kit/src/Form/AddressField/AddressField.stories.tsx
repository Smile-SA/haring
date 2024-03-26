import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { AddressField as Cmp } from './AddressField';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Form/AddressField',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const AddressField: IStory = {
  args: {
    onOptionSubmit: action('location'),
  },
};
