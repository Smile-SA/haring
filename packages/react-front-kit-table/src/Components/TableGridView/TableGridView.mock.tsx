import type { ITableGridViewProps } from './TableGridView';
import type { HandlerFunction } from '@storybook/addon-actions';

import { Trash } from '@phosphor-icons/react';
import { FolderMove, thumbnailActionsMock } from '@smile/react-front-kit';
import { action } from '@storybook/addon-actions';

import { tableMock } from '../Table/Table.mock';

const gridProps = {
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
  idFieldName: 'id',
  labelFieldName: 'title',
  onThumbnailClick: (): HandlerFunction => action('Thumbnail clicked'),
  spacing: 25,
  thumbnailActions: thumbnailActionsMock,
  verticalSpacing: 25,
};

const { data, ...tableProps } = tableMock;

export const tableGridViewProps: ITableGridViewProps<Record<string, unknown>> =
  {
    data,
    gridProps,
    tableProps,
  };
