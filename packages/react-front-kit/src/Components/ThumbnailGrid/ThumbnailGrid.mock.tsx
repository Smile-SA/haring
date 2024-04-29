import type { IThumbnail, IThumbnailAction } from '../../types';
import type { HandlerFunction } from '@storybook/addon-actions';

import { Trash } from '@phosphor-icons/react';
import { FolderMove } from '@smile/haring-react-shared';
import { action } from '@storybook/addon-actions';

import { thumbnailActionsMock } from '../Thumbnail/Thumbnail.mock';

export const thumbnailGridActionsMock: IThumbnailAction[] = [
  {
    icon: <FolderMove size={16} />,
    id: 'move',
    isItemAction: false,
    isMassAction: true,
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
    isItemAction: false,
    isMassAction: true,
    label: 'Delete',
    onAction: action('Delete selected'),
  },
  ...thumbnailActionsMock,
];

export const baseThumbnailMock: Omit<IThumbnail, 'id' | 'label'> = {
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
  actions: thumbnailGridActionsMock,
  cols: 4,
  onActionOverride: undefined,
  onThumbnailClick: (): HandlerFunction => action('Thumbnail clicked'),
  spacing: 25,
  thumbnails,
  verticalSpacing: 25,
};
