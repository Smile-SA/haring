import type { Meta, StoryObj } from '@storybook/react';

import { DashboardCard as Cmp } from './DashboardCard';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/DashboardCard',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const DashboardCard: IStory = {
  args: {},
};
