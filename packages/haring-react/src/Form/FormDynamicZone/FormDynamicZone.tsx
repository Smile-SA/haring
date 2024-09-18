import type { IBaseBlock, IFormDynamicZoneBlock } from '../../types';
import type { IBaseBlockButton, IBaseBlockType } from '@smile/haring-react';
import type { IDynamicZoneBlockReference } from '@smile/haring-react/src/Form/DynamicZone/DynamicZoneBlock/DynamicZoneBlock';
import type { IAction } from '@smile/haring-react-shared';
import type { ReactElement } from 'react';

import { ArrowDown, ArrowUp, Trash } from '@phosphor-icons/react';

import { DynamicZone } from '../DynamicZone/DynamicZone';

interface IFormDynamicZoneActionLabels {
  deleteLabel: string;
  moveDownLabel: string;
  moveUpLabel: string;
}

const defaultActionLabels: IFormDynamicZoneActionLabels = {
  deleteLabel: 'Delete',
  moveDownLabel: 'Move Down',
  moveUpLabel: 'Move Up',
};

export interface IFormDynamicZoneProps<T extends IBaseBlock> {
  actionLabels?: IFormDynamicZoneActionLabels;
  availableBlocks: IFormDynamicZoneBlock<T>[];
  blocksArray: T[];
  onUpdatedArray: (newBlocksArray: T[]) => void;
}

export function FormDynamicZone<T extends IBaseBlock>(
  props: IFormDynamicZoneProps<T>,
): ReactElement {
  const {
    actionLabels = defaultActionLabels,
    availableBlocks,
    blocksArray,
    onUpdatedArray,
  } = props;

  const blockOptions: IBaseBlockButton[] = availableBlocks.map((b) => b.button);

  function renderBlock(block: T, index: number): ReactElement {
    const correspondingType = availableBlocks.find(
      (b) => b.block.blockType === block.blockType,
    );
    if (correspondingType === undefined) {
      throw Error(
        `Could not render a block of blockType '${block.blockType} in given IFormDynamicZoneBlock[]'`,
      );
    }
    return correspondingType.renderFunc(block, index);
  }

  function onRemove(ref: IDynamicZoneBlockReference): void {
    const newArray = [...blocksArray];
    delete newArray[ref.index];
    onUpdatedArray(newArray);
  }

  function onSwap(
    ref: IDynamicZoneBlockReference,
    direction: 'down' | 'up',
  ): void {
    const secondIndex = ref.index + (direction === 'up' ? -1 : 1);
    if (secondIndex >= 0 && secondIndex < ref.arrayLength) {
      const newArray = [...blocksArray];
      // swap two elements in array
      newArray[ref.index] = newArray.splice(
        secondIndex,
        1,
        newArray[ref.index],
      )[0];
      onUpdatedArray(newArray);
    }
  }

  function onToggle(_block: T, index: number, opened: boolean): void {
    const newArray = [...blocksArray];
    newArray[index] = { ...newArray[index], opened };
    onUpdatedArray(newArray);
  }

  function isMoveDisabled(
    ref: IDynamicZoneBlockReference,
    direction: 'down' | 'up',
  ): boolean {
    return direction === 'up'
      ? ref.index === 0
      : ref.index === ref.arrayLength - 1;
  }

  const formDynamicZoneDefaultActions: IAction<IDynamicZoneBlockReference>[] = [
    {
      componentProps: (ref) => ({ disabled: isMoveDisabled(ref, 'up') }),
      icon: <ArrowUp size={16} />,
      id: 'move-up',
      label: actionLabels.moveUpLabel,
      onAction: (ref) => onSwap(ref, 'up'),
    },
    {
      componentProps: (ref) => ({ disabled: isMoveDisabled(ref, 'down') }),
      icon: <ArrowDown size={16} />,
      id: 'move-down',
      label: actionLabels.moveDownLabel,
      onAction: (ref) => onSwap(ref, 'down'),
    },
    {
      icon: <Trash size={16} />,
      id: 'delete',
      label: actionLabels.deleteLabel,
      onAction: onRemove,
    },
  ];

  function onAppend(type: IBaseBlockType): void {
    const correspondingType = availableBlocks.find(
      (b) => b.block.blockType === type,
    );
    if (correspondingType === undefined) {
      throw Error(
        `Could not append a block of blockType '${type} in given IFormDynamicZoneBlock[]'`,
      );
    }
    const newArray = [...blocksArray];
    newArray.push({
      ...(correspondingType.block as T),
      id: crypto.randomUUID(),
    });
    onUpdatedArray(newArray);
  }

  const blocksWithActions = blocksArray.map((b) => ({
    ...b,
    blockActions: formDynamicZoneDefaultActions,
  }));

  return (
    <DynamicZone<T>
      blockOptions={blockOptions}
      blocks={blocksWithActions}
      fluid
      m={0}
      onAppendBlock={onAppend}
      onRenderBlockContent={renderBlock}
      onToggleBlock={onToggle}
    />
  );
}
