import type { Meta, StoryObj } from '@storybook/react';

import { Dropzone as Cmp } from './Dropzone';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/Dropzone',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Dropzone: IStory = {
  args: {
    children: undefined,
  },
};
