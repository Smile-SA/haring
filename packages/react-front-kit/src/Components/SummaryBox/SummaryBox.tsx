'use client';

import type { GroupProps, StackProps } from '@mantine/core';
import type { FlexProps } from '@mantine/core/lib/Flex/Flex';
import type { ReactElement, ReactNode } from 'react';

import { Flex, Group, Stack } from '@mantine/core';
import { createStyles } from '@mantine/styles';

export interface ISummaryBoxProps extends FlexProps {
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

const useStyles = createStyles(() => ({
  grow: {
    flexGrow: 1,
  },
}));

export function SummaryBox(props: ISummaryBoxProps): ReactElement {
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
  const { classes } = useStyles();

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
          className={classes.grow}
          direction="column"
          gap={4}
          justify="start"
          {...contentContainerFlexProps}
        >
          {Boolean(topNode) && <Group {...topNodeGroupProps}>{topNode}</Group>}
          {Boolean(titleNode) && (
            <Group {...titleNodeGroupProps}>{titleNode}</Group>
          )}
          {Boolean(children) && (
            <Group className={classes.grow} {...childrenGroupProps}>
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
