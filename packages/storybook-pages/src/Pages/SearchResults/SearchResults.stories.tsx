import type { Meta, StoryObj } from '@storybook/react';

import { sharedMeta } from '../pages-story';

import { SearchResults as Cmp } from './SearchResults';

const meta = {
  ...sharedMeta,
  component: Cmp,
  parameters: {
    layout: 'fullscreen',
  },
  title: '3-custom/Pages/SearchResults',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const SearchResults: IStory = {
  args: {},
};
