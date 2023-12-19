import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { FilterList as Cmp } from './FilterList';
import { filtersMock } from './FilterList.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/FilterList',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const FilterList: IStory = {
  args: {
    filters: filtersMock,
    onActiveFiltersChange: action('Active filters changed'),
    onSubmit: action('Filters submitted'),
  },
};

export const ColumnDirection: IStory = {
  args: {
    direction: 'column',
    filters: filtersMock,
    onActiveFiltersChange: action('Active filters changed'),
    onSubmit: action('Filters submitted'),
    spacing: 12,
  },
};
