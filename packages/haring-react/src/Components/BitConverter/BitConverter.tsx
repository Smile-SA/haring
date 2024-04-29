'use client';

import type { Options } from 'pretty-bytes';
import type { ReactElement } from 'react';

import prettyBytes from 'pretty-bytes';

export interface IBitConverterProps {
  options?: Options;
  value: number;
}

export function BitConverter(props: IBitConverterProps): ReactElement {
  const { value, options } = props;

  const newValue = prettyBytes(Number(value), options);

  return <>{newValue}</>;
}
