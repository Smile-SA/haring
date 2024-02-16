'use client';

import type { Meta, StoryObj } from '@storybook/react';

import { DashboardPage as Cmp } from './DashboardPage';

const meta = {
  component: Cmp,
  parameters: {
    layout: 'fullscreen',
  },
  title: '3-custom/Pages/DashboardPage',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const DashboardPage: IStory = {
  args: {},
};
