import type {
  ITableGridAction,
  ITableGridViewGridProps,
  ITableGridViewProps,
} from './TableGridView';

import {
  DownloadSimple,
  Eye,
  PencilSimple,
  ShareNetwork,
  Star,
  Trash,
} from '@phosphor-icons/react';
import { FolderMove } from '@smile/haring-react-shared';
import { action } from '@storybook/addon-actions';

import { tableMock } from '../Table/Table.mock';

const { actions, data, ...tableProps } = tableMock;
const gridProps: ITableGridViewGridProps = {
  cols: 5,
  idFieldName: 'id',
  labelFieldName: 'title',
  spacing: 25,
  verticalSpacing: 25,
};

export interface IExampleDataType extends Record<string, unknown> {
  creator: string;
  date: string;
  format: string;
  id: number | string;
  title: string;
}

export const actionsMock: ITableGridAction<IExampleDataType>[] = [
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
];

export const dataMock: IExampleDataType[] = [
  {
    creator: 'Quentin Le Caignec',
    date: '16/05/2022',
    format: 'SVG',
    id: 1,
    title: 'Doc test 1',
  },
  {
    creator: 'Quentin Le Caignec',
    date: '17/05/2022',
    format: 'PDF',
    id: 2,
    title: 'Doc test 2',
  },
  {
    creator: 'Quentin Le Caignec',
    date: '18/05/2022',
    format: 'ODT',
    id: 3,
    title: 'Doc test 3',
  },
  {
    creator: 'Quentin Le Caignec',
    date: '19/05/2022',
    format: 'DOC',
    id: 4,
    title: 'Doc test 4',
  },
  {
    creator: 'Quentin Le Caignec',
    date: '20/05/2022',
    format: 'JPG',
    id: 5,
    title: 'Doc test 5',
  },
  {
    creator: 'Quentin Le Caignec',
    date: '21/05/2022',
    format: 'PNG',
    id: 6,
    title: 'Doc test 6',
  },
  {
    creator: 'Quentin Le Caignec',
    date: '22/05/2022',
    format: 'PDF',
    id: 7,
    title: 'Doc test 7',
  },
];

export const tableGridViewProps: ITableGridViewProps<Record<string, unknown>> =
  {
    actions: actionsMock,
    data: dataMock,
    gridProps,
    tableProps,
  };
