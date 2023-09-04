import type { Meta, StoryObj } from '@storybook/react';

import { Table as Cmp } from './Table';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/Table',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Table: IStory = {
  args: {},
};
