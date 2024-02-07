'use client';

import type { BoxProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { Box } from '@mantine/core';

import classes from './CardHeader.module.css';

export interface ICardHeaderProps extends BoxProps {
  children: ReactNode;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
}

export function CardHeader(props: ICardHeaderProps): ReactElement {
  const { children, leftSection, rightSection, ...rootProps } = props;

  return (
    <Box className={classes.root} {...rootProps}>
      <div className={classes.container}>
        {Boolean(leftSection) && <div>{leftSection}</div>}
        <div>{children}</div>
        {Boolean(rightSection) && <div>{rightSection}</div>}
      </div>
    </Box>
  );
}
