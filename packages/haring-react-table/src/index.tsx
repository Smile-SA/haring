/* eslint-disable react-refresh/only-export-components */
'use client';

// component exports
export { Table } from './Components/Table/Table';
export type { ITableProps } from './Components/Table/Table';
export { TableGridView } from './Components/TableGridView/TableGridView';
export type {
  ITableGridAction,
  ITableGridViewGridProps,
  ITableGridViewProps,
  ITableGridViewTableProps,
} from './Components/TableGridView/TableGridView';
// helper exports
export {
  getActionComponentProps,
  getActionIcon,
  getActionLabel,
  isConfirmAction,
} from './helpers';
// type exports
export type { ITableAction, ITableConfirmAction, ITableData } from './types';
