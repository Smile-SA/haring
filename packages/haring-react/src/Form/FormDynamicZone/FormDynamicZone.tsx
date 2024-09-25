import type {
  IBaseBlock,
  IBaseBlockButtonOptions,
  IBaseBlockFull,
  IFormDynamicZoneBlock,
} from '../../types';
import type { IDynamicZoneInternalComponentProps } from '../DynamicZone/DynamicZone';
import type { IBaseBlockType } from '@smile/haring-react';
import type {
  IDynamicZoneBlockInternalComponentProps,
  IDynamicZoneBlockReference,
} from '@smile/haring-react/src/Form/DynamicZone/DynamicZoneBlock/DynamicZoneBlock';
import type { IAction } from '@smile/haring-react-shared';
import type { ReactElement } from 'react';

import { ArrowDown, ArrowUp, Trash } from '@phosphor-icons/react';
import { isNotNullNorEmpty } from '@smile/haring-react-shared';
import { useMemo } from 'react';

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

export interface IFormDynamicZoneProps<Block extends IBaseBlock> {
  actionLabels?: IFormDynamicZoneActionLabels;
  availableBlocks: IFormDynamicZoneBlock<Block>[];
  blocksArray: Block[];
  internalDynamicZoneProps?: {
    internalBlockComponentProps?: IDynamicZoneBlockInternalComponentProps;
    internalComponentProps?: IDynamicZoneInternalComponentProps;
  };
  onAppendUpdate: (newBlock: Block) => void;
  onRemoveUpdate: (index: number) => void;
  onSwapUpdate: (firstIndex: number, secondIndex: number) => void;
  onToggleUpdate: (index: number, opened: boolean) => void;
}

export function FormDynamicZone<Block extends IBaseBlock>(
  props: IFormDynamicZoneProps<Block>,
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
        `Could not render a block of blockType '${block.blockType} in given IFormDynamicZoneBlock[]'`,
      );
    }
    return correspondingType.renderFunc(block, index);
  }

  function onRemove(ref: IDynamicZoneBlockReference): void {
    onRemoveUpdate(ref.index);
  }

  function onSwap(
    ref: IDynamicZoneBlockReference,
    direction: 'down' | 'up',
  ): void {
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
      blockActions: formDynamicZoneDefaultActions,
      ...availableBlocks.find((o) => o.block.blockType === b.blockType)
        ?.blockCardOptions,
    }));

  return (
    <DynamicZone
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
