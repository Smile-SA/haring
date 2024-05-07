import type { IMenuItem } from '@smile/haring-react/src';
import type { IFilter } from '@smile/haring-react-shared';
import type {
  ITableGridViewGridProps,
  ITableGridViewTableProps,
} from '@smile/haring-react-table';

import { TextInput } from '@mantine/core';
import {
  Chat,
  DownloadSimple,
  Eye,
  HouseLine,
  PencilSimple,
  ShareNetwork,
  Star,
  Trash,
  User,
} from '@phosphor-icons/react';
import { FolderMove } from '@smile/haring-react-shared';

export interface IExampleDataType extends Record<string, unknown> {
  creator: string;
  date: string;
  format: string;
  id: number | string;
  title: string;
}

export const actions = [
  {
    icon: <FolderMove />,
    id: 'move',
    isMassAction: true,
    label: "Déplacer dans l'arborescence",
  },
  {
    icon: <Eye />,
    id: 'open',
    label: 'Ouvrir',
  },
  {
    icon: <PencilSimple />,
    id: 'edit',
    label: 'Modifier',
  },
  {
    icon: <Star />,
    id: 'favorite',
    label: 'Ajouter aux favoris',
  },
  {
    confirmation: true,
    icon: <ShareNetwork />,
    id: 'share',
    label: 'Partager',
  },
  {
    icon: <DownloadSimple />,
    id: 'download',
    label: 'Télécharger',
  },
  {
    color: 'red',
    confirmModalProps: {
      cancelLabel: 'Annuler',
      children: <p>Confirmer ?</p>,
      confirmColor: 'red',
      confirmLabel: 'Supprimer',
      title: 'Supprimer fichiers ?',
    },
    icon: <Trash />,
    id: 'delete',
    isMassAction: true,
    label: 'Supprimer',
  },
];

export const data: IExampleDataType[] = [
  {
    creator: 'Alice Prévost',
    date: '20/05/2022',
    format: 'SVG',
    id: 1,
    title: 'Facture_Prevost-Alice_Loremipsumdolor 1',
  },
  {
    creator: 'Alice Prévost',
    date: '20/05/2022',
    format: 'PDF',
    id: 2,
    title: 'Facture_Prevost-Alice_Loremipsumdolor 2',
  },
  {
    creator: 'Alice Prévost',
    date: '20/05/2022',
    format: 'PNG',
    id: 3,
    title: 'Facture_Prevost-Alice_Loremipsumdolor 3',
  },
  {
    creator: 'Alice Prévost',
    date: '20/05/2022',
    format: 'ODT',
    id: 4,
    title: 'Facture_Prevost-Alice_Loremipsumdolor 4',
  },
  {
    creator: 'Alice Prévost',
    date: '20/05/2022',
    format: 'DOC',
    id: 5,
    title: 'Facture_Prevost-Alice_Loremipsumdolor 5',
  },
  {
    creator: 'Alice Prévost',
    date: '20/05/2022',
    format: 'DOC',
    id: 6,
    title: 'Facture_Prevost-Alice_Loremipsumdolor 6',
  },
  {
    creator: 'Alice Prévost',
    date: '20/05/2022',
    format: 'PDF',
    id: 7,
    title: 'Facture_Prevost-Alice_Loremipsumdolor 7',
  },
];

export const tableProps: ITableGridViewTableProps<IExampleDataType> = {
  columns: [
    {
      accessorKey: 'format',
      header: 'Format',
      size: 67,
    },
    {
      accessorKey: 'title',
      header: 'Titre',
      minSize: 300,
    },
    {
      accessorKey: 'creator',
      header: 'Créateur',
      maxSize: 100,
      minSize: 90,
    },
    {
      accessorKey: 'date',
      header: 'Date publication',
      size: 120,
    },
  ],
  initialState: {
    pagination: { pageIndex: 0, pageSize: 6 },
  },
  localization: {
    selectedCountOfRowCountRowsSelected: `{selectedCount} fichier(s) sélectionnés`,
  },
  manualPagination: false,
  menuLabel: 'Autres actions',
  paginationProps: {
    itemsPerPageAriaLabel: 'Nombre de résultats par page',
    itemsPerPageOptions: [
      {
        label: 'Afficher 6 résultats',
        value: 6,
      },
      { label: 'Afficher 15 résultats', value: 15 },
    ],
  },
  rowActionNumber: 3,
  rowCount: 6,
};

