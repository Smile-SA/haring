import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from '@mantine/core';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import { sleep } from '../../../utils/storybook';

import { DropdownButton as Cmp } from './DropdownButton';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/DropdownButton',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const DropdownButton: IStory = {
  args: {
    children: (
      <>
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
      </>
    ),
    label: 'Mon espace',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentElement as HTMLElement);
    await userEvent.click(canvas.getByTestId('button'));
    await sleep(200);
    await expect(canvas.getByTestId('dropdown')).toBeInTheDocument();
  },
};
