'use client';

import type { ReactElement, ReactNode } from 'react';

import { Paper } from '@mantine/core';
import { useState } from 'react';

import {
  assignDepth,
  flattenNestedObjects,
} from '../../../utils/nested-object';
import { isNotNullNorEmpty } from '../../../utils/utilities';
import { CollapseButtonControlled } from '../CollapseButton/CollapseButtonControlled';

export interface IMenuItem {
  children?: IMenuItem[];
  id: number | string;
  label: number | string;
  leftIcon?: ReactNode;
}

interface ISidebarMenuProps {
  hasOnlyOneOpenMenu?: boolean;
  menu: IMenuItem[];
  openedMenuIds?: (number | string)[];
}

function getRecursiveMenu(
  setSelectedId: (id?: number | string) => void,
  onMenuOpen: (id: number | string, level: number, isOpened: boolean) => void,
  openedMenuIds: (number | string)[],
  selectedId?: number | string,
  menu?: IMenuItem[],
  level = 0,
): ReactElement[] | null {
  if (!menu) {
    return null;
  }
  return menu.map(({ children, ...props }) => (
    <CollapseButtonControlled
      {...props}
      key={props.id}
      isOpenOnSelect
      level={level}
      line={level === 0}
      onCollapseChange={(isOpened) => onMenuOpen(props.id, level, isOpened)}
      onSelect={setSelectedId}
      opened={openedMenuIds.includes(props.id)}
      selected={selectedId === props.id}
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

export function SidebarMenu(props: ISidebarMenuProps): ReactElement {
  function handleOpenChange(
    menuId: number | string,
    level: number,
    isOpened: boolean,
  ): void {
    if (hasOnlyOneOpenMenu && isOpened) {
      /** Flatten and add depth property to check the entire nested array of menus,
       * below the level being opened, keep menus that are already open,
       * at the current level being opened, only add the menu just clicked,
       * above the level being opened or for menus that were not already open, discard **/
      const newOpenedIds = flattenNestedObjects(assignDepth(menu))
        .map((menu) => {
          if (
            openedIds.includes(menu.id) &&
            menu.depth !== undefined &&
            menu.depth < level
          ) {
            return menu.id;
          } else if (menu.id === menuId) {
            return menuId;
          }
          return null;
        })
        .filter(isNotNullNorEmpty);
      setOpenedIds(newOpenedIds);
    } else {
      /** Add or remove id being clicked **/
      let newOpenedIds = [...openedIds];
      const exists = newOpenedIds.includes(menuId);
      if (exists) {
        newOpenedIds = newOpenedIds.filter((id) => id !== menuId);
      } else {
        newOpenedIds.push(menuId);
      }
      setOpenedIds(newOpenedIds);
    }
  }

  const { hasOnlyOneOpenMenu = false, menu, openedMenuIds = [] } = props;
  const [openedIds, setOpenedIds] = useState(openedMenuIds);
  const [selectedId, setSelectedId] = useState<number | string>();

  return (
    <Paper p="lg" shadow="">
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
