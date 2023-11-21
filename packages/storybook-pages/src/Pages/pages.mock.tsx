import { Avatar, Menu } from '@mantine/core';
import { DropdownButton } from '@smile/react-front-kit';

export const headerContent = (
  <>
    <a href="#">Espace documentaire</a>
    <a href="#">Espace workflow</a>
    <a href="#">Archives</a>
  </>
);

export const headerLeft = (
  <img alt="logo" height="58" src="./logo.svg" width="128" />
);

export const headerRight = (
  <>
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
    <Avatar
      alt="User"
      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
    />
  </>
);
