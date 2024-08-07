'use client';

import type { ITableAction } from '../../types';
import type { FloatingPosition } from '@mantine/core';
import type { IPaginationProps } from '@smile/haring-react';
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
import { ConfirmModal, Pagination } from '@smile/haring-react';
import { ColumnPlus } from '@smile/haring-react-shared';
import {
  MantineReactTable,
  MRT_ShowHideColumnsButton as MrtShowHideColumnsButton,
  MRT_ToggleDensePaddingButton as MrtToggleDensePaddingButton,
  MRT_ToggleFiltersButton as MrtToggleFiltersButton,
  MRT_ToggleFullScreenButton as MrtToggleFullScreenButton,
  MRT_ToggleGlobalFilterButton as MrtToggleGlobalFilterButton,
  useMantineReactTable,
} from 'mantine-react-table';
import 'mantine-react-table/styles.css';
import { useState } from 'react';

import {
  getActionComponentProps,
  getActionIcon,
  getActionLabel,
} from '../../helpers';

import classes from './Table.module.css';

export interface ITableProps<Data extends Record<string, unknown>>
  extends MRT_TableOptions<Data> {
  actions?: ITableAction<Data>[];
  maxVisibleActions?: number;
  menuLabel?: string;
  paginationProps?: Partial<IPaginationProps>;
}

const tooltipProps = {
  color: 'gray.7',
  position: 'bottom' as FloatingPosition,
  radius: 6,
  withArrow: true,
  withinPortal: true,
};

interface IConfirmAction<Data extends Record<string, unknown>> {
  actionIndex: number;
  item: MRT_Row<Data> | MRT_Row<Data>[];
}

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
    maxVisibleActions = 0,
    ...mantineTableProps
  } = props;
  const { enablePagination = true, manualPagination } = mantineTableProps;
  const [confirmAction, setConfirmAction] =
    useState<IConfirmAction<Data> | null>(null);
  const [openedMenuRowIndex, setOpenedMenuRowIndex] = useState<number | null>(
    null,
  );

  // Calculated values
  const massActions = actions.filter(({ isMassAction }) => isMassAction);
  const rowActions = actions.filter(({ isItemAction = true }) => isItemAction);
  const visibleRowActions = rowActions.slice(0, maxVisibleActions);
  const menuRowActions = rowActions.slice(maxVisibleActions);

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
    actionIndex: number,
  ): void {
    const action = actions[actionIndex];
    if (action.confirmation) {
      setConfirmAction({ actionIndex, item });
    } else {
      action.onAction?.(item);
    }
  }

  function handleCancel(): void {
    if (confirmAction) {
      const action = actions[confirmAction.actionIndex];
      if (action.confirmModalProps?.onCancel?.(confirmAction.item) !== false) {
        setConfirmAction(null);
      }
    }
  }

  function handleClose(): void {
    setConfirmAction(null);
    if (confirmAction) {
      const action = actions[confirmAction.actionIndex];
      action.confirmModalProps?.onClose?.();
    }
  }

  function handleConfirm(): void {
    if (confirmAction) {
      const action = actions[confirmAction.actionIndex];
      if (action.confirmModalProps?.onConfirm?.(confirmAction.item) !== false) {
        setConfirmAction(null);
        action.onAction?.(confirmAction.item);
      }
    }
  }

  const table = useMantineReactTable({
    displayColumnDefOptions: {
      'mrt-row-actions': {
        size: 124,
      },
    },
    enableColumnPinning: true,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableGlobalFilter: false,
    enablePinning: true,
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
      const rowActionClasses = [classes.rowActions, 'rowActionsRef'];
      if (row.index === openedMenuRowIndex) {
        rowActionClasses.push('rowActionsMenuOpenedRef');
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
                className={classes.action}
                onClick={() => handleAction(row, index)}
                radius={4}
                type="button"
                variant="transparent"
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
                  className={`${classes.menuButton} ${classes.action}`}
                  radius={4}
                  type="button"
                  variant="transparent"
                >
                  <Tooltip label={menuLabel} {...tooltipProps}>
                    <DotsThreeVertical size={16} />
                  </Tooltip>
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                {menuRowActions.map((action, index) => (
                  <Menu.Item
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    color={action.color}
                    leftSection={getActionIcon(action, row)}
                    onClick={() => handleAction(row, index)}
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
      <div className={classes.alertToolbar}>{selectedAlert}</div>
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
                leftSection={getActionIcon(action, rows)}
                onClick={() => handleAction(rows, index)}
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
    paginationProps?.onItemsPerPageChange?.(value);
  }

  function handlePageChange(value: number): void {
    setPageIndex(value - 1);
    paginationProps?.onPageChange?.(value - 1);
  }

  let action: ITableAction<Data> | undefined = undefined;
  if (confirmAction) {
    action = actions[confirmAction.actionIndex];
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
      {action ? (
        <ConfirmModal
          {...action.confirmModalProps}
          onCancel={handleCancel}
          onClose={handleClose}
          onConfirm={handleConfirm}
          opened={Boolean(confirmAction)}
          title={action.confirmModalProps?.title ?? getActionLabel(action)}
        />
      ) : null}
    </>
  );
}
