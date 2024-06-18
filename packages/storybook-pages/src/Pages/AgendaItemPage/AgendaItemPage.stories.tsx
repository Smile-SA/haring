import type { Meta, StoryObj } from '@storybook/react';

import { sharedMeta } from '../pages-story';

import { AgendaItemPage as Cmp } from './AgendaItemPage';

const meta = {
  ...sharedMeta,
  args: { themePrimaryColor: 'cyan', themeSecondaryColor: 'gray' },
  component: Cmp,
  parameters: {
    layout: 'fullscreen',
  },
  title: '3-custom/Pages/AgendaItemPage',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const AgendaItemPage: IStory = {
  args: {},
};
