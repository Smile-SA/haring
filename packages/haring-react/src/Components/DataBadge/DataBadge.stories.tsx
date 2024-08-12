import type { Meta, StoryObj } from '@storybook/react';

import { DEFAULT_THEME } from '@mantine/core';

import { DataBadge as Cmp } from './DataBadge';

const colorOptions = Object.keys(DEFAULT_THEME.colors);
const meta = {
  argTypes: {
    color: {
      control: 'select',
      options: colorOptions,
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
