'use client';

import type { ReactElement } from 'react';

export interface IBitByteConverterProps {
  base?: 1000 | 1024;
  children: string;
}

export function BitByteConverter(props: IBitByteConverterProps): ReactElement {
  const { base = 1024, children } = props;

  const unitsBase1024 = [
    'bytes',
    'KiB',
    'MiB',
    'GiB',
    'TiB',
    'PiB',
    'EiB',
    'ZiB',
    'YiB',
  ];

  const unitsBase1000 = [
    'bits',
    'KB',
    'MB',
    'GB',
    'TB',
    'PB',
    'EB',
    'ZB',
    'YB',
  ];

  function niceBytes(x: string): string {
    let l = 0,
      n = parseInt(x, 10) || 0;

    while (n >= base && ++l) {
      n = n / base;
    }

    return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${
      base === 1024 ? unitsBase1024[l] : unitsBase1000[l]
    }`;
  }

  return <>{niceBytes(children)}</>;
}
