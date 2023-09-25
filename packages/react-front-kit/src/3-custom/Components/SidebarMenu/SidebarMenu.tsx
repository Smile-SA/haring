'use client';

import type { PaperProps } from '@mantine/core';
import type { ElementType, ReactElement, ReactNode } from 'react';

import { Paper } from '@mantine/core';
import { useState } from 'react';

import {
  addPathAndDepth,
  flattenNestedObjects,
} from '../../../utils/nested-object';
import { CollapseButtonControlled } from '../CollapseButton/CollapseButtonControlled';

export interface IMenuItem {
  children?: IMenuItem[];
  component?: ReactElement;
  id: number | string;
  label: number | string;
  leftIcon?: ReactNode;
}

interface ISidebarMenuProps extends PaperProps {
  component?: ElementType;
  /** Keeps only one menu per level open at once */
  hasOnlyOneOpenMenu?: boolean;
  menu: IMenuItem[];
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
      onCollapseChange={(isOpened) => onMenuOpen(props.id, isOpened)}
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

/** Additional props will be forwarded to the [Mantine Paper component](https://mantine.dev/core/paper) */
export function SidebarMenu(props: ISidebarMenuProps): ReactElement {
  const {
    hasOnlyOneOpenMenu = false,
    menu,
    openedMenuIds = [],
    component,
  } = props;
  const [openedIds, setOpenedIds] = useState(openedMenuIds);
  const [selectedId, setSelectedId] = useState<number | string>();

  function handleOpenChange(menuId: number | string, isOpened: boolean): void {
    if (hasOnlyOneOpenMenu && isOpened) {
      /** Flatten and add calculated path property to the entire nested array of menus,
       * keep only the path from the menu being clicked **/
      const openedMenuPath = flattenNestedObjects<IMenuItem>(
        addPathAndDepth<IMenuItem>(menu),
      ).find((menu) => menu.id === menuId)?.path;
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
