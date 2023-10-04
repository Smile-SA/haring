import type { Meta, StoryObj } from '@storybook/react';

import { menu } from '@smile/react-front-kit/dist/3-custom/Components/SidebarMenu/SidebarMenu.mock';

import { SortableSidebarMenu as Cmp } from './SortableSidebarMenu';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/SidebarMenu',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const SortableSidebarMenu: IStory = {
  args: {
    component: 'nav',
    menu,
    openedMenuIds: [],
  },
};
