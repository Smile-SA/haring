import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { getDataAddressGouvMock } from '../FetchAutocompleteField/FetchAutoCompleteField.mock';

import { AddressAutocompleteForm as Cmp } from './AddressAutocompleteForm';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Form/AddressAutocompleteForm',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const AddressAutocompleteForm: IStory = {
  args: {
    // @ts-expect-error-type
    onFetchData: getDataAddressGouvMock,
    onOptionSubmit: action('location'),
  },
};
