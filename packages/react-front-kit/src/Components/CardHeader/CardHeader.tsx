'use client';

import type { ReactElement, ReactNode } from 'react';

import { Box, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    gap: '16px',
  },
  root: {
    backgroundColor: theme.fn.primaryColor(),
    borderRadius: '16px 16px 0 0',
    color: theme.white,
    padding: '24px 32px',
  },
}));

export interface ICardHeaderProps {
  children: ReactNode;
  left?: ReactNode;
  right?: ReactNode;
}

export function CardHeader(props: ICardHeaderProps): ReactElement {
  const { children, left, right } = props;
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <div className={classes.container}>
        {Boolean(left) && <div>{left}</div>}
        <div>{children}</div>
        {Boolean(right) && <div>{right}</div>}
      </div>
    </Box>
  );
}
