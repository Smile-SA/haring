'use client';

import type { Meta, StoryObj } from '@storybook/react';

import { DocumentReader as Cmp } from './DocumentReader';

const meta = {
  component: Cmp,
  parameters: {
    layout: 'fullscreen',
  },
  title: '3-Custom/Pages/DocumentReader',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const DocumentReader: IStory = {
  args: {},
};
