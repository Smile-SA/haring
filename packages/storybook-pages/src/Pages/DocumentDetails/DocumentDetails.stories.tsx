import type { Meta, StoryObj } from '@storybook/react';

import { sharedMeta } from '../pages-story';

import { DocumentDetails as Cmp } from './DocumentDetails';

const meta = {
  ...sharedMeta,
  component: Cmp,
  parameters: {
    layout: 'fullscreen',
  },
  title: '3-custom/Pages/DocumentDetails',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const DocumentDetails: IStory = {
  args: {},
};
