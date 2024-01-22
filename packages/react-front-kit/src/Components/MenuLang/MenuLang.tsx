'use client';

import type { ReactElement, ReactNode } from 'react';

export interface IMenuLangProps {
  children?: ReactNode;
}

export function MenuLang(props: IMenuLangProps): ReactElement {
  const { children } = props;
  return (
    <div>
      <h1>MenuLang</h1>
      {children}
    </div>
  );
}
