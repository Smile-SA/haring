import type { ReactNode } from 'react';

export interface IItem<T> {
  label: ReactNode;
  value: T;
}

export type IItems<T> = IItems<T>[];
