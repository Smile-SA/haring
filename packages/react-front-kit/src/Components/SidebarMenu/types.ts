import type { ReactElement, ReactNode } from 'react';

export interface IMenuItem {
  children?: IMenuItem[];
  component?: ReactElement;
  id: string;
  label?: string;
  leftIcon?: ReactNode;
}

export type IMenuItems = IMenuItem[];
