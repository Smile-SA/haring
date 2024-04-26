import type { IAddressGouvData } from '../FetchAutocompleteField/FetchAutoCompleteField.mock';
import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { AddressGouvAutocompleteField } from '../AddressGouvAutocompleteField/AddressGouvAutocompleteField';
import { getDataAddressGouvRequest } from '../FetchAutocompleteField/FetchAutoCompleteField.mock';

import { AddressAutocompleteFields as Cmp } from './AddressAutocompleteFields';
import { onOptionSubmitMock } from './AddressAutocompleteFields.mock';

const meta = {
  component: Cmp<IAddressGouvData>,
  tags: ['autodocs'],
  title: '3-custom/Form/AddressAutocompleteFields',
} satisfies Meta<typeof Cmp<IAddressGouvData>>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const AddressAutocompleteFieldsWithoutAutocompleteFieldsComponentProps: IStory =
  {
    args: {
      onFetchData: getDataAddressGouvRequest,
      onFieldsValuesChange: action('on change'),
      onOptionSubmit: onOptionSubmitMock,
    },
  };
