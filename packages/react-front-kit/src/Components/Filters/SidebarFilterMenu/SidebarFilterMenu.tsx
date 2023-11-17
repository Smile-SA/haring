'use client';

import type { ICollapseButtonProps } from '../../CollapseButton/CollapseButton';
import type {
  IMenuItem,
  ISidebarMenuProps,
} from '../../SidebarMenu/SidebarMenu';
import type { PaperProps } from '@mantine/core';
import type { ElementType, ReactElement, ReactNode } from 'react';

import { useMemo, useState } from 'react';

import { addPathAndDepth, flattenNestedObjects } from '../../../helpers';
import { CollapseButtonControlled } from '../../CollapseButton/CollapseButtonControlled';

export interface IFiltersItem<T extends number | string> extends IMenuItem<T> {
  content?: ReactNode;
}

export interface ISidebarFilterMenuProps<
  T extends number | string,
  C extends ElementType,
> extends Omit<ISidebarMenuProps<T, C>, 'menu'>,
    PaperProps {
  menu?: IFiltersItem<T>;
}

export function getRecursiveMenu<
  T extends number | string,
  C extends ElementType,
>(
  setSelectedId: (id?: T) => void,
  onMenuOpen: (id: T, isOpened: boolean) => void,
  openedMenuIds: T[],
  selectedId?: T,
  menu?: IFiltersItem<T>[],
  collapseButtonProps?: Omit<ICollapseButtonProps<T, C>, 'opened'>,
  level = 0,
): ReactElement[] | null {
  if (!menu || menu.length === 0) {
    return null;
  }
  return menu.map((item) => {
    const { content, children, id, label, leftIcon } = item;
    return (
      <CollapseButtonControlled
        key={id}
        id={id}
        isOpenOnSelect
        label={label}
        leftIcon={leftIcon}
        level={level}
        onCollapseChange={(isOpened) => onMenuOpen(id, isOpened)}
        onSelect={setSelectedId}
        opened={openedMenuIds.includes(id)}
        selected={selectedId === id}
        {...(typeof collapseButtonProps === 'function'
          ? collapseButtonProps(item)
          : collapseButtonProps)}
      >
        {getRecursiveMenu(
          setSelectedId,
          onMenuOpen,
          openedMenuIds,
          selectedId,
          children,
          collapseButtonProps,
          level + 1,
        )}
        {content}
      </CollapseButtonControlled>
    );
  });
}

export function SidebarFilterMenu<
  T extends number | string,
  C extends ElementType = 'button',
>(props: ISidebarFilterMenuProps<T, C>): ReactElement {
  const {
    collapseButtonProps,
    defaultSelectedId,
    hasOnlyOneOpenMenu = false,
    menu,
    onMenuOpen,
    openedMenuIds,
  } = props;

  const flatMenu = useMemo(
    () => flattenNestedObjects(addPathAndDepth(menu)),
    [menu],
  );

  const [selectedId, setSelectedId] = useState<T | undefined>(
    defaultSelectedId,
  );

  const [openedIds, setOpenedIds] = useState<T[]>(() => {
    if (defaultSelectedId && !openedMenuIds) {
      const path = flatMenu.find((menu) => menu.id === defaultSelectedId)
        ?.path as T[] | undefined;
      if (path) {
        return path;
      }
    }
    return openedMenuIds ?? [];
  });

  function handleOpenChange(menuId: T, isOpened: boolean): void {
    const openedMenuPath = (flatMenu.find((menu) => menu.id === menuId)?.path ??
      []) as T[];
    onMenuOpen?.(menuId, isOpened, openedMenuPath);
    if (hasOnlyOneOpenMenu && isOpened) {
      setOpenedIds(openedMenuPath);
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
    <div>
      {getRecursiveMenu(
        setSelectedId,
        handleOpenChange,
        openedIds,
        selectedId,
        menu,
        collapseButtonProps,
      )}
    </div>
  );
}
