'use client';

import type { IUniqueIdentifier } from '../../helpers';
import type { UniqueIdentifier } from '@dnd-kit/core';
import type { ButtonProps } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { useState } from 'react';

import { CollapseButtonControlled } from './CollapseButtonControlled';

export interface ICollapseButtonProps extends ButtonProps {
  /** Content either collapsed or opened under Button */
  children?: ReactNode;
  handleProps?: Record<string, unknown>;
  id?: UniqueIdentifier;
  isOpenOnSelect?: boolean;
  label?: ReactNode;
  level?: number;
  line?: boolean;
  onSelect?: (id?: IUniqueIdentifier) => void;
  selected?: boolean;
}

/** Additional props will be forwarded to the [Mantine Button component](https://mantine.dev/core/button) */
export function CollapseButton(props: ICollapseButtonProps): ReactElement {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <CollapseButtonControlled
      {...props}
      collapsed={collapsed}
      onCollapseChange={() => setCollapsed(!collapsed)}
    />
  );
}
