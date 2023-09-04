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
    enableColumnOrdering: false,
    enableGlobalFilter: false,
    enablePagination: false,
    enableRowActions: true,
    enableRowSelection: true,
    positionActionsColumn: 'last',
    renderRowActions: () => (
      <>
        <button type="button">X</button>
        <button type="button">editer</button>
      </>
    ),
  });

  return <MantineReactTable table={table} />;
}
