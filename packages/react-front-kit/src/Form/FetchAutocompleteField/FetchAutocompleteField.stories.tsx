import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import {
  fetchAdressDataGouvMock,
  fetchOpenStreetMapMock,
  fetchOptionsMock,
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
    baseUrl: fetchOpenStreetMapMock.baseUrl,
    fetchDataLabelKey: fetchOpenStreetMapMock.fetchDataLabelKey,
    fetchOthersOptions: fetchOpenStreetMapMock.fetchOthersOptions,
    onOptionSubmit: action('location'),
  },
};

export const FieldWithAdressDataGouvApi: IStory = {
  args: {
    baseUrl: fetchAdressDataGouvMock.baseUrl,
    fetchDataLabelKey: fetchAdressDataGouvMock.fetchDataLabelKey,
    fetchOthersOptions: fetchAdressDataGouvMock.fetchOthersOptions,
    onOptionSubmit: action('location'),
  },
};
