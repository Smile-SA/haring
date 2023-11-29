'use client';

import type { ButtonProps } from '@mantine/core';
import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
  ReactNode,
} from 'react';

import { useState } from 'react';

import { CollapseButtonControlled } from './CollapseButtonControlled';

export interface ICollapseButtonProps<
  T extends number | string,
  C extends ElementType,
> extends ButtonProps {
  /** Content either collapsed or opened under Button */
  children?: ReactNode;
  /** Custom component to use around the label */
  component?: C;
  /** Additional props for the custom component */
  componentProps?: ComponentPropsWithoutRef<C>;
  id?: T;
  indentation?: 'line' | 'simple';
  isOpenOnSelect?: boolean;
  label?: ReactNode;
  level?: number;
  onSelect?: (id?: T) => void;
  selected?: boolean;
}

/** Additional props will be forwarded to the [Mantine Button component](https://mantine.dev/core/button) */
export function CollapseButton<
  T extends number | string,
  C extends ElementType = 'button',
>(props: ICollapseButtonProps<T, C>): ReactElement {
  const [opened, setOpened] = useState(false);
  return (
    <CollapseButtonControlled
      {...props}
      onCollapseChange={() => setOpened(!opened)}
      opened={opened}
    />
  );
}
