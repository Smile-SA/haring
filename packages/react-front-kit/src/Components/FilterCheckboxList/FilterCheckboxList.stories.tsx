import type { Meta, StoryObj } from '@storybook/react';

import { FilterCheckboxList as Cmp } from './FilterCheckboxList';
import { filters } from './FilterCheckboxList.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/FilterCheckboxList',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const FilterCheckboxList: IStory = {
  args: {
    filters,
  },
};
