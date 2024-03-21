'use client';

import type { Meta, StoryObj } from '@storybook/react';

import { DocumentDetails as Cmp } from './Graphics';

const meta = {
  component: Cmp,
  parameters: {
    layout: 'fullscreen',
  },
  title: '2-mantine/Graphics',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const DocumentDetails: IStory = {
  args: {},
};
