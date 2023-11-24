/* eslint-disable @typescript-eslint/no-unsafe-assignment*/
/* eslint-disable @typescript-eslint/no-unsafe-member-access*/
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

'use client';
import type { ITableAction, ITableConfirmAction } from '../../types';
import type { FloatingPosition } from '@mantine/core/lib/Floating';
import type { IPaginationProps } from '@smile/react-front-kit';
import type { MRT_Row, MRT_TableOptions } from 'mantine-react-table';
import type { ReactElement } from 'react';

import { ActionIcon, Button, Flex, Menu, Space, Tooltip } from '@mantine/core';
import {
  CaretDown,
  CaretUp,
  CaretUpDown,
  DotsThreeVertical,
  Funnel,
} from '@phosphor-icons/react';
import { ColumnPlus, ConfirmModal, Pagination } from '@smile/react-front-kit';
import {
  MantineReactTable,
  MRT_ShowHideColumnsButton as MrtShowHideColumnsButton,
  MRT_ToggleDensePaddingButton as MrtToggleDensePaddingButton,
  MRT_ToggleFiltersButton as MrtToggleFiltersButton,
  MRT_ToggleFullScreenButton as MrtToggleFullScreenButton,
  MRT_ToggleGlobalFilterButton as MrtToggleGlobalFilterButton,
  useMantineReactTable,
} from 'mantine-react-table';
import { useState } from 'react';

import {
  getActionComponentProps,
  getActionIcon,
  getActionLabel,
} from '../../helpers';

import { useStyles } from './Table.style';

export interface ITableProps<Data extends Record<string, unknown>>
  extends MRT_TableOptions<Data> {
  actions?: ITableAction<Data>[];
  menuLabel?: string;
  paginationProps?: Partial<IPaginationProps>;
  rowActionNumber?: number;
}

const tooltipProps = {
  color: 'gray.7',
  position: 'bottom' as FloatingPosition,
  radius: 6,
  withArrow: true,
  withinPortal: true,
};

