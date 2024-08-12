import type { IActionListProps } from './ActionList';
import type { IThumbnail, IThumbnailAction } from '../../types';

import { Trash } from '@phosphor-icons/react';
import { FolderMove } from '@smile/haring-react-shared';
import { action } from '@storybook/addon-actions';

export const actionRowOverflowActionsMock: IThumbnailAction[] = [
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
  {
    icon: <FolderMove size={16} />,
    id: 'test1',
    isItemAction: true,
    isMassAction: false,
    label: 'Overflow Test 1',
    onAction: action('Overflow Test 1'),
  },
  {
    icon: <FolderMove size={16} />,
    id: 'test2',
    isItemAction: false,
    isMassAction: true,
    label: 'Overflow Test 2',
    onAction: action('Overflow Test 2'),
  },
];

export const actionRowOverflowSelectedMock: IThumbnail[] = [
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

export const ActionListMock: IActionListProps<IThumbnail> = {
  actions: actionRowOverflowActionsMock,
  selectedElements: actionRowOverflowSelectedMock,
};
