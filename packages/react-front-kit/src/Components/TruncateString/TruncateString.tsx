'use client';

import type { ReactElement, ReactNode } from 'react';

import { createStyles } from '@mantine/core';

export interface ITruncateStringProps {
  children: ReactNode;
}

const useStyles = createStyles(() => ({
  trucateRoot: {
    display: 'inline-block',
    margin: 0,
    overflow: 'hidden',
    padding: 0,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },
}));

export function TruncateString(props: ITruncateStringProps): ReactElement {
  const { children } = props;
  const { classes } = useStyles();
  return <span className={classes.trucateRoot}>{children}</span>;
}
