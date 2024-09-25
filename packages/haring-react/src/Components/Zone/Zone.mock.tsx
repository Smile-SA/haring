import type { IZoneBlockReference } from './ZoneBlock/ZoneBlock';
import type { IBaseBlockButtonOptions, IBaseBlockFull } from '../../types';
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

const zoneBlockActionsMock: IAction<IZoneBlockReference>[] = [
  {
    icon: <ArrowUp size={16} />,
    id: 'move-up',
    label: 'Move Up',
    onAction: action('Move block up'),
  },
  {
    icon: <ArrowDown size={16} />,
    id: 'move-down',
    label: 'Move Down',
    onAction: action('Move block down'),
  },
  {
    icon: <Trash size={16} />,
    id: 'delete',
    label: 'Delete',
    onAction: action('Delete block'),
  },
];

export const zoneBlocksMock: IBaseBlockFull[] = [
  {
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

export const withActionsMock: IBaseBlockFull[] = [
  {
    blockActions: zoneBlockActionsMock,
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
    blockActions: zoneBlockActionsMock,
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
    blockActions: zoneBlockActionsMock,
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

export const zoneButtonsMock: IBaseBlockButtonOptions[] = [
  { blockType: 'default', label: 'Default', leftSection: <Alien /> },
  { blockType: 'other', label: 'Other', leftSection: <Leaf /> },
  { blockType: 'stuff', label: 'Stuff', leftSection: <TreasureChest /> },
];
