import type { IOption } from './options';
import type { ReactNode } from 'react';

export interface IItem<T> extends IOption<T> {
  content?: ReactNode;
}

export type IItems<T> = IItem<T>[];
