'use client';

import type { ReactElement, ReactNode } from 'react';

import { Paper } from '@mantine/core';
import { useState } from 'react';

import { CollapseButton } from '../CollapseButton/CollapseButton';

export interface IMenuItem {
  children?: IMenuItem[];
  id: number | string;
  label: number | string;
  leftIcon?: ReactNode;
}

interface ISidebarMenuProps {
  menu: IMenuItem[];
}

function getRecursiveMenu(
  setSelectedId: (id?: number | string) => void,
  selectedId?: number | string,
  menu?: IMenuItem[],
  level = 0,
): ReactElement[] | null {
  if (!menu) {
    return null;
  }
  return menu.map(({ children, ...props }) => (
    <CollapseButton
      {...props}
      key={props.id}
      level={level}
      line={level === 0}
      onSelect={setSelectedId}
      selected={selectedId === props.id}
    >
      {getRecursiveMenu(setSelectedId, selectedId, children, level + 1)}
    </CollapseButton>
  ));
}

export function SidebarMenu(props: ISidebarMenuProps): ReactElement {
  const { menu } = props;
  const [selectedId, setSelectedId] = useState<number | string>();

  return (
    <Paper p="lg" shadow="">
      {getRecursiveMenu(setSelectedId, selectedId, menu)}
    </Paper>
  );
}
