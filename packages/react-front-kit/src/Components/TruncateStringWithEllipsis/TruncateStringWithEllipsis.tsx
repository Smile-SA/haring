'use client';

import type { ReactElement } from 'react';

import { createStyles } from '@mantine/core';

export interface ITruncateStringWithEllipsisProps {
  children: string;
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

export function TruncateStringWithEllipsis(
  props: ITruncateStringWithEllipsisProps,
): ReactElement {
  const { children } = props;
  const { classes } = useStyles();
  return <span className={classes.trucateRoot}>{children}</span>;
}
