import type { Meta, StoryObj } from '@storybook/react';

import {
  iconsElements,
  sleep,
} from '@smile/react-front-kit-shared/storybook-utils';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import { CollapseButton as Cmp } from './CollapseButton';
import { childrenMock, otherChildrenMock } from './CollapseButton.mock';

const meta = {
  argTypes: {
    id: {
      control: 'text',
    },
    indentation: {
      control: 'select',
      options: ['line', 'simple'],
    },
    label: {
      control: 'text',
    },
    leftSection: {
      control: 'select',
      mapping: iconsElements,
      options: Object.keys(iconsElements),
    },
  },
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/CollapseButton',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const CollapseButton: IStory = {
  args: {
    children: childrenMock,
    fullWidth: true,
    id: '',
    indentation: 'simple',
    isOpenOnSelect: false,
    label: 'Home',
    leftSection: iconsElements.HouseLine,
    level: 0,
    radius: 0,
    selected: false,
    variant: 'white',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('content')).not.toBeVisible();
    await userEvent.click(canvas.getByTestId('toggle'));
    await sleep(200);
    await expect(canvas.getByTestId('content')).toBeVisible();
  },
};

export const Nested: IStory = {
  args: {
    children: otherChildrenMock,
    fullWidth: true,
    id: '',
    indentation: 'line',
    isOpenOnSelect: false,
    label: 'Pull Requests',
    leftSection: iconsElements.User,
    level: 0,
    radius: 0,
    selected: false,
  },
};

export const WithLink: IStory = {
  args: {
    children: childrenMock,
    component: 'a',
    componentProps: { href: '#' },
    fullWidth: true,
    id: '',
    isOpenOnSelect: true,
    label: 'Home',
    leftSection: iconsElements.HouseLine,
    level: 0,
    radius: 0,
    selected: false,
    variant: 'white',
  },
};
