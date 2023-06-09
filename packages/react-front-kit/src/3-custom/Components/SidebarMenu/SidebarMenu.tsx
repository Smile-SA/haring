import type { ReactNode } from 'react';

import { Paper } from '@mantine/core';

import { CollapseButton } from '../CollapseButton/CollapseButton';

interface IMenuItem {
  children?: IMenuItem[];
  label: string;
  leftIcon?: ReactNode;
}

interface ISidebarMenuProps {
  menu: IMenuItem[];
}

function getRecursiveMenu(menu?: IMenuItem[], level = 0): ReactNode[] | null {
  if (!menu) {
    return null;
  }
  return menu.map(({ children, ...props }, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <CollapseButton {...props} key={i} level={level} line={level === 0}>
      {getRecursiveMenu(children, level + 1)}
    </CollapseButton>
  ));
}

export function SidebarMenu(props: ISidebarMenuProps): JSX.Element {
  const { menu } = props;

  return (
    <Paper p="lg" shadow="">
      {getRecursiveMenu(menu)}
    </Paper>
  );
}
