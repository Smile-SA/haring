'use client';

import type { ICollapseButtonControlledProps } from '../CollapseButton/CollapseButtonControlled';
import type { PaperProps } from '@mantine/core';
import type { ElementType, ReactElement, ReactNode } from 'react';

import { Paper } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { useMemo, useState } from 'react';

import { addPathAndDepth, flattenNestedObjects } from '../../helpers';
import { CollapseButtonControlled } from '../CollapseButton/CollapseButtonControlled';

export interface IMenuItem<T extends number | string> {
  children?: IMenuItem<T>[];
  content?: ReactNode;
  id: T;
  label: number | string;
  leftIcon?: ReactNode;
}

type ICollapseButtonProps<T extends number | string, C extends ElementType> =
  | ICollapseButtonControlledProps<T, C>
  | ((
      item: IMenuItem<T>,
      level?: number,
      isSelected?: boolean,
      opened?: boolean,
    ) => ICollapseButtonControlledProps<T, C>);

// eslint-disable-next-line react-refresh/only-export-components
export function getRecursiveMenu<
  T extends number | string,
  C extends ElementType,
>(
  setSelectedId: (id?: T) => void,
  onMenuOpen: (id: T, isOpened: boolean) => void,
  openedMenuIds: T[],
  selectedId?: T,
  menu?: IMenuItem<T>[],
  collapseButtonProps?: Omit<ICollapseButtonProps<T, C>, 'opened'>,
  level = 0,
): ReactElement[] | null {
  if (!menu || menu.length === 0) {
    return null;
  }
  return menu.map((item) => {
    const { children, content, id, label, leftIcon } = item;
    return (
      <CollapseButtonControlled
        key={id}
        id={id}
        indentation="line"
        isOpenOnSelect
        label={label}
        leftSection={leftIcon}
        level={level}
        onCollapseChange={(isOpened) => onMenuOpen(id, isOpened)}
        onSelect={setSelectedId}
        opened={openedMenuIds.includes(id)}
        selected={selectedId === id}
        {...(typeof collapseButtonProps === 'function'
          ? collapseButtonProps(
              item,
              level,
              selectedId === id,
              openedMenuIds.includes(id),
            )
          : collapseButtonProps)}
      >
        {(children && children.length > 0) || Boolean(content) ? (
          <>
            {getRecursiveMenu(
              setSelectedId,
              onMenuOpen,
              openedMenuIds,
              selectedId,
              children,
              collapseButtonProps,
              level + 1,
            )}
            {Boolean(content) && content}
          </>
        ) : null}
      </CollapseButtonControlled>
    );
  });
}

export interface ISidebarMenuProps<
  T extends number | string,
  C extends ElementType,
> extends PaperProps {
  /** Props, or function returning props for the CollapseButton component */
  collapseButtonProps?: Omit<ICollapseButtonProps<T, C>, 'opened'>;
  component?: ElementType;
  /** Default opened menus, using `id` field of `IMenuItem` */
  defaultOpenedIds?: T[];
  /** Default selected menu id */
  defaultSelectedId?: T;
  /** Keeps only one menu per level open at once */
  hasOnlyOneOpenMenu?: boolean;
  /** Menu hierarchy */
  menu?: IMenuItem<T>[];
  /** Controlled state of which menus are currently open, using `id` field of `IMenuItem` */
  menuOpenValue?: T[];
  /** Callback fired when menu is opened or closed */
  onMenuOpen?: (id: T, isOpened: boolean, path: T[]) => void;
  /** Controlled callback called when the value of menus open/closed changes */
  onMenuOpenChange?: (value: T[]) => void;
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
    onMenuOpenChange,
    menuOpenValue,
    defaultOpenedIds,
    ...paperProps
  } = props;

  const flatMenu = useMemo(
    () => flattenNestedObjects(addPathAndDepth(menu)),
    [menu],
  );

  const [selectedId, setSelectedId] = useState<T | undefined>(
    defaultSelectedId,
  );
  const defaultOpenedMenuIds = (): T[] => {
    if (defaultSelectedId && !defaultOpenedIds) {
      const path = flatMenu.find((menu) => menu.id === defaultSelectedId)
        ?.path as T[] | undefined;
      if (path) {
        return path;
      }
    }
    return defaultOpenedIds ?? [];
  };
  const [openedIds, setOpenedIds] = useUncontrolled<T[]>({
    defaultValue: defaultOpenedMenuIds(),
    finalValue: [],
    onChange: onMenuOpenChange,
    value: menuOpenValue,
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
