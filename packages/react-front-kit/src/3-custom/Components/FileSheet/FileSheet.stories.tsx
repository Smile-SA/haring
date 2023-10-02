import type { Meta, StoryObj } from '@storybook/react';

import { FileSheet as Cmp } from './FileSheet';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/FileSheet',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const FileSheet: IStory = {
  args: {
    dropZone: false,
    motifVisible: true,
    title: <h1>Jean-Michel DUPONT</h1>,
  },
};
