import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import {
  getDataAddressGouvMock,
  getDataOpenStreetMapMock,
} from './FetchAutoCompleteField.mock';
import { FetchAutocompleteField as Cmp } from './FetchAutocompleteField';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Form/FetchAutocompleteField',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const FieldWithOpenStreetMapApi: IStory = {
  args: {
    // @ts-expect-error-type
    onFetchData: getDataOpenStreetMapMock,
    onOptionSubmit: action('location'),
  },
};

export const FieldWithAddressGouvApi: IStory = {
  args: {
    // @ts-expect-error-type
    onFetchData: getDataAddressGouvMock,
    onOptionSubmit: action('location'),
  },
};
