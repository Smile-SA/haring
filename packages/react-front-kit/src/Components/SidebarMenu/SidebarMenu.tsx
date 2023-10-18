'use client';

import type { PaperProps } from '@mantine/core';
import type { ElementType, ReactElement, ReactNode } from 'react';

import { Paper } from '@mantine/core';
import { useState } from 'react';

import { addPathAndDepth, flattenNestedObjects } from '../../helpers';
import { CollapseButtonControlled } from '../CollapseButton/CollapseButtonControlled';

export interface IMenuItem {
  children?: IMenuItem[];
  id: number | string;
  label: number | string;
  leftIcon?: ReactNode;
}

export interface ISidebarMenuProps extends PaperProps {
  component?: ElementType;
  /** Keeps only one menu per level open at once */
  hasOnlyOneOpenMenu?: boolean;
  menu: IMenuItem[];
  onMenuOpen?: (id: number | string, isOpened: boolean) => void;
  /** Controlled state of which menus are currently open, using `id` field of `IMenuItem` */
  openedMenuIds?: (number | string)[];
}

function getRecursiveMenu(
  setSelectedId: (id?: number | string) => void,
  onMenuOpen: (id: number | string, isOpened: boolean) => void,
  openedMenuIds: (number | string)[],
  selectedId?: number | string,
  menu?: IMenuItem[],
  level = 0,
): ReactElement[] | null {
  if (!menu || menu.length === 0) {
    return null;
  }
  return menu.map(({ children, id, label, leftIcon }) => (
    <CollapseButtonControlled
      key={id}
      id={id}
      isOpenOnSelect
      label={label}
      leftIcon={leftIcon}
      level={level}
      line={level === 0}
      onCollapseChange={(isOpened) => onMenuOpen(id, isOpened)}
      onSelect={setSelectedId}
      opened={openedMenuIds.includes(id)}
      selected={selectedId === id}
    >
      {getRecursiveMenu(
        setSelectedId,
        onMenuOpen,
        openedMenuIds,
        selectedId,
        children,
        level + 1,
      )}
    </CollapseButtonControlled>
  ));
}

/** Additional props will be forwarded to the [Mantine Paper component](https://mantine.dev/core/paper) */
export function SidebarMenu(props: ISidebarMenuProps): ReactElement {
  const {
    hasOnlyOneOpenMenu = false,
    menu,
    onMenuOpen,
    openedMenuIds = [],
    component,
  } = props;
  const [openedIds, setOpenedIds] = useState(openedMenuIds);
  const [selectedId, setSelectedId] = useState<number | string>();

  function handleOpenChange(menuId: number | string, isOpened: boolean): void {
    onMenuOpen?.(menuId, isOpened);
    if (hasOnlyOneOpenMenu && isOpened) {
      /** Flatten and add calculated path property to the entire nested array of menus,
       * keep only the path from the menu being clicked **/
      const flatMenu = flattenNestedObjects(addPathAndDepth(menu));
      const openedMenuPath = flatMenu.find((menu) => menu.id === menuId)?.path;
      setOpenedIds(openedMenuPath ?? []);
    } else {
      /** Add or remove id being clicked **/
      const exists = openedIds.includes(menuId);
      let newOpenedIds;
      if (exists) {
        newOpenedIds = openedIds.filter((id) => id !== menuId);
      } else {
        newOpenedIds = openedIds.concat(menuId);
      }
      setOpenedIds(newOpenedIds);
    }
  }

  return (
    <Paper
      // @ts-expect-error wrong type for polymorphic component
      component={component}
      p="lg"
      shadow=""
    >
      {getRecursiveMenu(
        setSelectedId,
        handleOpenChange,
        openedIds,
        selectedId,
        menu,
      )}
    </Paper>
  );
}
