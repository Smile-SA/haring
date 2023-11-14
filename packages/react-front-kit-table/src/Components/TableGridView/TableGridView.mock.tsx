import type { ITableGridViewProps } from './TableGridView';
import type { IThumbnail } from '@smile/react-front-kit';
import type { HandlerFunction } from '@storybook/addon-actions';

import { Trash } from '@phosphor-icons/react';
import { FolderMove, baseThumbnail } from '@smile/react-front-kit';
import { action } from '@storybook/addon-actions';

import { tableMock } from '../Table/Table.mock';

const thumbnailsMock: IThumbnail[] = [
  {
    id: '1',
    label: 'Debit_Suivi_PREV',
    ...baseThumbnail,
  },
  {
    id: '2',
    label: 'Debit_Suivi_PREV_2',
    ...baseThumbnail,
    selected: true,
  },
  {
    id: '3',
    label: 'Debit_Suivi_PREV_3',
    ...baseThumbnail,
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
