'use client';

import type { BoxProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { Box } from '@mantine/core';
import { NestedProvider, useThemes } from '@smile/haring-react-shared';

import classes from './CardHeader.module.css';

export interface ICardHeaderProps extends BoxProps {
  children: ReactNode;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
}

export function CardHeader(props: ICardHeaderProps): ReactElement {
  const { children, leftSection, rightSection, ...rootProps } = props;
  const { secondary } = useThemes();

  return (
    <Box className={classes.root} {...rootProps}>
      <NestedProvider className={classes.container} theme={secondary}>
        {Boolean(leftSection) && <div>{leftSection}</div>}
        <div className={classes.content}>{children}</div>
        {Boolean(rightSection) && <div>{rightSection}</div>}
      </NestedProvider>
    </Box>
  );
}
