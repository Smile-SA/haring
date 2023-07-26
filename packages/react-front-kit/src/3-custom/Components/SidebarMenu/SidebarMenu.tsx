'use client';

import type { ReactNode } from 'react';

import { Paper } from '@mantine/core';
import { useState } from 'react';

import { CollapseButton } from '../CollapseButton/CollapseButton';

export interface IMenuItem {
  children?: IMenuItem[];
  id: string | number;
  label: string | number;
  leftIcon?: ReactNode;
}

interface ISidebarMenuProps {
  menu: IMenuItem[];
}

function getRecursiveMenu(
  setSelectedId: (id?: string | number) => void,
  selectedId?: string | number,
  menu?: IMenuItem[],
  level = 0
): ReactNode[] | null {
  if (!menu) {
    return null;
  }
  return menu.map(({ children, ...props }, i) => (
    <CollapseButton
      {...props}
      key={props.id ?? i}
      level={level}
      line={level === 0}
      onSelect={setSelectedId}
      selected={selectedId === props.id}
    >
      {getRecursiveMenu(setSelectedId, selectedId, children, level + 1)}
    </CollapseButton>
  ));
}

export function SidebarMenu(props: ISidebarMenuProps): JSX.Element {
  const { menu } = props;
  const [selectedId, setSelectedId] = useState<string | number>();

  return (
    <Paper p="lg" shadow="">
      {getRecursiveMenu(setSelectedId, selectedId, menu)}
    </Paper>
  );
}
