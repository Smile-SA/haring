/* eslint-disable @typescript-eslint/no-unsafe-assignment*/
/* eslint-disable @typescript-eslint/no-unsafe-member-access*/
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

'use client';
import type { MantineColor } from '@mantine/core';
import type { FloatingPosition } from '@mantine/core/lib/Floating';
import type { MRT_TableOptions } from 'mantine-react-table';
import type { ReactNode } from 'react';

import { ActionIcon, Box, Button, Menu, Tooltip } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  CaretDown,
  CaretUp,
  CaretUpDown,
  DotsThreeVertical,
  DownloadSimple,
  Eye,
  FolderNotchOpen,
  Funnel,
  PencilSimple,
  ShareNetwork,
  Star,
  Trash,
} from '@phosphor-icons/react';
import {
  MRT_ShowHideColumnsButton as MRTShowHideColumnsButton,
  MRT_ToggleFiltersButton as MRTToggleFiltersButton,
  MantineReactTable,
  useMantineReactTable,
} from 'mantine-react-table';
import { useState } from 'react';

import { ColumnPlus, FolderMove } from '../../../1-styleGuide/Icons';
import { ConfirmModal } from '../ConfirmModal/ConfirmModal';

import { useStyles } from './Table.style';

export interface IDocument {
  creator: string;
  date: string;
  format: string;
  id: number | string;
  title: string;
}

interface ITableProps extends MRT_TableOptions<IDocument> {
  onAction: (
    onAction: string | undefined,
    element: IDocument | IDocument[] | undefined,
  ) => void;
}

const tooltipProps = {
  color: 'gray.7',
  position: 'bottom' as FloatingPosition,
  radius: 6,
  withArrow: true,
  withinPortal: true,
};

