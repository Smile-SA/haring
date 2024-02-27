import type { Meta, StoryObj } from '@storybook/react';

import { DataBadge as Cmp } from './DataBadge';

const meta = {
  argTypes: {
    color: {
      control: { type: 'color' },
    },
  },
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/DataBadge',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const DataBadgeLg: IStory = {
  args: {
    children: 'Application in progress',
    color: 'cyan',
    number: 48,
    size: 'lg',
  },
};

export const DataBadgeMd: IStory = {
  args: {
    children: 'Application in progress',
    number: 18,
  },
};
