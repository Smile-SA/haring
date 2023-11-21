import type { IThumbnail } from '../Thumbnail/Thumbnail';
import type { HandlerFunction } from '@storybook/addon-actions';

import { Trash } from '@phosphor-icons/react';
import { FolderMove } from '@smile/react-front-kit-shared';
import { action } from '@storybook/addon-actions';

import { thumbnailActionsMock } from '../Thumbnail/Thumbnail.mock';

export const baseThumbnailMock: Omit<IThumbnail, 'id' | 'label'> = {
  actions: thumbnailActionsMock,
  iconType: 'PDF',
};

export const thumbnails: IThumbnail[] = [
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

export const thumbnailGridMock = {
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
  thumbnails,
  verticalSpacing: 25,
};
