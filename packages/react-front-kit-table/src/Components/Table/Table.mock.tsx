import type { ITableProps } from './Table';

import {
  DownloadSimple,
  Eye,
  PencilSimple,
  ShareNetwork,
  Star,
  Trash,
} from '@phosphor-icons/react';
import { FolderMove } from '@smile/react-front-kit-shared';
import { action } from '@storybook/addon-actions';

export const tableMock: ITableProps<Record<string, unknown>> = {
  actions: [
    {
      icon: <FolderMove />,
      id: 'move',
      isMassAction: true,
      label: 'Move in tree',
      onAction: action('Move in tree'),
    },
    {
      icon: <Eye />,
      id: 'open',
      label: 'Open document',
      onAction: action('Open document'),
    },
    {
      icon: <PencilSimple />,
      id: 'edit',
      label: 'Edit document',
      onAction: action('Edit document'),
    },
    {
      icon: <Star />,
      id: 'favorite',
      label: 'Add to favorites',
      onAction: action('Add to favorites'),
    },
    {
      confirmation: true,
      icon: <ShareNetwork />,
      id: 'share',
      label: 'Share',
      onAction: action('Share'),
    },
    {
      icon: <DownloadSimple />,
      id: 'download',
      label: 'Download',
      onAction: action('Download'),
    },
    {
      color: 'red',
      confirmModalProps: {
        children: 'Are you sure you want to delete ?',
        confirmColor: 'red',
        confirmLabel: 'Delete',
        onCancel: action('Delete:Cancel'),
        onConfirm: action('Delete:Confirm'),
        title: 'Delete ?',
      },
      confirmation: true,
      icon: <Trash />,
      id: 'delete',
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
      date: '16/05/2022',
      format: 'SVG',
      id: 1,
      title: 'Doc test 1',
    },
    {
      creator: 'Valentin Perello',
      date: '17/05/2022',
      format: 'PDF',
      id: 2,
      title: 'Doc test 2',
    },
    {
      creator: 'Valentin Perello',
      date: '18/05/2022',
      format: 'PDF',
      id: 3,
      title: 'Doc test 3',
    },
    {
      creator: 'Valentin Perello',
      date: '19/05/2022',
      format: 'PDF',
      id: 4,
      title: 'Doc test 4',
    },
    {
      creator: 'Valentin Perello',
      date: '20/05/2022',
      format: 'PDF',
      id: 5,
      title: 'Doc test 5',
    },
    {
      creator: 'Valentin Perello',
      date: '21/05/2022',
      format: 'PDF',
      id: 6,
      title: 'Doc test 6',
    },
    {
      creator: 'Valentin Perello',
      date: '22/05/2022',
      format: 'PDF',
      id: 7,
      title: 'Doc test 7',
    },
  ],
  rowActionNumber: 3,
};
