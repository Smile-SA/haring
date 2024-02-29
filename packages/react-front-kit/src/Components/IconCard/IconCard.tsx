'use client';

import type { ReactElement, ReactNode } from 'react';

export interface IIconCardProps {
  children?: ReactNode;
}

export function IconCard(props: IIconCardProps): ReactElement {
  const { children } = props;
  return (
    <div>
      <h1>IconCard</h1>
      {children}
    </div>
  );
}
