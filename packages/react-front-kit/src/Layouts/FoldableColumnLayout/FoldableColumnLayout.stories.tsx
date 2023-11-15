import type { Meta, StoryObj } from '@storybook/react';

import { useStorybookArgsConnect } from '@smile/react-front-kit-shared/storybook-utils';

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
  title: '3-Custom/Layouts/FoldableColumnLayout',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const FoldableColumnLayout: IStory = {
  args: {
    children: mainContent,
    containerProps: { p: '20px' },
    sidebarContent,
    sidebarToggleLabel: 'View sidebar',
  },
};
