import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { AddressGouvAutocompleteField as Cmp } from './AddressGouvAutocompleteField';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Form/AddressGouvAutocompleteField',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const AddressGouvAutocompleteField: IStory = {
  args: {
    onOptionSubmit: action('location'),
  },
};
