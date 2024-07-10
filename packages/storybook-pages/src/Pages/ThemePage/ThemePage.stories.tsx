import type { Meta, StoryObj } from '@storybook/react';

import { sharedMeta } from '../pages-story';

import { ThemePage as Cmp } from './ThemePage';

const meta = {
  ...sharedMeta,
  component: Cmp,
  parameters: {
    layout: 'fullscreen',
  },
  title: '3-custom/Pages/ThemePage',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const ThemePage: IStory = {
  args: {},
};
