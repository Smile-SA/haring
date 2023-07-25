import type { Meta, StoryObj } from '@storybook/react';

import { SidebarMenu as Cmp } from './SidebarMenu';
import { menu } from './SidebarMenu.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/SidebarMenu',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const SidebarMenu: IStory = {
  args: {
    menu,
  },
};
