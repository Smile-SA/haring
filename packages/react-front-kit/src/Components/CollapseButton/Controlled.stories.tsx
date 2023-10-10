import type { Meta, StoryObj } from '@storybook/react';

import { useStorybookArgsConnect } from '@smile/react-front-kit-shared/src/storybook-utils';

import collapseButtonMeta, { CollapseButton } from './CollapseButton.stories';
import { CollapseButtonControlled as Cmp } from './CollapseButtonControlled';

const meta = {
  ...collapseButtonMeta,
  component: Cmp,
  decorators: [
    function Component(Story, ctx) {
      const args = useStorybookArgsConnect(ctx.args, {
        onCollapseChange: 'opened',
      });
      return <Story args={{ ...args }} />;
    },
  ],
  tags: [''],
  title: '3-custom/Components/CollapseButton',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Controlled: IStory = {
  args: {
    ...CollapseButton.args,
    opened: true,
  },
  parameters: {
    controls: {
      include: ['opened', 'onCollapseChange'],
    },
  },
};
