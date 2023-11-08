import type { Meta, StoryObj } from '@storybook/react';

import { DocumentCard as Cmp } from './DocumentCard';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/DocumentCard',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const DocumentCard: IStory = {
  args: {
    author: 'Aline',
    children: 'Children',
    date: 'Published on December 24, 2023',
    iconType: 'PDF',
    path: '(Customer > 567890456 > Invoices)',
    title: 'Random_File.PDF',
  },
};
