import type {
  IBaseBlock,
  IBaseBlockButtonOptions,
  IBaseBlockFull,
  IDynamicZoneBlock,
} from '../../types';
import type { IZoneInternalComponentProps } from '../Zone/Zone';
import type {
  IZoneBlockInternalComponentProps,
  IZoneBlockReference,
} from '../Zone/ZoneBlock/ZoneBlock';
import type { IBaseBlockType } from '@smile/haring-react';
import type { IAction } from '@smile/haring-react-shared';
import type { ReactElement } from 'react';

import { ArrowDown, ArrowUp, Trash } from '@phosphor-icons/react';
import { isNotNullNorEmpty } from '@smile/haring-react-shared';
import { useMemo } from 'react';

import { Zone } from '../Zone/Zone';

interface IDynamicZoneActionLabels {
  deleteLabel: string;
  moveDownLabel: string;
  moveUpLabel: string;
}

const defaultActionLabels: IDynamicZoneActionLabels = {
  deleteLabel: 'Delete',
  moveDownLabel: 'Move Down',
  moveUpLabel: 'Move Up',
};

export interface IDynamicZoneProps<Block extends IBaseBlock> {
  actionLabels?: IDynamicZoneActionLabels;
  availableBlocks: IDynamicZoneBlock<Block>[];
  blocksArray: Block[];
  internalDynamicZoneProps?: {
    internalBlockComponentProps?: IZoneBlockInternalComponentProps;
    internalComponentProps?: IZoneInternalComponentProps;
  };
  onAppendUpdate: (newBlock: Block) => void;
  onRemoveUpdate: (index: number) => void;
  onSwapUpdate: (firstIndex: number, secondIndex: number) => void;
  onToggleUpdate: (index: number, opened: boolean) => void;
}

export function DynamicZone<Block extends IBaseBlock>(
  props: IDynamicZoneProps<Block>,
): ReactElement {
  const {
    actionLabels = defaultActionLabels,
    availableBlocks,
    blocksArray,
    internalDynamicZoneProps,
    onAppendUpdate,
    onRemoveUpdate,
    onSwapUpdate,
    onToggleUpdate,
  } = props;

  const blockOptions: IBaseBlockButtonOptions[] = useMemo(
    () =>
      availableBlocks.map((b) => {
        const { maxInstances, ...options } = b.blockButtonOptions;
        // compare buttonOptions maxInstances with current number of instances, disable button if the limit is hit
        const max = maxInstances ?? -1;
        const current = blocksArray.filter(
          (bl) => bl.blockType === b.block.blockType,
        ).length;
        return {
          ...options,
          disabled: max > -1 && current >= max,
        };
      }),
    [availableBlocks, blocksArray],
  );

  function renderBlock(block: IBaseBlockFull, index: number): ReactElement {
    const correspondingType = availableBlocks.find(
      (b) => b.block.blockType === block.blockType,
    );
    if (correspondingType === undefined) {
      throw Error(
        `Could not render a block of blockType '${block.blockType} in given IDynamicZoneBlock[]'`,
      );
    }
    return correspondingType.renderFunc(block, index);
  }

  function onRemove(ref: IZoneBlockReference): void {
    onRemoveUpdate(ref.index);
  }

  function onSwap(ref: IZoneBlockReference, direction: 'down' | 'up'): void {
    const secondIndex = ref.index + (direction === 'up' ? -1 : 1);
    if (secondIndex >= 0 && secondIndex < ref.arrayLength) {
      onSwapUpdate(ref.index, secondIndex);
    }
  }

  function onToggle(
    _block: IBaseBlockFull,
    index: number,
    opened: boolean,
  ): void {
    onToggleUpdate(index, opened);
  }

  function isMoveDisabled(
    ref: IZoneBlockReference,
    direction: 'down' | 'up',
  ): boolean {
    return direction === 'up'
      ? ref.index === 0
      : ref.index === ref.arrayLength - 1;
  }

  const dynamicZoneDefaultActions: IAction<IZoneBlockReference>[] = [
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
        `Could not append a block of blockType '${type} in given IDynamicZoneBlock[]'`,
      );
    }
    const newBlock = {
      ...correspondingType.block,
      id: crypto.randomUUID(),
    } as Block;
    onAppendUpdate(newBlock);
  }

  const blocksWithOptionsAndActions: IBaseBlockFull[] = blocksArray
    .filter(isNotNullNorEmpty)
    .map((b) => ({
      ...b,
      blockActions: dynamicZoneDefaultActions,
      ...availableBlocks.find((o) => o.block.blockType === b.blockType)
        ?.blockCardOptions,
    }));

  return (
    <Zone
      blockOptions={blockOptions}
      blocks={blocksWithOptionsAndActions}
      fluid
      m={0}
      onAppendBlock={onAppend}
      onRenderBlockContent={renderBlock}
      onToggleBlock={onToggle}
      {...internalDynamicZoneProps}
    />
  );
}
