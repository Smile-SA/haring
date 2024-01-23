'use client';

import type { GroupProps, StackProps } from '@mantine/core';
import type { FlexProps } from '@mantine/core/lib/Flex/Flex';
import type { ReactElement, ReactNode } from 'react';

import { Flex, Group, Stack } from '@mantine/core';

export interface ICardContentProps extends FlexProps {
  children?: ReactNode;
  childrenGroupProps?: GroupProps;
  contentContainerFlexProps?: FlexProps;
  leftNode?: ReactNode;
  leftNodeStackProps?: StackProps;
  rightNode?: ReactNode;
  rightNodeStackProps?: StackProps;
  titleNode?: ReactNode;
  titleNodeGroupProps?: GroupProps;
  topNode?: ReactNode;
  topNodeGroupProps?: GroupProps;
}

export function CardContent(props: ICardContentProps): ReactElement {
  const {
    children,
    childrenGroupProps,
    contentContainerFlexProps,
    leftNode,
    leftNodeStackProps,
    rightNode,
    rightNodeStackProps,
    titleNode,
    titleNodeGroupProps,
    topNode,
    topNodeGroupProps,
    ...containerFlexProps
  } = props;

  return (
    <Flex
      align="stretch"
      gap="md"
      justify="stretch"
      wrap="nowrap"
      {...containerFlexProps}
    >
      {Boolean(leftNode) && (
        <Stack align="stretch" justify="flex-start" {...leftNodeStackProps}>
          {leftNode}
        </Stack>
      )}
      {Boolean(topNode || titleNode || children) && (
        <Flex
          align="stretch"
          direction="column"
          gap={4}
          justify="start"
          style={{ flexGrow: 1 }}
          {...contentContainerFlexProps}
        >
          {Boolean(topNode) && <Group {...topNodeGroupProps}>{topNode}</Group>}
          {Boolean(titleNode) && (
            <Group {...titleNodeGroupProps}>{titleNode}</Group>
          )}
          {Boolean(children) && (
            <Group style={{ flexGrow: 1 }} {...childrenGroupProps}>
              {children}
            </Group>
          )}
        </Flex>
      )}
      {Boolean(rightNode) && (
        <Stack align="stretch" justify="flex-start" {...rightNodeStackProps}>
          {rightNode}
        </Stack>
      )}
    </Flex>
  );
}
