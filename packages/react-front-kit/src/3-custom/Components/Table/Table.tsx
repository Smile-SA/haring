'use client';

import type { MRT_ColumnDef } from 'mantine-react-table';

// eslint-disable-next-line import/no-extraneous-dependencies
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { useMemo } from 'react';

interface IDocument {
  creator: string;
  date: string;
  format: string;
  title: string;
}

// Icons
const menu = (
  <svg
    fill="none"
    height="12"
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
    <g clip-path="url(#clip0_819_2424)">
      <path
        d="M8.5 1.50003C8.63132 1.36871 8.78722 1.26454 8.9588 1.19347C9.13038 1.1224 9.31428 1.08582 9.5 1.08582C9.68572 1.08582 9.86962 1.1224 10.0412 1.19347C10.2128 1.26454 10.3687 1.36871 10.5 1.50003C10.6313 1.63135 10.7355 1.78725 10.8066 1.95883C10.8776 2.13041 10.9142 2.31431 10.9142 2.50003C10.9142 2.68575 10.8776 2.86964 10.8066 3.04123C10.7355 3.21281 10.6313 3.36871 10.5 3.50003L3.75 10.25L1 11L1.75 8.25003L8.5 1.50003Z"
        stroke="#5C5F66"
        stroke-linecap="round"
        stroke-linejoin="round"
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
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 9H11"
      stroke="#5C5F66"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 7L11 9L9 11"
      stroke="#5C5F66"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

// styles

const actionButton = {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
};

const data: IDocument[] = [
  {
    creator: 'Valentin Perello',
    date: '20/05/2022',
    format: 'SVG',
    title: 'Doc test',
  },
  {
    creator: 'Valentin Perello',
    date: '20/05/2022',
    format: 'PDF',
    title: 'Doc test',
  },
  {
    creator: 'Valentin Perello',
    date: '20/05/2022',
    format: 'PDF',
    title: 'Doc test',
  },
  {
    creator: 'Valentin Perello',
    date: '20/05/2022',
    format: 'PDF',
    title: 'Doc test',
  },
  {
    creator: 'Valentin Perello',
    date: '20/05/2022',
    format: 'PDF',
    title: 'Doc test',
  },
];

export function Table(): JSX.Element {
  const columns = useMemo<MRT_ColumnDef<IDocument>[]>(
    () => [
      {
        accessorKey: 'format',
        columnFilterModeOptions: ['fuzzy', 'contains', 'startsWith'],
        header: 'Format',
      },
      {
        accessorKey: 'title',
        header: 'Titre',
      },
      {
        accessorKey: 'creator',
        header: 'Créateur',
      },
      {
        accessorKey: 'date',
        header: 'Date publication',
      },
    ],
    []
  );
  const table = useMantineReactTable({
    columns,
    data,
    displayColumnDefOptions: {
      'mrt-row-actions': {
        header: undefined, // change header text
        size: 124, // make actions column wider
      },
    },
    enableColumnOrdering: false,
    enableGlobalFilter: false,
    enablePagination: false,
    enableRowActions: true,
    enableRowSelection: true,
    initialState: {
      columnPinning: {
        right: ['mrt-row-actions'], // pin built-in row actions display column to right by default
      },
    },
    positionActionsColumn: 'last',
    renderRowActions: () => (
      <div
        className="actions"
        style={{
          boxShadow: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: '24px',
          marginRight: '16px',
        }}
      >
        <button style={actionButton} type="button">
          {arbo}
        </button>
        <button style={actionButton} type="button">
          {edit}
        </button>
        <button style={actionButton} type="button">
          {menu}
        </button>
      </div>
    ),
  });

  return <MantineReactTable table={table} />;
}
