import type { IDynamicZoneBlockReference } from './DynamicZoneBlock/DynamicZoneBlock';
import type { IBaseBlock, IBaseBlockButton } from '../../types';
import type { IAction } from '@smile/haring-react-shared';

import {
  Alien,
  ArrowDown,
  ArrowUp,
  Leaf,
  Trash,
  TreasureChest,
} from '@phosphor-icons/react';
import { action } from '@storybook/addon-actions';

const dynamicZoneBlockActionsMock: IAction<IDynamicZoneBlockReference>[] = [
  {
    color: 'white',
    icon: <ArrowUp size={16} />,
    id: 'move-up',
    label: 'Move Up',
    onAction: action('Move block up'),
  },
  {
    color: 'white',
    icon: <ArrowDown size={16} />,
    id: 'move-down',
    label: 'Move Down',
    onAction: action('Move block down'),
  },
  {
    color: 'white',
    icon: <Trash size={16} />,
    id: 'delete',
    label: 'Delete',
    onAction: action('Delete block'),
  },
];

export const dynamicZoneBlocks: IBaseBlock[] = [
  {
    blockActions: dynamicZoneBlockActionsMock,
    blockHeader: (
      <>
        <Alien />
        First
      </>
    ),
    blockType: 'default',
    id: '1',
    opened: false,
    value: 'initial',
  },
  {
    blockActions: dynamicZoneBlockActionsMock,
    blockFooter: 'footer',
    blockHeader: (
      <>
        <Leaf />
        Second
      </>
    ),
    blockType: 'default',
    id: '2',
    opened: true,
    value: 'initial',
  },
  {
    blockActions: dynamicZoneBlockActionsMock,
    blockFooter: 'footer',
    blockHeader: (
      <>
        <TreasureChest />
        Third
      </>
    ),
    blockType: 'default',
    id: '3',
    opened: false,
    value: 'initial',
  },
];

export const dynamicZoneButtons: IBaseBlockButton[] = [
  { blockType: 'default', label: 'Default', leftSection: <Alien /> },
  { blockType: 'other', label: 'Other', leftSection: <Leaf /> },
  { blockType: 'stuff', label: 'Stuff', leftSection: <TreasureChest /> },
];
