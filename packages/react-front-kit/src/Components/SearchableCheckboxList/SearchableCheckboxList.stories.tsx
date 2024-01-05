import type { Meta, StoryObj } from '@storybook/react';

import { SearchableCheckboxList as Cmp } from './SearchableCheckboxList';
import { checkboxesMock } from './SearchableCheckboxList.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/SearchableCheckboxList',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const SearchableCheckboxList: IStory = {
  args: {
    checkboxes: checkboxesMock,
  },
};
