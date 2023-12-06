import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { FiltersBar as Cmp } from './FiltersBar';
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
    activeFilters: [
      {
        categoryId: [1],
        id: 1,
        label: 'Dupont',
        onRemove: action('remove'),
        value: 'DUPONT',
      },
      {
        categoryId: [1],
        id: 2,
        label: 'Martin',
        onRemove: action('remove'),
        value: 'MARTIN',
      },
      {
        categoryId: [3, 10],
        id: 3,
        label: 'Freelance',
        onRemove: action('remove'),
        value: 'Freelance',
      },
      {
        categoryId: [3, 11],
        id: 4,
        label: 'CDI',
        onRemove: action('remove'),
        value: 'CDI',
      },
    ],
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
    defaultOpenedMenuIds: [1, 3, 10, 11],
    deleteButtonLabel: 'Remove all',
    filterButtonLabel: 'Filtrer',
    menus: getMenu(false),
    title: 'Active filters',
  },
};
