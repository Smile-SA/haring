import type { Meta, StoryObj } from '@storybook/react';

import { primaryTheme } from '@smile/react-front-kit-shared';
import { useStorybookArgsConnect } from '@smile/react-front-kit-shared/storybook-utils';
import { action } from '@storybook/addon-actions';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import { Header as Cmp } from './Header';
import {
  childrenMock,
  leftContentMock,
  rightContentMobileMock,
  rightContentMock,
} from './Header.mock';

const meta = {
  argTypes: {
    children: {
      control: false,
    },
    childrenComponent: {
      control: 'text',
    },
    left: {
      control: false,
    },
    right: {
      control: false,
    },
  },
  component: Cmp,
  decorators: [
    function Component(Story, ctx) {
      const args = useStorybookArgsConnect(ctx.args, {
        onSearchChange: 'searchValue',
      });
      return <Story args={{ ...args }} />;
    },
  ],
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
    children: childrenMock(false),
    childrenComponent: 'nav',
    hasResponsiveMode: true,
    height: 90,
    left: leftContentMock,
    mobileProps: {
      children: childrenMock(true),
      right: rightContentMobileMock,
    },
    onSearchSubmit: action('search input submitted'),
    right: rightContentMock,
    searchTheme: primaryTheme,
    searchValue: '',
    withBorder: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('search'));
    await expect(canvas.getByTestId('searchBar')).toBeInTheDocument();
  },
};
