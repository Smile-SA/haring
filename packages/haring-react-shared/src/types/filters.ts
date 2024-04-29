import type { ReactElement } from 'react';

export interface IFilter {
  active?: boolean;
  component?: ReactElement;
  id: number | string;
  label: string;
}
