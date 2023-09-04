'use client';
import type { MRT_ColumnDef } from 'mantine-react-table';
import type { ReactNode } from 'react';

import {
  ActionIcon,
  Box,
  Button,
  Menu,
  Modal,
  createStyles,
} from '@mantine/core';
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
import { MRT_Localization_FR } from 'mantine-react-table/locales/fr';
import { useState } from 'react';

import { TableTooltip } from '../TableTooltip/TableTooltip';

interface IDocument {
  creator: string;
  date: string;
  format: string;
  id: number | string;
  title: string;
}

interface IProps {
  action: (action: string, element: IDocument | IDocument[]) => void;
  columns: MRT_ColumnDef<IDocument>[];
  data: IDocument[];
}

const menu = (
  <svg
    fill="none"
    height="12"
    style={{ margin: 'auto' }}
    viewBox="0 0 12 12"
    width="12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 3.375C6.20711 3.375 6.375 3.20711 6.375 3C6.375 2.79289 6.20711 2.625 6 2.625C5.79289 2.625 5.625 2.79289 5.625 3C5.625 3.20711 5.79289 3.375 6 3.375Z"
      fill="#5C5F66"
      stroke="#5C5F66"
    />
    <path
      d="M6 6.375C6.20711 6.375 6.375 6.20711 6.375 6C6.375 5.79289 6.20711 5.625 6 5.625C5.79289 5.625 5.625 5.79289 5.625 6C5.625 6.20711 5.79289 6.375 6 6.375Z"
      fill="#5C5F66"
      stroke="#5C5F66"
    />
    <path
      d="M6 9.375C6.20711 9.375 6.375 9.20711 6.375 9C6.375 8.79289 6.20711 8.625 6 8.625C5.79289 8.625 5.625 8.79289 5.625 9C5.625 9.20711 5.79289 9.375 6 9.375Z"
      fill="#5C5F66"
      stroke="#5C5F66"
    />
  </svg>
);
const edit = (
  <svg
    fill="none"
    height="12"
    viewBox="0 0 12 12"
    width="12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_819_2424)">
      <path
        d="M8.5 1.50003C8.63132 1.36871 8.78722 1.26454 8.9588 1.19347C9.13038 1.1224 9.31428 1.08582 9.5 1.08582C9.68572 1.08582 9.86962 1.1224 10.0412 1.19347C10.2128 1.26454 10.3687 1.36871 10.5 1.50003C10.6313 1.63135 10.7355 1.78725 10.8066 1.95883C10.8776 2.13041 10.9142 2.31431 10.9142 2.50003C10.9142 2.68575 10.8776 2.86964 10.8066 3.04123C10.7355 3.21281 10.6313 3.36871 10.5 3.50003L3.75 10.25L1 11L1.75 8.25003L8.5 1.50003Z"
        stroke="#5C5F66"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_819_2424">
        <rect fill="white" height="12" width="12" />
      </clipPath>
    </defs>
  </svg>
);
const arbo = (
  <svg
    fill="none"
    height="12"
    viewBox="0 0 12 12"
    width="12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.58333 10H1.41667C1.30616 10 1.20018 9.95564 1.12204 9.87668C1.0439 9.79771 1 9.69062 1 9.57895V2.42105C1 2.30938 1.0439 2.20229 1.12204 2.12332C1.20018 2.04436 1.30616 2 1.41667 2H4.19271C4.2828 2.00037 4.37041 2.02988 4.44271 2.08421L5.89062 3.17895C5.96292 3.23327 6.05053 3.26278 6.14062 3.26316H10.5833C10.6938 3.26316 10.7998 3.30752 10.878 3.38648C10.9561 3.46544 11 3.57254 11 3.68421V5.36842"
      stroke="#5C5F66"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 9H11"
      stroke="#5C5F66"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 7L11 9L9 11"
      stroke="#5C5F66"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const useStyles = createStyles((theme) => ({
  buttonFilters: { background: 'white', height: '34px', marginRight: '10px' },
  buttonGrey: {
    '&:hover': {
      background: theme.colors.gray[7],
    },
    background: theme.colors.gray[8],
    padding: '0.667em 3.333em',
  },
  buttonLeftModal: { marginRight: '10px' },
  buttonRemoveRoot: {
    padding: '0.667em 3.333em',
  },
  buttonsShowHideColumns: { background: 'white', height: '34px' },
  buttonsToolbarAlertGroupe: {
    display: 'flex',
    marginRight: '78px',
  },
  buttonsToolbarAlertRemove: {
    display: 'block',
    margin: 'auto 10px auto',
  },
  buttonsToolbarAlertTree: {
    display: 'block',
    margin: 'auto 0px auto',
  },
  iconsColor: {
    color: theme.colors.gray[7],
  },
  menuButton: {
    [`&[aria-expanded=true]`]: {
      '& svg': {
        filter: 'contrast(8) invert(1)',
      },
      backgroundColor: theme.colors.cyan[9],
      borderRadius: '4px',
      display: 'flex',
      height: '28px',
      width: '28px',
    },
  },
  modalBody: {
    padding: '0px',
  },
  modalButtonsContainer: {
    marginTop: '32px',
  },
  modalContent: {
    padding: '48px',
  },
  modalHeader: {
    height: '0px',
    padding: '0px',
  },
  modalTitleContainer: {
    marginLeft: '12px',
  },
  renderToolbarAlertBannerContent: {
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px 8px',
    width: '100%',
  },
  renderToolbarInternalActions: {
    display: 'flex',
    height: '100%',
    padding: '4px 8px',
    width: '100%',
  },
  rowActions: {
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '24px',
    marginRight: '16px',
  },
}));

export function Table(props: IProps): JSX.Element {
  const { action, data, columns } = props;
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
    action('ARBO_CHANGE_LOCATION', currentElement);
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
    columns,
    data,
    displayColumnDefOptions: {
      'mrt-row-actions': {
        header: undefined,
        size: 124,
      },
    },
    enableColumnOrdering: false,
    enableGlobalFilter: false,
    enablePagination: false,
    enableRowActions: true,
    enableRowSelection: true,
    icons: {
      IconArrowsSort: CaretUpDown,
      // eslint-disable-next-line react/no-unstable-nested-components, react/no-multi-comp
      IconFilter: () => <Funnel size={18} />,
      // eslint-disable-next-line react/no-unstable-nested-components, react/no-multi-comp
      IconFilterOff: () => <Funnel size={18} />,
      IconSortAscending: CaretUp,
      IconSortDescending: CaretDown,
    },
    initialState: {
      columnPinning: {
        right: ['mrt-row-actions'],
      },
      columnVisibility: {
        firstName: false,
        id: false,
      },
    },
    localization: MRT_Localization_FR,
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
              {arbo}
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
              {edit}
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
                    {menu}
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
                'ARBO_CHANGE_LOCATION',
              );
            }}
            variant="default"
          >
            Déplacer dans l&apos;arborecence
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
          table={cell.table}
        />
      </Box>
    ),
  });

  // Component
  const sendCurrentElementValueWithAction = (
    element: IDocument,
    actionName: string,
  ): void => {
    action(actionName, element);
    close();
  };
  const sendSelectedElementsValueWithAction = (
    elements: IDocument[],
    actionName: string,
  ): void => {
    action(actionName, elements);
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