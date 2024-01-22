'use client';

import type { FlexProps } from '@mantine/core/lib/Flex/Flex';
import type { ReactElement, ReactNode } from 'react';

import { Flex } from '@mantine/core';

import { useStyles } from './SummaryCard.style';

export interface ISummaryCardProps {
  children?: ReactNode;
  containerProps?: FlexProps;
}

export function SummaryCard(props: ISummaryCardProps): ReactElement {
  const { children, containerProps } = props;
  const { classes } = useStyles();

  return (
    <Flex
      align="center"
      className={classes.container}
      direction="row"
      gap="md"
      justify="center"
      wrap="nowrap"
      {...containerProps}
    >
      <div>left</div>
      <div>
        <div>top</div>
        <div>title</div>
        <div>children {children}</div>
      </div>
      <div>right</div>
    </Flex>
  );
}
