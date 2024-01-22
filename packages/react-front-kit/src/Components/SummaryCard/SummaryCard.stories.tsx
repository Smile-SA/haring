import type { Meta, StoryObj } from '@storybook/react';

import { SummaryCard as Cmp } from './SummaryCard';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/SummaryCard',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const SummaryCard: IStory = {
  args: {},
};
