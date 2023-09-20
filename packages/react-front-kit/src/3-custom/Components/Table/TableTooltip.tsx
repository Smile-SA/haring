'use client';

import type { ReactElement, ReactNode } from 'react';

import { Tooltip } from '@mantine/core';

interface ITableTooltipProps {
  element: ReactNode;
  text: string;
}

export function TableTooltip(props: ITableTooltipProps): ReactElement {
  const { element, text } = props;
  return (
    <Tooltip
      color="gray.7"
      label={text}
      position="bottom"
      radius={6}
      withArrow
      withinPortal
    >
      {element}
    </Tooltip>
  );
}
