import type { ReactElement, ReactNode } from 'react';

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
