import type { Meta, StoryObj } from '@storybook/react';

import { SearchResults as Cmp } from './SearchResults';

const meta = {
  component: Cmp,
  parameters: {
    layout: 'fullscreen',
  },
  title: '3-Custom/Pages/SearchResults',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const SearchResults: IStory = {
  args: {},
};
