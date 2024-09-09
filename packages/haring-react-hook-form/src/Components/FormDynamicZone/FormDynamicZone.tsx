import type {
  IFormDynBlock,
  IFormDynSubmit,
  IFormDynSubmitResults,
  IFormField,
  IFormFieldWithoutId,
} from '../../types';
import type { IBaseBlockButton, IBaseBlockType } from '@smile/haring-react';
import type { IDynamicZoneBlockReference } from '@smile/haring-react/src/Form/DynamicZone/DynamicZoneBlock/DynamicZoneBlock';
import type { IAction } from '@smile/haring-react-shared';
import type { ReactElement } from 'react';

import { Stack } from '@mantine/core';
import { ArrowDown, ArrowUp, Trash } from '@phosphor-icons/react';
import { DynamicZone } from '@smile/haring-react';
import { useFieldArray, useFormContext } from 'react-hook-form';

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

export interface IFormDynamicZoneProps {
  actionLabels?: IFormDynamicZoneActionLabels;
  dynamicBlocks: IFormDynBlock[];
  dynamicZoneName: string;
  onFormSubmit: (data: IFormDynSubmitResults) => void;
}

export function FormDynamicZone(props: IFormDynamicZoneProps): ReactElement {
  const {
    dynamicBlocks,
    dynamicZoneName,
    actionLabels = defaultActionLabels,
    onFormSubmit,
  } = props;

  const { control, register, handleSubmit, getValues } =
    useFormContext<Record<typeof dynamicZoneName, IFormFieldWithoutId[]>>();
  const { fields, append, remove, swap, update } = useFieldArray({
    control,
    name: dynamicZoneName,
  });
  const blockOptions: IBaseBlockButton[] = dynamicBlocks.map((b) => b.button);

  function renderBlock(block: IFormField, index: number): ReactElement {
    const correspondingType = dynamicBlocks.find(
      (b) => b.block.blockType === block.blockType,
    );
    if (correspondingType === undefined) {
      throw Error(
        `Could not find an IFormDynBlock of blocktype '${block.blockType} in given dynamicBlocks'`,
      );
    }
    return correspondingType.renderFunc(
      block,
      index,
      register,
      `${dynamicZoneName}.${index}.value` as const,
    );
  }

  function onRemove(ref: IDynamicZoneBlockReference): void {
    remove(ref.index);
  }

  function onSwap(
    ref: IDynamicZoneBlockReference,
    direction: 'down' | 'up',
  ): void {
    const secondIndex = ref.index + (direction === 'up' ? -1 : 1);
    if (secondIndex >= 0 && secondIndex < ref.arrayLength) {
      swap(ref.index, ref.index + (direction === 'up' ? -1 : 1));
    }
  }

  function onToggle(_block: IFormField, index: number, opened: boolean): void {
    const updatedBlock = getValues(dynamicZoneName)[index];
    update(index, { ...updatedBlock, opened });
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
    const correspondingType = dynamicBlocks.find(
      (b) => b.block.blockType === type,
    );
    if (correspondingType === undefined) {
      throw Error(
        `Could not find an IFormDynBlock of blocktype '${type} in given dynamicBlocks'`,
      );
    }
    append({
      ...correspondingType.block,
      blockActions: formDynamicZoneDefaultActions,
    });
  }

  function onSubmit(data: IFormDynSubmit): void {
    onFormSubmit(
      data[dynamicZoneName].map(
        ({ blockActions, blockHeader, blockFooter, ...block }) => block,
      ),
    );
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <DynamicZone<IFormField>
          blockOptions={blockOptions}
          blocks={fields}
          fluid
          m={0}
          onAppendBlock={onAppend}
          onRenderBlockContent={renderBlock}
          onToggleBlock={onToggle}
        />
        {/* TODO: Move this out, should be in the story/text not part of this component since it's just a field */}
        {/* TODO: then decide how to send errors/messages upwards, where they can go (everything should be doable with props) */}
        {/* TODO: build mock example of error messages and where they can go (at the form level, somewhere inside this component, in blocks... */}
        {/* TODO: then focus and nested focus, multiple errors, auto-opening a block if it wants to focus inside, auto-scroll the page */}
        {/* TODO: then animations */}
        <input style={{ margin: 'auto' }} type="submit" />
      </Stack>
    </form>
  );
}
