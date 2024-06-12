import type { Meta, StoryObj } from '@storybook/react';

import { sharedMeta } from '../pages-story';

import { AgendaPage as Cmp } from './AgendaPage';

const meta = {
  ...sharedMeta,
  args: { themePrimaryColor: 'cyan', themeSecondaryColor: 'gray' },
  component: Cmp,
  parameters: {
    layout: 'fullscreen',
  },
  title: '3-custom/Pages/AgendaPage',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const BrowsingPage: IStory = {
  args: {},
};
