/* eslint-disable @typescript-eslint/no-unsafe-assignment*/
/* eslint-disable @typescript-eslint/no-unsafe-member-access*/
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

'use client';
import type { FloatingPosition } from '@mantine/core/lib/Floating';
import type { IConfirmModalProps } from '@smile/react-front-kit';
import type { MRT_Row, MRT_TableOptions } from 'mantine-react-table';
import type { ReactElement, ReactNode } from 'react';

import { ActionIcon, Button, Flex, Menu, Tooltip } from '@mantine/core';
import {
  CaretDown,
  CaretUp,
  CaretUpDown,
  DotsThreeVertical,
  Funnel,
} from '@phosphor-icons/react';
import { ColumnPlus, ConfirmModal } from '@smile/react-front-kit';
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

import { useStyles } from './Table.style';

export interface IActionConfirmModalProps<Data extends Record<string, unknown>>
  extends Omit<
    IConfirmModalProps,
    'onCancel' | 'onClose' | 'onConfirm' | 'opened'
  > {
  onCancel?: (row: MRT_Row<Data> | MRT_Row<Data>[]) => false | void;
  onClose?: () => void;
  onConfirm?: (row: MRT_Row<Data> | MRT_Row<Data>[]) => false | void;
}

export interface IAction<Data extends Record<string, unknown>> {
  color?: string;
  confirmModalProps?: IActionConfirmModalProps<Data>;
  confirmation?: boolean;
  icon: ReactNode;
  isMassAction?: boolean;
  isRowAction?: boolean;
  label: string;
  onAction?: (row: MRT_Row<Data> | MRT_Row<Data>[]) => void;
}

export interface IConfirmAction<Data extends Record<string, unknown>>
  extends IAction<Data> {
  row: MRT_Row<Data> | MRT_Row<Data>[];
}

export interface ITableProps<Data extends Record<string, unknown>>
  extends MRT_TableOptions<Data> {
  actions?: IAction<Data>[];
  menuLabel?: string;
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
    rowActionNumber = 0,
    ...mantineTable
  } = props;
  const { classes } = useStyles();
  const [confirmAction, setConfirmAction] =
    useState<IConfirmAction<Data> | null>(null);
  const [openedMenuRowIndex, setOpenedMenuRowIndex] = useState<number | null>(
    null,
  );

  // Calculated values
  const massActions = actions.filter(({ isMassAction }) => isMassAction);
  const rowActions = actions.filter(({ isRowAction = true }) => isRowAction);
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
    row: MRT_Row<Data> | MRT_Row<Data>[],
    action: IAction<Data>,
  ): void {
    if (action.confirmation) {
      setConfirmAction({ ...action, row });
    } else {
      action.onAction?.(row);
    }
  }

  function handleCancel(): void {
    if (
      confirmAction?.confirmModalProps?.onCancel?.(confirmAction.row) !== false
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
      confirmAction?.confirmModalProps?.onConfirm?.(confirmAction.row) !== false
    ) {
      setConfirmAction(null);
      confirmAction?.onAction?.(confirmAction.row);
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
    enablePagination: false,
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
            // eslint-disable-next-line react/no-array-index-key
            <Tooltip key={index} label={action.label} {...tooltipProps}>
              <ActionIcon
                onClick={() => handleAction(row, action)}
                radius={4}
                type="button"
              >
                {action.icon}
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
                    icon={action.icon}
                    onClick={() => handleAction(row, action)}
                  >
                    {action.label}
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
                leftIcon={action.icon}
                onClick={() => handleAction(rows, action)}
                variant="default"
              >
                {action.label}
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
    ...mantineTable,
  });

  return (
    <>
      <MantineReactTable table={table} />
      <ConfirmModal
        {...confirmAction?.confirmModalProps}
        onCancel={handleCancel}
        onClose={handleClose}
        onConfirm={handleConfirm}
        opened={Boolean(confirmAction)}
        title={confirmAction?.confirmModalProps?.title ?? confirmAction?.label}
      />
    </>
  );
}
