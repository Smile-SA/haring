'use client';
import type { FlexProps, PaginationProps, SelectProps } from '@mantine/core';
import type { IOptions } from '@smile/haring-react-shared';
import type { ReactElement } from 'react';

import { Flex, Pagination as MantinePagination, Select } from '@mantine/core';

import classes from './Pagination.module.css';

export interface IPaginationProps extends FlexProps {
  isTransparent?: boolean;
  itemsPerPage: number;
  itemsPerPageAriaLabel?: string;
  itemsPerPageOptions?: IOptions<number>;
  onItemsPerPageChange?: (value: number) => void;
  onPageChange?: (value: number) => void;
  page: number;
  paginationProps?: PaginationProps;
  selectProps?: SelectProps;
  totalPages: number;
}

/** Additional props will be forwarded to the [Mantine Flex component](https://mantine.dev/core/flex) */
export function Pagination(props: IPaginationProps): ReactElement {
  const {
    isTransparent = false,
    itemsPerPage,
    itemsPerPageAriaLabel,
    itemsPerPageOptions = [],
    onItemsPerPageChange,
    onPageChange,
    page,
    paginationProps,
    selectProps,
    totalPages,
    ...flexProps
  } = props;

  /* methods */
  function handleChangeItemsPerPage(value: string | null): void {
    if (value) {
      onItemsPerPageChange?.(Number(value));
    }
  }

  function handleChangePage(value: number): void {
    onPageChange?.(value);
  }

  return (
    <Flex className={classes.container} data-testid="pagination" {...flexProps}>
      {itemsPerPageOptions.length > 0 && itemsPerPageAriaLabel ? (
        <Select
          aria-label={itemsPerPageAriaLabel}
          data={itemsPerPageOptions.map((option) => {
            return {
              label: option.label ?? option.value.toString(),
              value: option.value.toString(),
            };
          })}
          data-testid="pagination-itemsPerPage"
          onChange={handleChangeItemsPerPage}
          size="xs"
          value={itemsPerPage.toString()}
          {...selectProps}
        />
      ) : null}
      <MantinePagination
        autoContrast
        className={classes.pagination}
        classNames={{ control: isTransparent ? classes.transparent : '' }}
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
