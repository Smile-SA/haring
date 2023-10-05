'use client';

import type { IMenuId, IMenuItem } from './types';
import type { PaperProps } from '@mantine/core';
import type { ElementType, ReactElement } from 'react';

import { useState } from 'react';

import { SidebarMenuControlled } from './SidebarMenuControlled';

export interface ISidebarMenuProps extends PaperProps {
  /** Type of HTML element that will be rendered as the component root */
  component?: ElementType;
  /** Allow only one menu to be opened by level */
  hasOnlyOneOpenMenu?: boolean;
  /** Initial open menus using `id` field of `IMenuItem` */
  initialOpenedMenuIds?: IMenuId[];
  /** Array of nested `IMenuItem` menus to be rendered */
  menu: IMenuItem[];
}

/** Additional props will be forwarded to the [Mantine Paper component](https://mantine.dev/core/paper) */
export function SidebarMenu(props: ISidebarMenuProps): ReactElement {
  const {
    component,
    hasOnlyOneOpenMenu = false,
    initialOpenedMenuIds = [],
    menu,
  } = props;
  const [openedIds, setOpenedIds] = useState(initialOpenedMenuIds);
  const [selectedId, setSelectedId] = useState<number | string>();

  return (
    <SidebarMenuControlled
      component={component}
      hasOnlyOneOpenMenu={hasOnlyOneOpenMenu}
      menu={menu}
      onCollapseChange={setOpenedIds}
      onSelectedChange={setSelectedId}
      openedMenuIds={openedIds}
      selectedId={selectedId}
    />
  );
}
