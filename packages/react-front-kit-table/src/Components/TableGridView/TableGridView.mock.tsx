import type { ITableGridViewProps } from './TableGridView';

import { ThumbnailGrid } from '@smile/react-front-kit/src/Components/ThumbnailGrid/ThumbnailGrid.stories';

import { Table } from '../Table/Table.stories';

const { data, ...tableProps } = Table.args;
const { thumbnails, ...gridProps } = ThumbnailGrid.args;

export const tableGridViewProps: ITableGridViewProps<Record<string, unknown>> =
  {
    data,
    gridProps: { ...gridProps, idFieldName: 'id', labelFieldName: 'title' },
    tableProps,
  };
