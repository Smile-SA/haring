import type { IAction, IConfirmAction } from '@smile/haring-react-shared';
import type { MRT_Row } from 'mantine-react-table';

export type ITableData<Data extends Record<string, unknown>> =
  | MRT_Row<Data>
  | MRT_Row<Data>[];

export type ITableAction<Data extends Record<string, unknown>> = IAction<
  ITableData<Data>
>;

export type ITableConfirmAction<Data extends Record<string, unknown>> =
  IConfirmAction<MRT_Row<Data> | MRT_Row<Data>[]>;
