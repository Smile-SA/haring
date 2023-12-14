import type { IHeaderNavMenu } from '../HeaderNav/HeaderNav';
import type { ReactElement } from 'react';

import { Avatar, Menu } from '@mantine/core';

import { DropdownButton } from '../DropdownButton/DropdownButton';
import { HeaderNav } from '../HeaderNav/HeaderNav';

export const menusMock: IHeaderNavMenu<number>[] = [
  {
    children: [
      { id: 4, label: 'Releases', url: '#' },
      { id: 5, label: 'Account', url: '#' },
      {
        children: [
          { id: 8, label: 'Wiki pages', url: '#' },
          { id: 9, label: 'Settings', url: '#' },
        ],
        id: 6,
        label: 'Upcoming releases',
        url: '#',
      },
      { id: 7, label: 'Lorem ipsum dolor', url: '#' },
    ],
    id: 1,
    label: 'Espace documentaire',
    url: '#',
  },
  { id: 2, label: 'Espace workflow', url: '#' },
  { id: 3, label: 'Archives', url: '#' },
];

export const childrenMock = (isMobile: boolean): ReactElement => {
  return <HeaderNav isMobile={isMobile} menus={menusMock} />;
};

export const leftContentMock = (
  <img alt="logo" height="58" src="./logo.svg" width="128" />
);

export const rightContentMobileMock = (
  <DropdownButton label="Mon espace">
    <Menu.Item component="a" href="#">
      Calico
    </Menu.Item>
    <Menu.Item component="a" href="#">
      Espace RH
    </Menu.Item>
    <Menu.Item component="a" href="#">
      Aventure IA
    </Menu.Item>
    <Menu.Item component="a" href="#">
      Lunette & CO
    </Menu.Item>
  </DropdownButton>
);

export const rightContentMock = (
  <>
    {rightContentMobileMock}
    <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
  </>
);
