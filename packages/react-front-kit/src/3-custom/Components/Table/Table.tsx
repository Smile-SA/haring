/* eslint-disable @typescript-eslint/no-unsafe-assignment*/
/* eslint-disable @typescript-eslint/no-unsafe-member-access*/
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

'use client';
import type { IConfirmModalProps } from '../ConfirmModal/ConfirmModal';
import type { FloatingPosition } from '@mantine/core/lib/Floating';
import type { MRT_Row, MRT_TableOptions } from 'mantine-react-table';
import type { ReactElement, ReactNode } from 'react';

import { ActionIcon, Box, Button, Menu, Tooltip } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  CaretDown,
  CaretUp,
  CaretUpDown,
  DotsThreeVertical,
  Funnel,
} from '@phosphor-icons/react';
import {
  MRT_ShowHideColumnsButton as MRTShowHideColumnsButton,
  MRT_ToggleFiltersButton as MRTToggleFiltersButton,
  MantineReactTable,
  useMantineReactTable,
} from 'mantine-react-table';
import { useState } from 'react';

import { ColumnPlus } from '../../../1-styleGuide/Icons';
import { ConfirmModal } from '../ConfirmModal/ConfirmModal';

import { useStyles } from './Table.style';

export interface IDocument {
  creator: string;
  date: string;
  format: string;
  id: number | string;
  title: string;
}

export interface IAction {
  confirmModalProps?: IConfirmModalProps;
  confirmation?: boolean;
  icon: ReactNode;
  isMassAction?: boolean;
  isRowAction?: boolean;
  label: string;
  onAction?: (row: MRT_Row<IDocument> | MRT_Row<IDocument>[]) => void;
}

export interface ITableProps extends MRT_TableOptions<IDocument> {
  actions: IAction[];
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
export function Table(props: ITableProps): ReactElement {
  const {
    actions = [],
    icons,
    initialState,
    rowActionNumber = 0,
    ...mantineTable
  } = props;
  const [opened, { close }] = useDisclosure(false);
  const { classes } = useStyles();
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

  const table = useMantineReactTable({
    displayColumnDefOptions: {
      'mrt-row-actions': {
        header: undefined,
        size: 124,
      },
    },
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
      sx: {
        border: 'hidden',
        borderRadius: '24px',
        boxShadow:
          '0px 3.43489px 2.74791px 0px rgba(0, 0, 0, 0.02), 0px 8.6871px 6.94968px 0px rgba(0, 0, 0, 0.02), 0px 17.72087px 14.1767px 0px rgba(0, 0, 0, 0.03), 0px 36.50164px 29.20132px 0px rgba(0, 0, 0, 0.03), 0px 100px 80px 0px rgba(0, 0, 0, 0.05)',
      },
    },
    mantineTableProps: {
      className: classes.table,
    },
    mantineToolbarAlertBannerProps: () => ({
      sx: (theme) => ({
        background: theme.colors.cyan[9],
        border: 'none',
        borderRadius: '4px',
        color: theme.colors.white,
      }),
    }),
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
                onClick={() => action.onAction?.(row)}
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
                  <Tooltip label="Affiche les autres actions" {...tooltipProps}>
                    <div className={classes.menuButtonWrapper}>
                      <DotsThreeVertical color="#495057" size={16} />
                    </div>
                  </Tooltip>
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                {menuRowActions.map((action, index) => (
                  <Menu.Item
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    icon={action.icon}
                    onClick={() => action.onAction?.(row)}
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
    renderToolbarAlertBannerContent: (cell) => (
      <Box className={classes.renderToolbarAlertBannerContent}>
        <p>{cell.selectedAlert}</p>
        <div className={classes.buttonsToolbarAlertGroupe}>
          {massActions.map((action, index) => (
            <Button
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={classes.buttonsToolbarAlertTree}
              leftIcon={action.icon}
              onClick={() =>
                action.onAction?.(cell.table.getSelectedRowModel().rows)
              }
              variant="default"
            >
              {action.label}
            </Button>
          ))}
        </div>
      </Box>
    ),
    renderToolbarInternalActions: (cell) => (
      <Box className={classes.renderToolbarInternalActions}>
        <MRTToggleFiltersButton
          className={classes.buttonFilters}
          table={table}
        />
        <MRTShowHideColumnsButton
          className={classes.buttonsShowHideColumns}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          table={cell.table}
        />
      </Box>
    ),
    ...mantineTable,
  });

  return (
    <>
      <MantineReactTable table={table} />
      <ConfirmModal
        onCancel={close}
        onClose={close}
        onConfirm={() => null}
        opened={opened}
      >
        <div>test</div>
      </ConfirmModal>
    </>
  );
}
