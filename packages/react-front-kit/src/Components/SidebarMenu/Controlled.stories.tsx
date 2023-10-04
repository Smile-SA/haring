import type { Meta, StoryObj } from '@storybook/react';

import { useStorybookArgsConnect } from '@smile/react-front-kit-shared/src/storybook-utils';

import { menu } from './SidebarMenu.mock';
import { SidebarMenuControlled as Cmp } from './SidebarMenuControlled';

const meta = {
  component: Cmp,
  decorators: [
    function Component(Story, ctx) {
      const args = useStorybookArgsConnect(ctx.args, {
        onCollapseChange: 'openedMenuIds',
        onSelectedChange: 'selectedId',
      });
      return <Story args={{ ...args }} />;
    },
  ],
  tags: [''],
  title: '3-custom/Components/SidebarMenu',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Controlled: IStory = {
  args: {
    component: 'nav',
    menu,
    openedMenuIds: [],
  },
};
