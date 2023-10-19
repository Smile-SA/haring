'use client';

import type { Meta, StoryObj } from '@storybook/react';

import Cmp from './DocumentDetails';

const meta = {
  component: Cmp,
  parameters: {
    layout: 'fullscreen',
  },
  title: '3-Custom/Pages/DocumentDetails',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const DocumentDetails: IStory = {
  args: {},
};
