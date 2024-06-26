import type { Meta, StoryObj } from '@storybook/react';

import { useStorybookArgsConnect } from '@smile/haring-react-shared/storybook-utils';

import { FoldableColumnLayout as Cmp } from './FoldableColumnLayout';
import { mainContent, sidebarContent } from './FoldableColumnLayout.mock';

const meta = {
  component: Cmp,
  decorators: [
    function Component(Story, ctx) {
      const args = useStorybookArgsConnect(ctx.args, {
        onSearchChange: 'searchValue',
      });
      return <Story args={{ ...args }} />;
    },
  ],
  parameters: {
    layout: 'fullscreen',
  },
  title: '3-custom/Layouts/FoldableColumnLayout',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const FoldableColumnLayout: IStory = {
  args: {
    children: mainContent,
    sidebarContent,
    sidebarToggleLabel: 'View sidebar',
    topBarRight: 'topBarRight...',
    topBlock: 'topBlock...',
  },
};
