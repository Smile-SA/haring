import type { IActionBarProps } from './ActionBar';
import type { IThumbnail, IThumbnailAction } from '../../types';

import { Trash } from '@phosphor-icons/react';
import { FolderMove } from '@smile/react-front-kit-shared';
import { action } from '@storybook/addon-actions';

export const actionBarActionsMock: IThumbnailAction[] = [
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
      title: 'Remove files ?',
    },
    confirmation: true,
    icon: <Trash size={16} />,
    id: 'delete',
    isItemAction: false,
    isMassAction: true,
    label: 'Delete',
    onAction: action('Delete selected'),
  },
];

export const actionBarSelectedMock: IThumbnail[] = [
  {
    id: '1',
    label: 'Label A',
  },
  {
    id: '2',
    label: 'Label B',
  },
  {
    id: '3',
    label: 'Label C',
  },
];

export const actionBarLabelMock = (elements: number): string =>
  `${elements} selected`;

export const actionBarMock: IActionBarProps<IThumbnail> = {
  actions: actionBarActionsMock,
  selectedElements: actionBarSelectedMock,
  selectedElementsLabel: actionBarLabelMock,
};
