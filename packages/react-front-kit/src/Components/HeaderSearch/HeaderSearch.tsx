'use client';

import type { ISearchBarProps } from '../SearchBar/SearchBar';
import type { BoxProps } from '@mantine/core';
import type { ReactElement } from 'react';

import { Box } from '@mantine/core';

import { SearchBar } from '../SearchBar/SearchBar';

import classes from './HeaderSearch.module.css';

export interface IHeaderSearchProps extends ISearchBarProps {
  boxProps?: BoxProps;
}

/** Additional props will be forwarded to the [Mantine Box component](https://mantine.dev/core/box) */
export function HeaderSearch(props: IHeaderSearchProps): ReactElement {
  const { boxProps, ...searchBarProps } = props;

  return (
    <Box className={classes.search} {...boxProps}>
      <SearchBar {...searchBarProps} />
    </Box>
  );
}
