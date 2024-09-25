import type { IZoneBlockInternalComponentProps } from './ZoneBlock/ZoneBlock';
import type {
  IBaseBlockButtonOptions,
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
import type { ReactElement, Ref } from 'react';

import { Button, Container, Group, Stack, Text, Tooltip } from '@mantine/core';

import classes from './Zone.module.css';
import { ZoneBlock } from './ZoneBlock/ZoneBlock';

export interface IZoneInternalComponentProps {
  arrayRootRef?: Ref<HTMLDivElement>;
  blockCardProps?: CardProps;
  blocksStackProps?: StackProps;
  bottomContainerProps?: ContainerProps;
  buttonsGroupProps?: GroupProps;
  buttonsTextProps?: TextProps;
}

export interface IZoneProps extends ContainerProps {
  blockOptions: IBaseBlockButtonOptions[];
  blocks: IBaseBlockFull[];
  buttonsText?: string;
  internalBlockComponentProps?: IZoneBlockInternalComponentProps;
  internalComponentProps?: IZoneInternalComponentProps;
  onAppendBlock: (blockType: IBaseBlockType) => void;
  onRenderBlockContent: (block: IBaseBlockFull, index: number) => ReactElement;
  onToggleBlock: (
    block: IBaseBlockFull,
    index: number,
    opened: boolean,
  ) => void;
}

export function Zone(props: IZoneProps): ReactElement {
  const {
    blockOptions,
    blocks,
    buttonsText,
    internalComponentProps,
    internalBlockComponentProps,
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
      <Stack
        gap="sm"
        {...internalComponentProps?.blocksStackProps}
        ref={internalComponentProps?.arrayRootRef}
      >
        {blocks.map((block, index) => (
          <ZoneBlock
            {...internalComponentProps?.blockCardProps}
            {...block.blockCardProps}
            key={block.id}
            actions={block.blockActions}
            footerChildren={
              typeof block.blockFooter === 'function'
                ? block.blockFooter(block, index)
                : block.blockFooter
            }
            headerChildren={
              typeof block.blockHeader === 'function'
                ? block.blockHeader(block, index)
                : block.blockHeader
            }
            internalComponentProps={internalBlockComponentProps}
            onToggle={(opened) => onToggleBlock(block, index, opened)}
            opened={block.opened}
            reference={{ arrayLength: blocks.length, id: block.id, index }}
          >
            {onRenderBlockContent(block, index)}
          </ZoneBlock>
        ))}
      </Stack>
      <Container
        className={classes.buttonsContainer}
        fluid
        mt="lg"
        p="sm"
        {...internalComponentProps?.bottomContainerProps}
      >
        {Boolean(buttonsText) && (
          <Text
            className={classes.buttonsLabel}
            fw="bold"
            {...internalComponentProps?.buttonsTextProps}
          >
            {buttonsText}
          </Text>
        )}
        <Group {...internalComponentProps?.buttonsGroupProps}>
          {blockOptions.map(
            ({ blockType, label, tooltipLabel, tooltipProps, ...button }) => (
              <Tooltip
                key={`button-${blockType}`}
                disabled={
                  tooltipLabel === '' ||
                  tooltipLabel === undefined ||
                  (typeof tooltipLabel === 'function' &&
                    tooltipLabel(button) === '')
                }
                label={
                  typeof tooltipLabel === 'function' && tooltipLabel(button)
                }
                {...tooltipProps}
              >
                <Button
                  className={classes.button}
                  radius="md"
                  size="md"
                  type="button"
                  variant="default"
                  {...button}
                  onClick={() => onAddBlock(blockType)}
                >
                  {(typeof label === 'function' && label(button)) ||
                    (typeof label === 'string' && label)}
                </Button>
              </Tooltip>
            ),
          )}
        </Group>
      </Container>
    </Container>
  );
}
