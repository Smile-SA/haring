import type { ReactElement, ReactNode } from 'react';

export interface IMenuItem {
  children?: IMenuItem[];
  collapsed?: boolean;
  component?: ReactElement;
  id: string;
  label?: number | string;
  leftIcon?: ReactNode;
}

export type IMenuItems = IMenuItem[];
