'use client';

import type { ButtonProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { useState } from 'react';

import { CollapseButtonControlled } from './CollapseButtonControlled';

export interface ICollapseButtonProps<T extends number | string>
  extends ButtonProps {
  /** Content either collapsed or opened under Button */
  children?: ReactNode;
  id?: T;
  isOpenOnSelect?: boolean;
  label?: ReactNode;
  level?: number;
  line?: boolean;
  onSelect?: (id?: T) => void;
  selected?: boolean;
}

/** Additional props will be forwarded to the [Mantine Button component](https://mantine.dev/core/button) */
export function CollapseButton<T extends number | string>(
  props: ICollapseButtonProps<T>,
): ReactElement {
  const [opened, setOpened] = useState(false);
  return (
    <CollapseButtonControlled
      {...props}
      onCollapseChange={() => setOpened(!opened)}
      opened={opened}
    />
  );
}
