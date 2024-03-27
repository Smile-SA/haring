import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { FetchAutocompleteField as Cmp } from './FetchAutocompleteField';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Form/FetchAutocompleteField',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const FetchAutocompleteField: IStory = {
  args: {
    onOptionSubmit: action('location'),
  },
};
