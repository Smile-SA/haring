'use client';

import type { BoxProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { Box, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    gap: '16px',
  },
  root: {
    backgroundColor: theme.fn.primaryColor(),
    color: theme.white,
    padding: '24px 32px',
  },
}));

export interface ICardHeaderProps extends BoxProps {
  children: ReactNode;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
}

export function CardHeader(props: ICardHeaderProps): ReactElement {
  const { children, leftSection, rightSection, ...rootProps } = props;
  const { classes } = useStyles();
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
