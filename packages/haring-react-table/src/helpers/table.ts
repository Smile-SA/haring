import type { ITableAction, ITableConfirmAction } from '../types';
import type { MRT_Row } from 'mantine-react-table';
import type { ReactNode } from 'react';

export function isConfirmAction<Data extends Record<string, unknown>>(
  action: ITableAction<Data>,
): action is ITableConfirmAction<Data> {
  return 'item' in action;
}

export function getActionLabel<Data extends Record<string, unknown>>(
  action?: ITableAction<Data> | null,
  rows?: MRT_Row<Data> | MRT_Row<Data>[],
): string {
  if (!action) {
    return '';
  }
  if (isConfirmAction(action)) {
    return typeof action.label === 'function'
      ? action.label(action.item)
      : action.label;
  }
  if (typeof action.label === 'function') {
    return rows ? action.label(rows) : '';
  }
  return action.label;
}

export function getActionIcon<Data extends Record<string, unknown>>(
  action?: ITableAction<Data> | null,
  rows?: MRT_Row<Data> | MRT_Row<Data>[],
): ReactNode {
  if (!action) {
    return null;
  }
  if (isConfirmAction(action)) {
    return typeof action.icon === 'function'
      ? action.icon(action.item)
      : action.icon;
  }
  if (typeof action.icon === 'function') {
    return rows ? action.icon(rows) : null;
  }
  return action.icon;
}

export function getActionComponentProps<Data extends Record<string, unknown>>(
  action?: ITableAction<Data> | null,
  rows?: MRT_Row<Data> | MRT_Row<Data>[],
): Record<string, unknown> | undefined {
  if (!action) {
    return undefined;
  }
  if (isConfirmAction(action)) {
    return typeof action.componentProps === 'function'
      ? action.componentProps(action.item)
      : action.componentProps;
  }
  if (typeof action.componentProps === 'function') {
    return rows ? action.componentProps(rows) : undefined;
  }
  return action.componentProps;
}
