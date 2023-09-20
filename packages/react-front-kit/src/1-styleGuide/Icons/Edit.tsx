'use client';

import type { Icon, IconProps, IconWeight } from '@phosphor-icons/react';
import type { ReactElement } from 'react';

import { IconBase } from '@phosphor-icons/react';
import { forwardRef } from 'react';

const weights = new Map<IconWeight, ReactElement>([
  [
    'regular',
    <>
      <g clipPath="url(#clip0_819_2424)">
        <path
          d="M8.5 1.50003C8.63132 1.36871 8.78722 1.26454 8.9588 1.19347C9.13038 1.1224 9.31428 1.08582 9.5 1.08582C9.68572 1.08582 9.86962 1.1224 10.0412 1.19347C10.2128 1.26454 10.3687 1.36871 10.5 1.50003C10.6313 1.63135 10.7355 1.78725 10.8066 1.95883C10.8776 2.13041 10.9142 2.31431 10.9142 2.50003C10.9142 2.68575 10.8776 2.86964 10.8066 3.04123C10.7355 3.21281 10.6313 3.36871 10.5 3.50003L3.75 10.25L1 11L1.75 8.25003L8.5 1.50003Z"
          stroke="#5C5F66"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_819_2424">
          <rect fill="white" height="12" width="12" />
        </clipPath>
      </defs>
    </>,
  ],
]);

export const Edit: Icon = forwardRef<SVGSVGElement, IconProps>(
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
