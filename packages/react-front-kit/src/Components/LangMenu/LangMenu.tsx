'use client';

import type { ReactElement, ReactNode } from 'react';

export interface ILangMenuProps {
  children?: ReactNode;
}

export function LangMenu(props: ILangMenuProps): ReactElement {
  const { children } = props;
  return (
    <div>
      <h1>langMenu</h1>
      {children}
    </div>
  );
}
