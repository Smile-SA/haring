import type { Meta, StoryObj } from '@storybook/react';

import { BrowsingPage as Cmp } from './BrowsingPage';

const meta = {
  component: Cmp,
  parameters: {
    layout: 'fullscreen',
  },
  title: '3-Custom/Pages/BrowsingPage',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const BrowsingPage: IStory = {
  args: {},
};
