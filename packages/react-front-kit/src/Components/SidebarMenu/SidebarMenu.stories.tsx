import type { Meta, StoryObj } from '@storybook/react';

import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import { SidebarMenu as Cmp } from './SidebarMenu';
import { deeplyNestedMenuMock, menuMock } from './SidebarMenu.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/SidebarMenu',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const SidebarMenu: IStory = {
  args: {
    component: 'nav',
    menu: menuMock,
    openedMenuIds: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByTestId('root')[0].dataset.selected).toEqual(
      'false',
    );
    await userEvent.click(canvas.getAllByTestId('select')[0]);
    await expect(canvas.getAllByTestId('root')[0].dataset.selected).toEqual(
      'true',
    );
  },
};

export const OnlyOneOpenMenu: IStory = {
  args: {
    hasOnlyOneOpenMenu: true,
    menu: deeplyNestedMenuMock,
    openedMenuIds: [0, 2],
  },
};

export const DefaultSelectedId: IStory = {
  args: {
    component: 'nav',
    defaultSelectedId: 5,
    menu: menuMock,
  },
};
