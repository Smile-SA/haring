import type { Meta, StoryObj } from '@storybook/react';

import { SearchableList as Cmp } from './SearchableList';
import { checkboxesMock } from './SearchableList.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/SearchableList',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const SearchableList: IStory = {
  args: {
    checkboxes: checkboxesMock,
  },
};
