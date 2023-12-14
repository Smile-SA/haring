import type { Meta, StoryObj } from '@storybook/react';

import { FiltersCheckboxList as Cmp } from './FiltersCheckboxList';
import { filters } from './FiltersCheckboxList.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/FiltersCheckboxList',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const FiltersCheckboxList: IStory = {
  args: {
    filters,
  },
};
