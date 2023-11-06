import type { Meta, StoryObj } from '@storybook/react';

import { ListViewItem as Cmp } from './ListViewItem';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/ListViewItem',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const ListViewItem: IStory = {
  args: {
    author: 'Aline',
    children: <>Children</>,
    date: 'Publié le 24 décembre 2023',
    iconType: 'PDF',
    path: 'Clients > 567890456 > Factures',
    title: <h1>Random_File.PDF</h1>,
  },
};
