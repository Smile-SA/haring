'use client';
import type { PaginationProps } from '@mantine/core';
import type { FlexProps } from '@mantine/core/lib/Flex/Flex';
import type { SelectProps } from '@mantine/core/lib/Select/Select';
import type { ReactElement } from 'react';

import {
  Flex,
  Pagination as MantinePagination,
  Select,
  createStyles,
} from '@mantine/core';

const useStyles = createStyles(() => ({
  container: {
    justifyContent: 'space-between',
  },
}));

export interface IRowsPerPageOption {
  label?: string;
  value: number;
}

interface IPaginationProps extends FlexProps {
  onPageChange?: (value: number) => void;
  onRowsPerPageChange?: (value: number) => void;
  page: number;
  paginationProps?: PaginationProps;
  rowsPerPage: number;
  rowsPerPageLabel?: string;
  rowsPerPageOptions?: IRowsPerPageOption[];
  selectProps?: SelectProps;
  totalPages: number;
}

export function Pagination(props: IPaginationProps): ReactElement {
  const {
    onPageChange,
    onRowsPerPageChange,
    page,
    paginationProps,
    rowsPerPage,
    rowsPerPageLabel,
    rowsPerPageOptions = [],
    selectProps,
    totalPages,
    ...flexProps
  } = props;
  const { classes } = useStyles();

  /* methods */
  function handleChangeRowsPerPage(value: string): void {
    if (value) {
      onRowsPerPageChange?.(Number(value));
    }
  }

  function handleChangePage(value: number): void {
    onPageChange?.(value);
  }

  return (
    <Flex className={classes.container} data-testid="pagination" {...flexProps}>
      {rowsPerPageOptions.length > 0 && rowsPerPageLabel ? (
        <Select
          aria-label={rowsPerPageLabel}
          data={rowsPerPageOptions.map((option) => {
            return {
              label: option.label ?? option.value.toString(),
              value: option.value.toString(),
            };
          })}
          data-testid="pagination-rowsPerPage"
          onChange={handleChangeRowsPerPage}
          size="xs"
          value={rowsPerPage.toString()}
          {...selectProps}
        />
      ) : null}
      <MantinePagination
        data-testid="pagination-page"
        onChange={handleChangePage}
        radius="sm"
        size="sm"
        total={totalPages}
        value={page}
        withControls={false}
        {...paginationProps}
      />
    </Flex>
  );
}
