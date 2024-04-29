import type { Meta, StoryObj } from '@storybook/react';

import { useStorybookArgsConnect } from '@smile/haring-react-shared/storybook-utils';

import { SearchBar as Cmp } from './SearchBar';

const meta = {
  component: Cmp,
  decorators: [
    function Component(Story, ctx) {
      const args = useStorybookArgsConnect(ctx.args, {
        onChange: 'value',
      });
      return <Story args={{ ...args }} />;
    },
  ],
  tags: ['autodocs'],
  title: '3-custom/Components/SearchBar',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const SearchBar: IStory = {
  args: {
    clearButtonAriaLabel: 'Clear',
    opened: false,
    value: '',
  },
};

export const SearchBarWithLeftSection: IStory = {
  args: {
    clearButtonAriaLabel: 'Clear',
    leftSection: (
      <span style={{ padding: '0 calc(3.125rem  / 3)' }}>Left Section...</span>
    ),
    opened: false,
    value: '',
  },
};
