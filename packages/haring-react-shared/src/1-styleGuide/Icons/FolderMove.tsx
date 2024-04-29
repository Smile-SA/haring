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
        d="M3.58333 10H1.41667C1.30616 10 1.20018 9.95564 1.12204 9.87668C1.0439 9.79771 1 9.69062 1 9.57895V2.42105C1 2.30938 1.0439 2.20229 1.12204 2.12332C1.20018 2.04436 1.30616 2 1.41667 2H4.19271C4.2828 2.00037 4.37041 2.02988 4.44271 2.08421L5.89062 3.17895C5.96292 3.23327 6.05053 3.26278 6.14062 3.26316H10.5833C10.6938 3.26316 10.7998 3.30752 10.878 3.38648C10.9561 3.46544 11 3.57254 11 3.68421V5.36842"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 9H11" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 7L11 9L9 11" strokeLinecap="round" strokeLinejoin="round" />
    </>,
  ],
]);

export const FolderMove = forwardRef<SVGSVGElement, IconProps>(
  function FolderMove(props, ref) {
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
) as Icon;
