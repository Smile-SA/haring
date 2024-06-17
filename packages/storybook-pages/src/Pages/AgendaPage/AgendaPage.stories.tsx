import type { Meta, StoryObj } from '@storybook/react';

import { AgendaPage as Cmp } from './AgendaPage';

const meta = {
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