/** Additional props will be forwarded to the [Mantine React Table useMantineReactTable hook](https://www.mantine-react-table.com/docs/api/table-options) */
export function Table<Data extends Record<string, unknown>>(
  props: ITableProps<Data>,
): ReactElement {
  const {
    actions = [],
    icons,
    initialState,
    menuLabel = 'Other actions',
    paginationDisplayMode = 'custom',
    paginationProps,
    rowActionNumber = 0,
    ...mantineTableProps
  } = props;
  const { enablePagination = true, manualPagination } = mantineTableProps;
  const { classes } = useStyles();
  const [confirmAction, setConfirmAction] =
    useState<ITableConfirmAction<Data> | null>(null);
  const [openedMenuRowIndex, setOpenedMenuRowIndex] = useState<number | null>(
    null,
  );

  // Calculated values
  const massActions = actions.filter(({ isMassAction }) => isMassAction);
  const rowActions = actions.filter(({ isItemAction = true }) => isItemAction);
  const visibleRowActions = rowActions.slice(0, rowActionNumber);
  const menuRowActions = rowActions.slice(rowActionNumber);

  // Handle
  function handleMenuChange(opened: boolean, index: number): void {
    if (opened) {
      setOpenedMenuRowIndex(index);
    } else {
      setOpenedMenuRowIndex(null);
    }
  }

  function handleAction(
    item: MRT_Row<Data> | MRT_Row<Data>[],
    action: ITableAction<Data>,
  ): void {
    if (action.confirmation) {
      setConfirmAction({ ...action, item });
    } else {
      action.onAction?.(item);
    }
  }

  function handleCancel(): void {
    if (
      confirmAction?.confirmModalProps?.onCancel?.(confirmAction.item) !== false
    ) {
      setConfirmAction(null);
    }
  }

  function handleClose(): void {
    setConfirmAction(null);
    confirmAction?.confirmModalProps?.onClose?.();
  }

  function handleConfirm(): void {
    if (
      confirmAction?.confirmModalProps?.onConfirm?.(confirmAction.item) !==
      false
    ) {
      setConfirmAction(null);
      confirmAction?.onAction?.(confirmAction.item);
    }
  }

  const table = useMantineReactTable({
    displayColumnDefOptions: {
      'mrt-row-actions': {
        header: undefined,
        size: 124,
      },
    },
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableGlobalFilter: false,
    enableRowActions: true,
    enableRowSelection: true,
    icons: {
      IconArrowsSort: CaretUpDown,
      IconColumns: ColumnPlus,
      // eslint-disable-next-line react/no-unstable-nested-components, react/no-multi-comp
      IconFilter: () => <Funnel size={18} />,
      // eslint-disable-next-line react/no-unstable-nested-components, react/no-multi-comp
      IconFilterOff: () => <Funnel size={18} />,
      IconSortAscending: CaretUp,
      IconSortDescending: CaretDown,
      ...icons,
    },
    initialState: {
      columnPinning: {
        right: ['mrt-row-actions'],
      },
      showColumnFilters: false,
      ...initialState,
    },
    mantinePaginationProps: {
      showRowsPerPage: false,
    },
    mantinePaperProps: {
      className: classes.paper,
    },
    mantineTableProps: {
      className: classes.table,
    },
    mantineToolbarAlertBannerProps: {
      className: classes.alertBanner,
    },
    manualFiltering: false,
    manualPagination: true,
    manualSorting: true,
    paginationDisplayMode,
    positionActionsColumn: 'last',
    positionToolbarAlertBanner: 'top',
    renderRowActions: ({ row }) => {
      const rowActionClasses = [classes.rowActions];
      if (row.index === openedMenuRowIndex) {
        rowActionClasses.push(classes.rowActionsMenuOpened);
      }
      return (
        <div className={rowActionClasses.join(' ')}>
          {visibleRowActions.map((action, index) => (
            <Tooltip
              key={`${index + index}`}
              label={getActionLabel(action, row)}
              {...tooltipProps}
            >
              <ActionIcon
                onClick={() => handleAction(row, action)}
                radius={4}
                type="button"
                {...getActionComponentProps(action, row)}
              >
                {getActionIcon(action, row)}
              </ActionIcon>
            </Tooltip>
          ))}
          {menuRowActions.length > 0 && (
            <Menu
              onChange={(opened: boolean) =>
                handleMenuChange(opened, row.index)
              }
              radius={4}
              shadow="lg"
              width={200}
              withinPortal
            >
              <Menu.Target>
                <ActionIcon
                  className={classes.menuButton}
                  radius={4}
                  type="button"
                >
                  <Tooltip label={menuLabel} {...tooltipProps}>
                    <div className={classes.menuButtonWrapper}>
                      <DotsThreeVertical size={16} />
                    </div>
                  </Tooltip>
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                {menuRowActions.map((action, index) => (
                  <Menu.Item
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    color={action.color}
                    icon={getActionIcon(action, row)}
                    onClick={() => handleAction(row, action)}
                    {...getActionComponentProps(action, row)}
                  >
                    {getActionLabel(action, row)}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
          )}
        </div>
      );
    },
    renderToolbarAlertBannerContent: ({ selectedAlert }) => (
      <div className={classes.alertToolbar}>
        <p>{selectedAlert}</p>
      </div>
    ),
    renderToolbarInternalActions: ({ table }) => {
      const { rows } = table.getSelectedRowModel();
      return (
        <Flex className={classes.internalToolbar}>
          {rows.length > 0 &&
            massActions.map((action, index) => (
              <Button
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                color={action.color}
                leftIcon={getActionIcon(action, rows)}
                onClick={() => handleAction(rows, action)}
                variant="default"
              >
                {getActionLabel(action, rows)}
              </Button>
            ))}

          {table.options.enableFilters &&
          table.options.enableGlobalFilter &&
          !initialState?.showGlobalFilter ? (
            <MrtToggleGlobalFilterButton
              className={classes.toolbarAction}
              table={table}
            />
          ) : null}
          {table.options.enableFilters &&
          table.options.enableColumnFilters &&
          table.options.columnFilterDisplayMode !== 'popover' ? (
            <MrtToggleFiltersButton
              className={classes.toolbarAction}
              table={table}
            />
          ) : null}
          {table.options.enableHiding ||
          table.options.enableColumnOrdering ||
          table.options.enablePinning ? (
            <MrtShowHideColumnsButton
              className={classes.toolbarAction}
              table={table}
            />
          ) : null}
          {table.options.enableDensityToggle ? (
            <MrtToggleDensePaddingButton
              className={classes.toolbarAction}
              table={table}
            />
          ) : null}
          {table.options.enableFullScreenToggle ? (
            <MrtToggleFullScreenButton
              className={classes.toolbarAction}
              table={table}
            />
          ) : null}
        </Flex>
      );
    },
    ...mantineTableProps,
  });
  const { getPageCount, getState, setPageIndex, setPageSize } = table;
  const { pagination } = getState();
  const { pageIndex, pageSize } = pagination;

  function handleItemsPerPageChange(value: number): void {
    setPageSize(value);
  }

  function handlePageChange(value: number): void {
    setPageIndex(value - 1);
  }

  return (
    <>
      <MantineReactTable table={table} />
      {Boolean(enablePagination && paginationDisplayMode === 'custom') && (
        <>
          <Space h="xl" />
          {!manualPagination ? (
            <Pagination
              {...paginationProps}
              itemsPerPage={pageSize}
              onItemsPerPageChange={handleItemsPerPageChange}
              onPageChange={handlePageChange}
              page={pageIndex + 1}
              totalPages={getPageCount()}
            />
          ) : (
            paginationProps !== undefined && (
              <Pagination {...(paginationProps as IPaginationProps)} />
            )
          )}
        </>
      )}
      <ConfirmModal
        {...confirmAction?.confirmModalProps}
        onCancel={handleCancel}
        onClose={handleClose}
        onConfirm={handleConfirm}
        opened={Boolean(confirmAction)}
        title={
          confirmAction?.confirmModalProps?.title ??
          getActionLabel(confirmAction)
        }
      />
    </>
  );
}
