'use client';

import type { ISearchBarProps } from '../SearchBar/SearchBar';
import type { BoxProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { Box, createStyles } from '@mantine/core';

import { SearchBar } from '../SearchBar/SearchBar';

const useStyles = createStyles((theme) => ({
  search: {
    background: theme.colorScheme === 'dark' ? theme.black : theme.white,
    bottom: 0,
    left: 0,
    padding: '30px 64px',
    position: 'absolute',
    right: 0,
    translate: '0 100%',
  },
}));

export interface IHeaderSearchProps extends ISearchBarProps {
  boxProps?: BoxProps;
}

/** Additional props will be forwarded to the [Mantine Box component](https://mantine.dev/core/box) */
export function HeaderSearch(props: IHeaderSearchProps): ReactElement {
  const { boxProps, ...searchBarProps } = props;
  const { classes } = useStyles();

  return (
    <Box className={classes.search} {...boxProps}>
      <SearchBar {...searchBarProps} />
    </Box>
  );
}
