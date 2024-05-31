'use client';

import type { Meta, StoryObj } from '@storybook/react';

import { TipTap as Cmp } from './TipTap';

const meta = {
  component: Cmp,
  parameters: {
    layout: 'fullscreen',
  },
  title: '2-mantine/TipTap',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const GraphicExamples: IStory = {
  args: {},
};
