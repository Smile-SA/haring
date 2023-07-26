import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, Menu } from '@mantine/core';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import { primaryTheme } from '../../../theme';
import { DropdownButton } from '../DropdownButton/DropdownButton';

import { Header as Cmp } from './Header';

const meta = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    left: {
      table: {
        disable: true,
      },
    },
    right: {
      table: {
        disable: true,
      },
    },
    searchTheme: {
      table: {
        disable: true,
      },
    },
  },
  component: Cmp,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: '3-custom/Components/Header',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Header: IStory = {
  args: {
    children: (
      <>
        <a href="#">Espace documentaire</a>
        <a href="#">Espace workflow</a>
        <a href="#">Archives</a>
      </>
    ),
    childrenComponent: 'nav',
    height: 90,
    left: <img alt="logo" height="58" src="./logo.svg" width="128" />,
    right: (
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
        <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
      </>
    ),
    searchTheme: primaryTheme,
    withBorder: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('search'));
    await expect(canvas.getByTestId('searchBar')).toBeInTheDocument();
  },
};
