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
        id: 1,
        label: 'Dupont',
        onRemove: action('remove'),
        value: 'DUPONT',
      },
      {
        id: 1,
        label: 'Martin',
        onRemove: action('remove'),
        value: 'MARTIN',
      },
    ],
    deleteButtonLabel: 'Remove all',
    filterButtonLabel: 'Filtrer',
    sideBarFiltersMenu: menu,
    title: 'Filters actifs',
  },
};
