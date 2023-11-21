'use client';

import type { ICollapseButtonProps } from '../../CollapseButton/CollapseButton';
import type {
  IMenuItem,
  ISidebarMenuProps,
} from '../../SidebarMenu/SidebarMenu';
import type { PaperProps } from '@mantine/core';
import type { ElementType, ReactElement, ReactNode } from 'react';

import { useMantineTheme } from '@mantine/core';
import { useMemo, useState } from 'react';

import { addPathAndDepth, flattenNestedObjects } from '../../../helpers';
import { CollapseButtonControlled } from '../../CollapseButton/CollapseButtonControlled';

import { useStyles } from './SidebarFilterMenu.style';

export interface IFiltersItem<T extends number | string>
  extends Omit<IMenuItem<T>, 'children'> {
  children?: IFiltersItem<T>[];
  content?: ReactNode;
}
export interface ISidebarFilterMenuProps<
  T extends number | string,
  C extends ElementType,
> extends Omit<ISidebarMenuProps<T, C>, 'menu'>,
    PaperProps {
  menu?: IFiltersItem<T>[];
}

// eslint-disable-next-line react-refresh/only-export-components
export function getRecursiveMenu<
  T extends number | string,
  C extends ElementType,
>(
  classes: {
    buttonInner: string;
    buttonLabel: string;
    buttonRoot: string | undefined;
  },
  setSelectedId: (id?: T) => void,
  onMenuOpen: (id: T, isOpened: boolean) => void,
  openedMenuIds: T[],
  selectedId?: T,
  menu?: IFiltersItem<T>[],
  collapseButtonProps?:
    | Omit<ICollapseButtonProps<T, C>, 'opened'>
    | ((item: IFiltersItem<T>) => Omit<ICollapseButtonProps<T, C>, 'opened'>)
    | undefined,
  level = 0,
): ReactElement[] | null {
  if (!menu || menu.length === 0) {
    return null;
  }
  return menu.map((item) => {
    const { content, children, id, label, leftIcon } = item;
    const theme = useMantineTheme();
    return (
      <CollapseButtonControlled
        key={id}
        classNames={{
          inner: classes.buttonInner,
          label: classes.buttonLabel,
          root: classes.buttonRoot,
        }}
        // prettier-ignore
        collapseStyle={
          openedMenuIds.includes(id) && selectedId === id
            ? {
                backgroundColor: theme.colors.cyan[0],
                borderTop: `1px solid ${theme.colors.cyan[2]}`,
              }
            : openedMenuIds.includes(id)
            ? {
                borderTop: `1px solid ${theme.colors.gray[3]}`,
              }
            : {}
        }
        // prettier-ignore
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
          classes,
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

  const { classes } = useStyles();
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
        classes,
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