export function Table(props: ITableProps): JSX.Element {
  const { onAction, data, icons, initialState, ...mantineTable } = props;
  const [opened, { open, close }] = useDisclosure(false);
  const [displayActionsButtons, setDisplayActionsButtons] = useState<
    (boolean | null)[]
  >(data.map(() => false));
  const { classes } = useStyles();
  const [modalCancelColor, setModalCancelColor] = useState<MantineColor>();
  const [modalCancelLabel, setModalCancelLabel] = useState<string>();
  const [modalConfirmColor, setModalConfirmColor] = useState<MantineColor>();
  const [modalConfirmLabel, setModalConfirmLabel] = useState<string>();
  const [modalOnConfirm, setModalOnConfirm] = useState<{
    action: string | undefined;
    value: IDocument | IDocument[] | undefined;
  }>();
  const [modalTitle, setModalTitle] = useState<string>();
  const [modalChildren, setModalChildren] = useState<ReactNode>();
  // Handle
  function handleAddToFav(currentElement: IDocument): void {
    setModalCancelColor('gray');
    setModalCancelLabel('Ne pas partager');
    setModalConfirmColor('primary');
    setModalConfirmLabel('partager');
    setModalTitle('Partager ?');
    setModalChildren('Êtes-vous certain de vouloir partager cette élément ?');
    setModalOnConfirm({ action: 'SHARED', value: currentElement });
    open();
  }

  function handleshare(currentElement: IDocument): void {
    setModalCancelColor('gray');
    setModalCancelLabel('Ne pas Ajouter aux favoris');
    setModalConfirmColor('primary');
    setModalConfirmLabel('Ajouter aux favoris');
    setModalTitle('Ajouter aux favoris ?');
    setModalChildren(
      'Êtes-vous certain de vouloir ajouter cet élément à vos favoris ?',
    );
    setModalOnConfirm({ action: 'SHARED', value: currentElement });
    open();
  }

  function handleTree(currentElement: IDocument): void {
    onAction('TREE_STRUCTURE_CHANGE_LOCATION', currentElement);
  }

  function handleRemove(currentElement: IDocument): void {
    setModalCancelColor('gray');
    setModalCancelLabel('Ne pas supprimer');
    setModalConfirmColor('red');
    setModalConfirmLabel('Supprimer');
    setModalTitle('Supprimer ?');
    setModalChildren('Êtes-vous certain de vouloir supprimer cet élément ?');
    setModalOnConfirm({ action: 'REMOVE', value: currentElement });
    open();
  }

  function handleMultiRemove(values: IDocument[]): void {
    setModalCancelColor('gray');
    setModalCancelLabel('Ne pas supprimer');
    setModalConfirmColor('red');
    setModalConfirmLabel('Supprimer');
    setModalTitle('Supprimer ?');
    setModalChildren('Êtes-vous certain de vouloir supprimer ces éléments ?');
    setModalOnConfirm({ action: 'MULTI_REMOVE', value: values });
    open();
  }

  const actionButtonOnMouseHandler = (
    rowIndex: number,
    enter: boolean,
  ): void => {
    const elementIndex = rowIndex;
    const newDisplayActionsButtonArray = displayActionsButtons.map(
      (_, index) => (elementIndex === index ? enter : false),
    );
    setDisplayActionsButtons(newDisplayActionsButtonArray);
  };

  const table = useMantineReactTable({
    data,
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
    renderRowActions: (cell) => (
      <div
        className={classes.rowActions}
        onMouseEnter={() => actionButtonOnMouseHandler(cell.row.index, true)}
        onMouseLeave={() => actionButtonOnMouseHandler(cell.row.index, false)}
        style={{ opacity: displayActionsButtons[cell.row.index] ? 1 : 0 }}
      >
        <Tooltip label="Déplacer dans l’arborescence" {...tooltipProps}>
          <ActionIcon
            onClick={() => handleTree(cell.row.original)}
            radius={4}
            type="button"
          >
            <FolderMove color="#495057" />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Ouvrir le document" {...tooltipProps}>
          <ActionIcon
            onClick={() =>
              sendCurrentElementValueWithAction(
                cell.row.original,
                'OPEN_ELEMENT',
              )
            }
            radius={4}
            type="button"
          >
            <Eye className={classes.iconsColor} size={16} />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Modifier le document" {...tooltipProps}>
          <ActionIcon
            onClick={() =>
              sendCurrentElementValueWithAction(
                cell.row.original,
                'UPDATE_ELEMENT',
              )
            }
            radius={4}
            type="button"
          >
            <PencilSimple color="#495057" />
          </ActionIcon>
        </Tooltip>
        <Menu radius={4} shadow="lg" width={200} withinPortal>
          <Menu.Target>
            <Tooltip label="Affiche les autres actions" {...tooltipProps}>
              <ActionIcon radius={4} type="button">
                <DotsThreeVertical color="#495057" size={16} />
              </ActionIcon>
            </Tooltip>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              icon={<Star size={14} />}
              onClick={() => handleAddToFav(cell.row.original)}
            >
              Ajout aux favoris
            </Menu.Item>
            <Menu.Item
              icon={<ShareNetwork size={14} />}
              onClick={() => handleshare(cell.row.original)}
            >
              Partager
            </Menu.Item>
            <Menu.Item
              icon={<DownloadSimple size={14} />}
              onClick={() =>
                sendCurrentElementValueWithAction(cell.row.original, 'DOWNLOAD')
              }
            >
              Télécharger
            </Menu.Item>
            <Menu.Item
              color="red"
              icon={<Trash size={14} />}
              onClick={() => handleRemove(cell.row.original)}
            >
              Supprimer
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    ),
    renderToolbarAlertBannerContent: (cell) => (
      <Box className={classes.renderToolbarAlertBannerContent}>
        <p>{cell.selectedAlert}</p>
        <div className={classes.buttonsToolbarAlertGroupe}>
          <Button
            className={classes.buttonsToolbarAlertTree}
            leftIcon={<FolderNotchOpen size={12} />}
            onClick={() => {
              sendSelectedElementsValueWithAction(
                cell.table.getSelectedRowModel().rows.map((x) => x.original),
                'MULTI_TREE_STRUCTURE_CHANGE_LOCATION',
              );
            }}
            variant="default"
          >
            Déplacer dans l&lsquo;arborescence
          </Button>
          <Button
            className={classes.buttonsToolbarAlertRemove}
            leftIcon={<Trash size={12} />}
            onClick={() => {
              handleMultiRemove(
                cell.table.getSelectedRowModel().rows.map((x) => x.original),
              );
            }}
            variant="default"
          >
            Supprimer
          </Button>
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

  // Component
  const sendCurrentElementValueWithAction = (
    element: IDocument,
    actionName: string,
  ): void => {
    onAction(actionName, element);
    close();
  };
  const sendSelectedElementsValueWithAction = (
    elements: IDocument | IDocument[] | undefined,
    actionName: string | undefined,
  ): void => {
    onAction(actionName, elements);
    close();
  };
  return (
    <>
      <MantineReactTable table={table} />
      <ConfirmModal
        cancelColor={modalCancelColor}
        cancelLabel={modalCancelLabel}
        confirmColor={modalConfirmColor}
        confirmLabel={modalConfirmLabel}
        onCancel={close}
        onClose={close}
        onConfirm={() =>
          sendSelectedElementsValueWithAction(
            modalOnConfirm?.value,
            modalOnConfirm?.action,
          )
        }
        opened={opened}
        title={modalTitle}
      >
        {modalChildren}
      </ConfirmModal>
    </>
  );
}