export const gridProps: ITableGridViewGridProps = {
  cols: 5,
  iconTypeFieldName: 'format',
  idFieldName: 'id',
  labelFieldName: 'title',
  selectedElementsText: (n: number) => `${n} fichier(s) sélectionnés`,
  spacing: 25,
  verticalSpacing: 25,
};

export const SearchableListProps: IFilter[] = [
  {
    active: false,
    component: <TextInput placeholder="Nom du filtre" />,
    id: 1,
    label: 'Nom du filtre',
  },
  {
    active: false,
    component: <TextInput placeholder="Blandit mollis nisi curabitur" />,
    id: 2,
    label: 'Blandit mollis nisi curabitur',
  },
  {
    active: false,
    component: <TextInput placeholder="Ultricies dui ut non massa eget" />,
    id: 3,
    label: 'Ultricies dui ut non massa eget',
  },
  {
    active: false,
    component: <TextInput placeholder="Lorem ipsum dolor" />,
    id: 4,
    label: 'Lorem ipsum dolor',
  },
  {
    active: true,
    component: <TextInput placeholder="Dernière modification" />,
    id: 5,
    label: 'Dernière modification',
  },
  {
    active: true,
    component: <TextInput placeholder="Type de document" />,
    id: 6,
    label: 'Type de document',
  },
  {
    active: true,
    component: <TextInput placeholder="Période" />,
    id: 7,
    label: 'Période',
  },
  {
    active: false,
    component: <TextInput placeholder="Lorem ipsum dolor" />,
    id: 8,
    label: 'Lorem ipsum dolor',
  },
  {
    active: false,
    component: <TextInput placeholder="Blandit mollis nisi curabitur" />,
    id: 9,
    label: 'Blandit mollis nisi curabitur',
  },
  {
    active: false,
    component: <TextInput placeholder="Lorem ipsum dolor" />,
    id: 10,
    label: 'Lorem ipsum dolor',
  },
  {
    active: false,
    component: <TextInput placeholder="Ultricies dui ut non massa eget" />,
    id: 11,
    label: 'Ultricies dui ut non massa eget',
  },
  {
    active: false,
    component: <TextInput placeholder="Blandit mollis nisi curabitur" />,
    id: 12,
    label: 'Blandit mollis nisi curabitur',
  },
];

export const menuMock: IMenuItem<number>[] = [
  {
    children: [{ id: 0, label: 'Home' }],
    id: 1,
    label: 'Home',
    leftIcon: <HouseLine />,
  },
  {
    children: [{ id: 2, label: 'Security' }],
    id: 3,
    label: 'Security',
    leftIcon: <Chat />,
  },
  {
    children: [
      { id: 4, label: 'Release' },
      { children: [{ id: 5, label: 'Account' }], id: 6, label: 'Account' },
      { id: 7, label: 'Upcoming release' },
    ],
    id: 8,
    label: 'Dashboard',
    leftIcon: <Star />,
  },
  { id: 9, label: 'Open Issues', leftIcon: <HouseLine /> },
  {
    children: [
      {
        children: [
          { id: 10, label: 'Wiki pages' },
          { id: 11, label: 'Settings' },
        ],
        id: 12,
        label: 'Dashboard',
      },
      { id: 13, label: 'Home' },
    ],
    id: 14,
    label: 'Pull Requests',
    leftIcon: <User />,
  },
];
