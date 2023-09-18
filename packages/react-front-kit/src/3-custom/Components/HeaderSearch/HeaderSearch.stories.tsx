import type { Meta, StoryObj } from '@storybook/react';

import { useStorybookArgsConnect } from '../../../hooks/useStorybookArgsConnect';

import { HeaderSearch as Cmp } from './HeaderSearch';

const meta = {
  component: Cmp,
  decorators: [
    function Component(Story, ctx) {
      const args = useStorybookArgsConnect(ctx.args, {
        onChange: 'value',
      });
      return (
        <div style={{ position: 'relative' }}>
          <Story args={{ ...args }} />
        </div>
      );
    },
  ],
  tags: ['autodocs'],
  title: '3-custom/Components/HeaderSearch',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const HeaderSearch: IStory = {
  args: {
    clearButtonAriaLabel: 'Clear',
    opened: false,
    value: '',
  },
};
