import type { Meta, StoryObj } from '@storybook/react';

import { FiltersBar as Cmp } from './FiltersBar';
import { activeFilters } from './FitlersBar.mock';
import { getMenu } from './SidebarFilterMenu/SidebarFilterMenu.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/FiltersBar',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const WithActiveFilters: IStory = {
  args: {
    activeFilters,
    defaultOpenedActiveFilters: true,
    defaultOpenedMenuIds: [1, 3, 10, 11],
    deleteButtonLabel: 'Remove all',
    filterButtonLabel: 'Filtrer',
    menus: getMenu(true),
    title: 'Active filters',
  },
};

export const WithoutActiveFilters: IStory = {
  args: {
    activeFilters: [],
    defaultOpenedActiveFilters: false,
    defaultOpenedMenuIds: [1, 3, 10, 11],
    deleteButtonLabel: 'Remove all',
    filterButtonLabel: 'Filtrer',
    menus: getMenu(false),
    title: 'Active filters',
  },
};
