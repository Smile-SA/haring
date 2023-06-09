import type { Meta, StoryObj } from '@storybook/react';

import { TestPage as Cmp } from './TestPage';

const meta = {
  component: Cmp,
  parameters: {
    layout: 'fullscreen',
  },
  title: '3-Custom/Pages/TestPage',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const TestPage: IStory = {
  args: {},
};
