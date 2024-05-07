import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from '@mantine/core';

import { menusMock } from '../Header/Header.mock';

import { HeaderMenu as Cmp } from './HeaderMenu';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/HeaderMenu',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const HeaderMenu: IStory = {
  args: {
    menus: menusMock,
  },
  render: ({ ...props }) => (
    <Flex>
      <Cmp {...props} />
    </Flex>
  ),
};

export const Mobile: IStory = {
  args: {
    isMobile: true,
    menus: menusMock,
  },
};
