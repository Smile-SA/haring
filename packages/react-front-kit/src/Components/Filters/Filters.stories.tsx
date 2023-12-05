import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { Filters as Cmp } from './Filters';
import { menu } from './SidebarFilterMenu/SidebarFilterMenu.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/Filters',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Filters: IStory = {
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
    defaultOpenedMenuIds: [1, 3, 10, 11, 8],
    deleteButtonLabel: 'Remove all',
    filterButtonLabel: 'Filtrer',
    sideBarFiltersMenu: menu,
    title: 'Active filters',
  },
};
