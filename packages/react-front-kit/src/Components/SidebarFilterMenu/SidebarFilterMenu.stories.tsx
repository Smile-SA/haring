import type { Meta, StoryObj } from '@storybook/react';

import { SidebarFilterMenu as Cmp } from './SidebarFilterMenu';
import { menu } from './SidebarFilterMenu.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/SidebarFilterMenu',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const SidebarFilterMenu: IStory = {
  args: {
    component: 'nav',
    menu,
    openedMenuIds: [],
  },
};
