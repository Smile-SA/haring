import type {
  ITableGridAction,
  ITableGridViewGridProps,
  ITableGridViewProps,
} from './TableGridView';

import { tableMock } from '../Table/Table.mock';

const gridProps: ITableGridViewGridProps = {
  cols: 5,
  idFieldName: 'id',
  labelFieldName: 'title',
  spacing: 25,
  verticalSpacing: 25,
};

const { actions, data, ...tableProps } = tableMock;

export const tableGridViewProps: ITableGridViewProps<Record<string, unknown>> =
  {
    actions: actions as ITableGridAction<Record<string, unknown>>[],
    data,
    gridProps,
    tableProps,
  };
