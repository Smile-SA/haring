import type { IOpenStreetMapData } from './FetchAutoCompleteField.mock';
import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { getDataOpenStreetMapRequest } from './FetchAutoCompleteField.mock';
import { FetchAutocompleteField as Cmp } from './FetchAutocompleteField';

const meta = {
  component: Cmp<IOpenStreetMapData>,
  tags: ['autodocs'],
  title: '3-custom/Form/FetchAutocompleteField',
} satisfies Meta<typeof Cmp<IOpenStreetMapData>>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const FieldWithOpenStreetMapApi: IStory = {
  args: {
    onFetchData: getDataOpenStreetMapRequest,
    onOptionSubmit: action('location'),
  },
};
