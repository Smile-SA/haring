'use client';

import type { IMenuItem } from '../SidebarMenu/SidebarMenu';
import type { ElementType, ReactElement, ReactNode } from 'react';

import { Menu, NavLink, getThemeColor, useMantineTheme } from '@mantine/core';
import { CaretDown } from '@phosphor-icons/react';

import { SidebarMenu } from '../SidebarMenu/SidebarMenu';

import classes from './HeaderMenu.module.css';

function recursiveNavLinks<T extends number | string>(
  menus: IHeaderMenuMenu<T>[],
  component: ElementType,
  className: string,
): ReactNode {
  return menus.map((menu) => (
    <NavLink
      key={menu.id}
      className={className}
      component={component as 'symbol'}
      href={!menu.children ? menu.url : undefined}
      label={menu.label}
    >
      {menu.children
        ? recursiveNavLinks(menu.children, component, className)
        : null}
    </NavLink>
  ));
}

export interface IHeaderMenuMenu<T extends number | string>
  extends IMenuItem<T> {
  children?: IHeaderMenuMenu<T>[];
  url?: string;
}

export interface IHeaderMenuProps<T extends number | string> {
  isMobile?: boolean;
  menus: IHeaderMenuMenu<T>[];
  navLinkComponent?: ElementType;
}

export function HeaderMenu<T extends number | string>(
  props: IHeaderMenuProps<T>,
): ReactElement {
  const { menus, isMobile = false, navLinkComponent = 'a' } = props;
  const theme = useMantineTheme();

  return (
    <>
      {isMobile ? (
        <SidebarMenu
          collapseButtonProps={(
            _item: IMenuItem<T>,
            level: number,
            isSelected: boolean,
            opened: boolean,
          ) => {
            return {
              className: [
                classes.menu,
                level === 0 ? classes.rootMenu : '',
                opened || isSelected
                  ? level === 0
                    ? classes.activeRootLabel
                    : classes.activeLabel
                  : '',
              ].join(' '),
              ...(level >= 1 && {
                collapseProps: {
                  className: '',
                },
              }),
            };
          }}
          menu={menus}
          p={0}
        />
      ) : (
        menus.map((menu) => {
          if (menu.children) {
            return (
              <Menu key={menu.id}>
                <Menu.Target>
                  <NavLink
                    className={classes.navLink}
                    classNames={{ label: classes.navLinkParentLabel }}
                    component="button"
                    label={menu.label}
                    rightSection={
                      <CaretDown
                        color={getThemeColor(theme.primaryColor, theme)}
                        size={16}
                      />
                    }
                  />
                </Menu.Target>
                <Menu.Dropdown className={classes.dropdown}>
                  {recursiveNavLinks(
                    menu.children,
                    navLinkComponent,
                    classes.navLink as string,
                  )}
                </Menu.Dropdown>
              </Menu>
            );
          }
          return (
            <NavLink
              key={menu.id}
              className={classes.navLink}
              classNames={{ label: classes.navLinkLabel }}
              component={navLinkComponent as 'symbol'}
              href={menu.url}
              label={menu.label}
            />
          );
        })
      )}
    </>
  );
}
