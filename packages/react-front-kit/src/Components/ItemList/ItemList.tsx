'use client';

import type { ReactElement, ReactNode } from 'react';

export interface IItemListProps {
  children?: ReactNode;
}

export function ItemList(props: IItemListProps): ReactElement {
  const { children } = props;
  return (
    <div>
      <h1>ItemList</h1>
      {children}
    </div>
  );
}
