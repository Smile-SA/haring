import type { Meta, StoryObj } from '@storybook/react';

import {
  DownloadSimple,
  Eye,
  PencilSimple,
  ShareNetwork,
  Star,
  Trash,
} from '@phosphor-icons/react';
import { action } from '@storybook/addon-actions';

import { FolderMove } from '../../../1-styleGuide/Icons';

import { Table as Cmp } from './Table';

const meta = {
  component: Cmp,
  parameters: { actions: { argTypesRegex: '' } },
  tags: ['autodocs'],
  title: '3-custom/Components/Table',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Table: IStory = {
  args: {
    actions: [
      {
        icon: <FolderMove />,
        isMassAction: true,
        label: 'Move in tree',
        onAction: action('Move in tree'),
      },
      {
        icon: <Eye />,
        label: 'Open document',
        onAction: action('Open document'),
      },
      {
        icon: <PencilSimple />,
        label: 'Edit document',
        onAction: action('Edit document'),
      },
      {
        icon: <Star />,
        label: 'Add to favorites',
        onAction: action('Add to favorites'),
      },
      {
        confirmation: true,
        icon: <ShareNetwork />,
        label: 'Share',
        onAction: action('Share'),
      },
      {
        icon: <DownloadSimple />,
        label: 'Download',
        onAction: action('Download'),
      },
      {
        color: 'red',
        confirmModalProps: {
          children: 'Are you sur you want to delete ?',
          confirmColor: 'red',
          confirmLabel: 'Delete',
          onCancel: action('Delete:Cancel'),
          onConfirm: action('Delete:Confirm'),
          title: 'Delete ?',
        },
        confirmation: true,
        icon: <Trash />,
        isMassAction: true,
        label: 'Delete',
        onAction: action('Delete'),
      },
    ],
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
    rowActionNumber: 3,
  },
};
