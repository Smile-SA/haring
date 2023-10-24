'use client';

import type { ICollapseButtonControlledProps } from '../CollapseButton/CollapseButtonControlled';
import type { PaperProps } from '@mantine/core';
import type { ElementType, ReactElement, ReactNode } from 'react';

import { Paper } from '@mantine/core';
import { useMemo, useState } from 'react';

import { addPathAndDepth, flattenNestedObjects } from '../../helpers';
import { CollapseButtonControlled } from '../CollapseButton/CollapseButtonControlled';

export interface IMenuItem<T extends number | string> {
  children?: IMenuItem<T>[];
  id: T;
  label: number | string;
  leftIcon?: ReactNode;
}

type ICollapseButtonProps<T extends number | string, C extends ElementType> =
  | ICollapseButtonControlledProps<T, C>
  | ((item: IMenuItem<T>) => ICollapseButtonControlledProps<T, C>);

export interface ISidebarMenuProps<
  T extends number | string,
  C extends ElementType,
> extends PaperProps {
  /** Props, or function returning props for the CollapseButton component */
  collapseButtonProps?: ICollapseButtonProps<T, C>;
  component?: ElementType;
  /** Default selected menu id */
  defaultSelectedId?: T;
  /** Keeps only one menu per level open at once */
  hasOnlyOneOpenMenu?: boolean;
  /** Menu hierarchy */
  menu: IMenuItem<T>[];
  /** Callback fired when menu is opened or closed */
  onMenuOpen?: (id: T, isOpened: boolean, path: T[]) => void;
  /** Controlled state of which menus are currently open, using `id` field of `IMenuItem` */
  openedMenuIds?: T[];
}

function getRecursiveMenu<T extends number | string, C extends ElementType>(
  setSelectedId: (id?: T) => void,
  onMenuOpen: (id: T, isOpened: boolean) => void,
  openedMenuIds: T[],
  selectedId?: T,
  menu?: IMenuItem<T>[],
  collapseButtonProps?: ICollapseButtonProps<T, C>,
  level = 0,
): ReactElement[] | null {
  if (!menu || menu.length === 0) {
    return null;
  }
  return menu.map((item) => {
    const { children, id, label, leftIcon } = item;
    return (
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
      </CollapseButtonControlled>
    );
  });
}

/** Additional props will be forwarded to the [Mantine Paper component](https://mantine.dev/core/paper) */
export function SidebarMenu<
  T extends number | string,
  C extends ElementType = 'button',
>(props: ISidebarMenuProps<T, C>): ReactElement {
  const {
    collapseButtonProps,
    component,
    defaultSelectedId,
    hasOnlyOneOpenMenu = false,
    menu,
    onMenuOpen,
    openedMenuIds,
    ...paperProps
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
    <Paper
      // @ts-expect-error wrong type for polymorphic component
      component={component}
      p="lg"
      shadow=""
      {...paperProps}
    >
      {getRecursiveMenu(
        setSelectedId,
        handleOpenChange,
        openedIds,
        selectedId,
        menu,
        collapseButtonProps,
      )}
    </Paper>
  );
}
