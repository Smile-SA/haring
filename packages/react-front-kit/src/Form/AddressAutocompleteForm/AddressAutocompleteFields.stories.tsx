import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { getDataAddressGouvMock } from '../FetchAutocompleteField/FetchAutoCompleteField.mock';

import { AddressAutocompleteFields as Cmp } from './AddressAutocompleteFields';
import { onOptionSubmitMock } from './AddressAutocompleteFields.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Form/AddressAutocompleteFields',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const AddressAutocompleteFields: IStory = {
  args: {
    // @ts-expect-error-type
    onFetchData: getDataAddressGouvMock,
    onFieldsValuesChange: action('value change'),
    onOptionSubmit: onOptionSubmitMock,
  },
};
