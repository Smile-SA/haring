/* eslint-disable @typescript-eslint/no-unsafe-assignment*/
/* eslint-disable @typescript-eslint/no-unsafe-member-access*/
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

'use client';
import type { MRT_TableOptions } from 'mantine-react-table';
import type { ReactNode } from 'react';

import { ActionIcon, Box, Button, Menu, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  CaretDown,
  CaretUp,
  CaretUpDown,
  DownloadSimple,
  Eye,
  FolderNotchOpen,
  Funnel,
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

import { ColumnPlus } from '../../../1-styleGuide/Icons/ColumnPlus';
import { Edit } from '../../../1-styleGuide/Icons/Edit';
import { MenuTable } from '../../../1-styleGuide/Icons/MenuTable';
import { TreeStructure } from '../../../1-styleGuide/Icons/TreeStructure';

import { useStyles } from './Table.style';
import { TableTooltip } from './TableTooltip';

export interface IDocument {
  creator: string;
  date: string;
  format: string;
  id: number | string;
  title: string;
}

interface ITableProps extends MRT_TableOptions<IDocument> {
  onAction: (onAction: string, element: IDocument | IDocument[]) => void;
}

export function Table(props: ITableProps): JSX.Element {
  const { onAction, data, icons, initialState, ...mantineTable } = props;
  const [opened, { open, close }] = useDisclosure(false);
  const [modalContent, setModalContent] = useState<ReactNode | undefined>();
  const [displayActionsButtons, setDisplayActionsButtons] = useState<
    (boolean | null)[]
  >(data.map(() => false));
  const { classes } = useStyles();

  // Handle
  function handleAddToFav(currentElement: IDocument): void {
    setModalContent(
      <>
        <div className={classes.modalTitleContainer}>
          <h2>Ajouter aux favoris</h2>
          <p>
            Êtes-vous certain de vouloir ajouter cet élément à vos favoris ?
          </p>
        </div>
        <div className={classes.modalButtonsContainer}>
          <Button
            className={classes.buttonLeftModal}
            classNames={{
              root: classes.buttonGrey,
            }}
            onClick={close}
          >
            Annuler
          </Button>
          <Button
            classNames={{
              root: classes.buttonRemoveRoot,
            }}
            onClick={() =>
              sendCurrentElementValueWithAction(
                currentElement,
                'ADD_TO_FAVORITES',
              )
            }
          >
            Ajouter aux favoris
          </Button>
        </div>
      </>,
    );
    open();
  }
  function handleshare(currentElement: IDocument): void {
    setModalContent(
      <>
        <div className={classes.modalTitleContainer}>
          <h2>Partager ?</h2>
          <p>Êtes-vous certain de vouloir partager cette élément ?</p>
        </div>
        <div className={classes.modalButtonsContainer}>
          <Button
            className={classes.buttonLeftModal}
            classNames={{
              root: classes.buttonGrey,
            }}
            onClick={close}
          >
            Ne pas partager
          </Button>
          <Button
            classNames={{
              root: classes.buttonRemoveRoot,
            }}
            onClick={() =>
              sendCurrentElementValueWithAction(currentElement, 'SHARE')
            }
          >
            Partager
          </Button>
        </div>
      </>,
    );
    open();
  }
  function handleTree(currentElement: IDocument): void {
    onAction('TREE_STRUCTURE_CHANGE_LOCATION', currentElement);
  }
  function handleRemove(currentElement: IDocument): void {
    setModalContent(
      <>
        <div className={classes.modalTitleContainer}>
          <h2>Supprimer ?</h2>
          <p>Êtes-vous certain de vouloir supprimer cet élément ?</p>
        </div>
        <div className={classes.modalButtonsContainer}>
          <Button
            className={classes.buttonLeftModal}
            classNames={{
              root: classes.buttonGrey,
            }}
            onClick={close}
          >
            Ne pas supprimer
          </Button>
          <Button
            classNames={{
              root: classes.buttonRemoveRoot,
            }}
            color="red"
            onClick={() =>
              sendCurrentElementValueWithAction(currentElement, 'REMOVE')
            }
          >
            Supprimer
          </Button>
        </div>
      </>,
    );
    open();
  }
  function handleMultiRemove(values: IDocument[]): void {
    setModalContent(
      <>
        <div className={classes.modalTitleContainer}>
          <h2>Supprimer ?</h2>
          <p>Êtes-vous certain de vouloir supprimer ces éléments ?</p>
        </div>
        <div className={classes.modalButtonsContainer}>
          <Button
            className={classes.buttonLeftModal}
            classNames={{
              root: classes.buttonGrey,
            }}
            onClick={close}
          >
            Ne pas supprimer
          </Button>
          <Button
            classNames={{
              root: classes.buttonRemoveRoot,
            }}
            color="red"
            onClick={() =>
              sendSelectedElementsValueWithAction(values, 'REMOVE_ALL')
            }
          >
            Supprimer
          </Button>
        </div>
      </>,
    );
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
        <TableTooltip
          element={
            <ActionIcon
              onClick={() => handleTree(cell.row.original)}
              radius={4}
              type="button"
            >
              <TreeStructure />
            </ActionIcon>
          }
          text="Déplacer dans l’arborescence"
        />
        <TableTooltip
          element={
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
          }
          text="Ouvrir le document"
        />
        <TableTooltip
          element={
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
              <Edit />
            </ActionIcon>
          }
          text="Modifier le document"
        />
        <TableTooltip
          element={
            <ActionIcon radius={4} type="button">
              <Menu radius={4} shadow="lg" width={200} withinPortal>
                <Menu.Target>
                  <div
                    className={classes.menuButton}
                    style={{ display: 'flex', height: '28px', width: '28px' }}
                  >
                    <MenuTable />
                  </div>
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
                      sendCurrentElementValueWithAction(
                        cell.row.original,
                        'DOWNLOAD',
                      )
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
            </ActionIcon>
          }
          text="Affiche les autres actions"
        />
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
    elements: IDocument[],
    actionName: string,
  ): void => {
    onAction(actionName, elements);
    close();
  };
  return (
    <>
      <MantineReactTable table={table} />
      <Modal
        centered
        classNames={{
          body: classes.modalBody,
          content: classes.modalContent,
          header: classes.modalHeader,
        }}
        onClose={close}
        opened={opened}
        radius={16}
        size="lg"
      >
        {modalContent}
      </Modal>
    </>
  );
}
