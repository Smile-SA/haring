import type { IDynamicZoneBlockInternalComponentProps } from './DynamicZoneBlock/DynamicZoneBlock';
import type {
  IBaseBlockButton,
  IBaseBlockFull,
  IBaseBlockType,
} from '../../types';
import type {
  CardProps,
  ContainerProps,
  GroupProps,
  StackProps,
  TextProps,
} from '@mantine/core';
import type { ReactElement } from 'react';

import { Button, Container, Group, Stack, Text } from '@mantine/core';

import classes from './DynamicZone.module.css';
import { DynamicZoneBlock } from './DynamicZoneBlock/DynamicZoneBlock';

export interface IDynamicZoneProps extends ContainerProps {
  blockCardProps?: CardProps;
  blockOptions: IBaseBlockButton[];
  blocks: IBaseBlockFull[];
  blocksStackProps?: StackProps;
  bottomContainerProps?: ContainerProps;
  buttonsGroupProps?: GroupProps;
  buttonsText?: string;
  buttonsTextProps?: TextProps;
  internalBlockCardProps?: IDynamicZoneBlockInternalComponentProps;
  onAppendBlock: (blockType: IBaseBlockType) => void;
  onRenderBlockContent: (block: IBaseBlockFull, index: number) => ReactElement;
  onToggleBlock: (
    block: IBaseBlockFull,
    index: number,
    opened: boolean,
  ) => void;
}

export function DynamicZone(props: IDynamicZoneProps): ReactElement {
  const {
    blockCardProps,
    blockOptions,
    blocks,
    blocksStackProps,
    bottomContainerProps,
    buttonsGroupProps,
    buttonsText,
    buttonsTextProps,
    internalBlockCardProps,
    onAppendBlock,
    onRenderBlockContent,
    onToggleBlock,
    ...rootContainerProps
  } = props;

  function onAddBlock(blockType: IBaseBlockType): void {
    onAppendBlock(blockType);
  }

  return (
    <Container fluid p={0} {...rootContainerProps}>
      <Stack gap="sm" {...blocksStackProps}>
        {blocks.map((block, index) => (
          <DynamicZoneBlock
            {...blockCardProps}
            key={block.id}
            actions={block.blockActions}
            footerChildren={block.blockFooter}
            headerChildren={block.blockHeader}
            internalComponentProps={internalBlockCardProps}
            onToggle={(opened) => onToggleBlock(block, index, opened)}
            opened={block.opened}
            reference={{ arrayLength: blocks.length, id: block.id, index }}
          >
            {onRenderBlockContent(block, index)}
          </DynamicZoneBlock>
        ))}
      </Stack>
      <Container
        className={classes.buttonsContainer}
        fluid
        mt="lg"
        p="sm"
        {...bottomContainerProps}
      >
        <Text className={classes.buttonsLabel} fw="bold" {...buttonsTextProps}>
          {buttonsText}
        </Text>
        <Group {...buttonsGroupProps}>
          {blockOptions.map(({ blockType, ...button }) => (
            <Button
              radius="md"
              size="md"
              type="button"
              variant="default"
              {...button}
              key={`button-${blockType}`}
              onClick={() => onAddBlock(blockType)}
            >
              {button.label}
            </Button>
          ))}
        </Group>
      </Container>
    </Container>
  );
}
