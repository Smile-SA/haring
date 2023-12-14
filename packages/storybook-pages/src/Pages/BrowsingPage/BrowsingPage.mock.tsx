import type {
  ITableGridViewGridProps,
  ITableGridViewTableProps,
} from '@smile/react-front-kit-table';
import type { IExampleDataType } from '@smile/react-front-kit-table/mock';

import {
  DownloadSimple,
  Eye,
  PencilSimple,
  ShareNetwork,
  Star,
  Trash,
} from '@phosphor-icons/react';
import { FolderMove } from '@smile/react-front-kit';

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
  selectedElementsText: (n) => `${n} fichier(s) sélectionnés`,
  spacing: 25,
  verticalSpacing: 25,
};

export const filtersCheckboxListProps = [
  { active: false, id: 1, label: 'Nom du filtre', value: 'FILTER_NAME' },
  {
    active: false,
    id: 2,
    label: 'Blandit mollis nisi curabitur',
    value: 'BLANDI',
  },
  {
    active: false,
    id: 3,
    label: 'Ultricies dui ut non massa eget',
    value: 'ULTRICIES',
  },
  {
    active: false,
    id: 4,
    label: 'Lorem ipsum dolor ',
    value: 'LOREM',
  },
  { active: true, id: 5, label: 'Dernière modification', value: 'LAST_UPDATE' },
  { active: true, id: 6, label: 'Type de document', value: 'DOCUMENT_TYPE' },
  { active: true, id: 7, label: 'Période', value: 'PERIOD' },
  {
    active: false,
    id: 8,
    label: 'Lorem ipsum dolor ',
    value: 'LOREM2',
  },
  {
    active: false,
    id: 9,
    label: 'Blandit mollis nisi curabitur',
    value: 'BLANDI2',
  },
  {
    active: false,
    id: 10,
    label: 'Lorem ipsum dolor ',
    value: 'LOREM3',
  },
  {
    active: false,
    id: 11,
    label: 'Ultricies dui ut non massa eget',
    value: 'ULTRICIES2',
  },
  {
    active: false,
    id: 12,
    label: 'Blandit mollis nisi curabitur',
    value: 'BLANDI3',
  },
];
