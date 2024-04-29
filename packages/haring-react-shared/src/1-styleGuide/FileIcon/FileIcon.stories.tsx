import type { Meta, StoryObj } from '@storybook/react';

import { FileIcon as Cmp } from './FileIcon';

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
  title: '1-StyleGuide/Icons/FileIcon',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const FileIcon: IStory = {
  args: {
    color: '#349f98',
    size: 45,
    type: 'pdf',
    weight: 'light',
  },
};
