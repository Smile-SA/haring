import type { INestedObject } from '../../helpers';
import type { MutableRefObject, ReactElement, ReactNode } from 'react';

export type IMenuId = number | string;

export interface IMenuItem {
  children?: IMenuItem[];
  collapsed?: boolean;
  component?: ReactElement;
  id: IMenuId;
  label?: number | string;
  leftIcon?: ReactNode;
}

export type IMenuItems = IMenuItem[];

export type ISensorContext = MutableRefObject<{
  items: INestedObject<IMenuItem>[];
  offset: number;
}>;
