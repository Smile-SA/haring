import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { AdressGouvAutocompleteField as Cmp } from './AdressGouvAutocompleteField';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Form/AdressGouvAutocompleteField',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const AdressGouvAutocompleteField: IStory = {
  args: {
    onOptionSubmit: action('location'),
  },
};
