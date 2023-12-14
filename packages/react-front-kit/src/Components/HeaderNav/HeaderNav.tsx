'use client';

import type { IMenuItem } from '../SidebarMenu/SidebarMenu';
import type { ElementType, ReactElement, ReactNode } from 'react';

import { Menu, NavLink, useMantineTheme } from '@mantine/core';
import { CaretDown } from '@phosphor-icons/react';

import { SidebarMenu } from '../SidebarMenu/SidebarMenu';

import { useStyles } from './HeaderNav.style';

function recursiveNavLinks<T extends number | string>(
  menus: IHeaderNavMenu<T>[],
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

export interface IHeaderNavMenu<T extends number | string>
  extends IMenuItem<T> {
  children?: IHeaderNavMenu<T>[];
  url?: string;
}

export interface IHeaderNavProps<T extends number | string> {
  isMobile?: boolean;
  menus: IHeaderNavMenu<T>[];
  navLinkComponent?: ElementType;
}

export function HeaderNav<T extends number | string>(
  props: IHeaderNavProps<T>,
): ReactElement {
  const { menus, isMobile = false, navLinkComponent = 'a' } = props;
  const theme = useMantineTheme();
  const { classes } = useStyles();

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
                      <CaretDown color={theme.fn.primaryColor()} size={16} />
                    }
                  />
                </Menu.Target>
                <Menu.Dropdown className={classes.dropdown}>
                  {recursiveNavLinks(
                    menu.children,
                    navLinkComponent,
                    classes.navLink,
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
