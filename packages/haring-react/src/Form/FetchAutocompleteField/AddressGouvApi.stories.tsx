import type { IAddressGouvData } from './FetchAutoCompleteField.mock';
import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { getDataAddressGouvRequest } from './FetchAutoCompleteField.mock';
import { FetchAutocompleteField as Cmp } from './FetchAutocompleteField';

const meta = {
  component: Cmp<IAddressGouvData>,
  tags: ['autodocs'],
  title: '3-custom/Form/FetchAutocompleteField',
} satisfies Meta<typeof Cmp<IAddressGouvData>>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const FieldWithAddressGouvApi: IStory = {
  args: {
    onFetchData: getDataAddressGouvRequest,
    onOptionSubmit: action('location'),
  },
};
