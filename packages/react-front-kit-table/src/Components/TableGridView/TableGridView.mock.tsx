import type { ITableGridViewProps } from './TableGridView';
import type { IThumbnail, IThumbnailAction } from '@smile/react-front-kit';
import type { HandlerFunction } from '@storybook/addon-actions';

import {
  DownloadSimple,
  Eye,
  PencilSimple,
  ShareNetwork,
  Star,
  Trash,
} from '@phosphor-icons/react';
import { FolderMove } from '@smile/react-front-kit';
import { action } from '@storybook/addon-actions';

import { tableMock } from '../Table/Table.mock';

const thumbnailActionsMock: IThumbnailAction[] = [
  {
    icon: <FolderMove />,
    id: 'move',
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
      cancelLabel: 'Abort',
      children: <p>Are you sure ?</p>,
      confirmColor: 'red',
      confirmLabel: 'Remove',
      title: 'Remove File',
    },
    confirmation: true,
    icon: <Trash />,
    id: 'delete',
    label: 'Delete',
    onAction: action('Delete'),
  },
];

const baseThumbnailMock: Omit<IThumbnail, 'id' | 'label'> = {
  actions: thumbnailActionsMock,
  iconType: 'PDF',
};

const thumbnailsMock: IThumbnail[] = [
  {
    id: '1',
    label: 'Debit_Suivi_PREV',
    ...baseThumbnailMock,
  },
  {
    id: '2',
    label: 'Debit_Suivi_PREV_2',
    ...baseThumbnailMock,
    selected: true,
  },
  {
    id: '3',
    label: 'Debit_Suivi_PREV_3',
    ...baseThumbnailMock,
  },
];

const thumbnailGridMock = {
  cols: 5,
  gridActions: [
    {
      icon: <FolderMove size={16} />,
      id: 'move',
      label: 'Move in tree',
      onAction: action('Move selected in tree'),
    },
    {
      color: 'red',
      confirmModalProps: {
        cancelLabel: 'Abort',
        children: <p>Are you sure ?</p>,
        confirmColor: 'red',
        confirmLabel: 'Remove',
        title: 'remove x files ?',
      },
      confirmation: true,
      icon: <Trash size={16} />,
      id: 'delete',
      label: 'Delete',
      onAction: action('Delete selected'),
    },
  ],
  onThumbnailClick: (): HandlerFunction => action('Thumbnail clicked'),
  spacing: 25,
  thumbnails: thumbnailsMock,
  verticalSpacing: 25,
};

const { data, ...tableProps } = tableMock;
const { thumbnails, ...gridProps } = thumbnailGridMock;

export const tableGridViewProps: ITableGridViewProps<Record<string, unknown>> =
  {
    data,
    gridProps: { ...gridProps, idFieldName: 'id', labelFieldName: 'title' },
    tableProps,
  };
