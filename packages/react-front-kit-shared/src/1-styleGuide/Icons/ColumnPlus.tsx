'use client';

import type { Icon, IconProps, IconWeight } from '@phosphor-icons/react';
import type { ReactElement } from 'react';

import { IconBase } from '@phosphor-icons/react';
import { forwardRef } from 'react';

const weights = new Map<IconWeight, ReactElement>([
  [
    'regular',
    <>
      <path d="M3 1.86005V10.11" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M5.99988 1.875V10.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.0083 1.88995V6.76495"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.9812 8.63989V10.8899"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.8562 9.76489H10.1062"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>,
  ],
]);

export const ColumnPlus: Icon = forwardRef<SVGSVGElement, IconProps>(
  function ColumnPlus(props, ref) {
    const { color = 'currentColor', ...iconProps } = props;
    return (
      <IconBase
        ref={ref}
        {...iconProps}
        fill="none"
        stroke={color}
        viewBox="0 0 12 12"
        weights={weights}
      />
    );
  },
);
