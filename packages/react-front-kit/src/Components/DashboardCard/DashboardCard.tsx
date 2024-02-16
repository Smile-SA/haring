'use client';

import type { ReactElement, ReactNode } from 'react';

export interface IDashboardCardProps {
  children?: ReactNode;
}

export function DashboardCard(props: IDashboardCardProps): ReactElement {
  const { children } = props;
  return (
    <div>
      <h1>DashboardCard</h1>
      {children}
    </div>
  );
}
