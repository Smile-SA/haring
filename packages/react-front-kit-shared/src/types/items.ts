import type { IOption } from '../../dist';
import type { ReactNode } from 'react';

export interface IItem<T> extends IOption<T> {
  content?: ReactNode;
}

export type IItems<T> = IItem<T>[];
