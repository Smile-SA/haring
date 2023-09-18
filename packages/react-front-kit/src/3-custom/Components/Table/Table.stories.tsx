import type { Meta, StoryObj } from '@storybook/react';

import { Table as Cmp } from './Table';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/Table',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Table: IStory = {
  args: {
    action: (action: string, _element) => {
      // eslint-disable-next-line no-alert
      alert(`Action: ${action}`);
    },
    columns: [
      {
        accessorKey: 'id',
        header: 'id',
      },
      {
        accessorKey: 'format',
        header: 'Format',
      },
      {
        accessorKey: 'title',
        header: 'Titre',
      },
      {
        accessorKey: 'creator',
        header: 'Créateur',
      },
      {
        accessorKey: 'date',
        header: 'Date publication',
      },
    ],
    data: [
      {
        creator: 'Valentin Perello',
        date: '20/05/2022',
        format: 'SVG',
        id: 1,
        title: 'Doc test',
      },
      {
        creator: 'Valentin Perello',
        date: '20/05/2022',
        format: 'PDF',
        id: 2,
        title: 'Doc test',
      },
      {
        creator: 'Valentin Perello',
        date: '20/05/2022',
        format: 'PDF',
        id: 3,
        title: 'Doc test',
      },
      {
        creator: 'Valentin Perello',
        date: '20/05/2022',
        format: 'PDF',
        id: 4,
        title: 'Doc test',
      },
      {
        creator: 'Valentin Perello',
        date: '20/05/2022',
        format: 'PDF',
        id: 5,
        title: 'Doc test',
      },
    ],
  },
};
