import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { AddressFields as Cmp } from './AddressFields';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Form/AddressFields',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const AddressFields: IStory = {
  args: {
    onChange: action('onChange'),
  },
};
