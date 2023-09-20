'use client';

import type { Icon, IconProps, IconWeight } from '@phosphor-icons/react';
import type { ReactElement } from 'react';

import { IconBase } from '@phosphor-icons/react';
import { forwardRef } from 'react';

const weights = new Map<IconWeight, ReactElement>([
  [
    'regular',
    <>
      <path
        d="M6 3.375C6.20711 3.375 6.375 3.20711 6.375 3C6.375 2.79289 6.20711 2.625 6 2.625C5.79289 2.625 5.625 2.79289 5.625 3C5.625 3.20711 5.79289 3.375 6 3.375Z"
        fill="#5C5F66"
        stroke="#5C5F66"
      />
      <path
        d="M6 6.375C6.20711 6.375 6.375 6.20711 6.375 6C6.375 5.79289 6.20711 5.625 6 5.625C5.79289 5.625 5.625 5.79289 5.625 6C5.625 6.20711 5.79289 6.375 6 6.375Z"
        fill="#5C5F66"
        stroke="#5C5F66"
      />
      <path
        d="M6 9.375C6.20711 9.375 6.375 9.20711 6.375 9C6.375 8.79289 6.20711 8.625 6 8.625C5.79289 8.625 5.625 8.79289 5.625 9C5.625 9.20711 5.79289 9.375 6 9.375Z"
        fill="#5C5F66"
        stroke="#5C5F66"
      />
    </>,
  ],
]);

export const MenuTable: Icon = forwardRef<SVGSVGElement, IconProps>(
  function FolderMove(props, ref) {
    return (
      <IconBase
        ref={ref}
        {...props}
        fill="none"
        style={{ margin: 'auto' }}
        viewBox="0 0 12 12"
        weights={weights}
      />
    );
  },
);
