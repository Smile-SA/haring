import type { Meta, StoryObj } from '@storybook/react';

import { DocumentBox as Cmp } from './DocumentBox';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/DocumentBox',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const DocumentBox: IStory = {
  args: {
    author: 'Aline',
    children: 'Children',
    date: 'Published on December 24, 2023',
    iconType: 'PDF',
    path: '(Customer > 567890456 > Invoices)',
    title: 'Random_File.PDF',
  },
};
