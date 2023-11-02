import type { Meta, StoryObj } from '@storybook/react';

import { FileExtendType as Cmp } from './FileExtendType';

const meta = {
  argTypes: {
    color: {
      control: { type: 'color' },
    },
    weight: {
      control: { type: 'select' },
      options: ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'],
    },
  },
  component: Cmp,

  tags: ['autodocs'],
  title: '3-custom/Components/FileExtendType',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const FileExtendType: IStory = {
  args: {
    color: 'dark',
    size: 45,
    type: 'PDF',
    weight: 'light',
  },
};
