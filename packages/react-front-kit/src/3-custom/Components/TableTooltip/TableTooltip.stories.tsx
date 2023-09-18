import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@mantine/core';

import { TableTooltip as Cmp } from './TableTooltip';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/TableTooltip',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const TableTooltip: IStory = {
  args: {
    element: <Button>test</Button>,
    text: 'test',
  },
};
