import type { Meta, StoryObj } from '@storybook/react';

import { useStorybookArgsConnect } from '@smile/react-front-kit-shared/storybook-utils';
import { action } from '@storybook/addon-actions';

import {
  childrenMock,
  leftContentMock,
  rightContentMobileMock,
} from '../Header/Header.mock';

import { HeaderMobile as Cmp } from './HeaderMobile';

const meta = {
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
  title: '3-custom/Components/HeaderMobile',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const HeaderMobile: IStory = {
  args: {
    children: childrenMock(true),
    height: 90,
    left: leftContentMock,
    onSearchSubmit: action('search input submitted'),
    right: rightContentMobileMock,
    searchValue: '',
    withBorder: false,
  },
};
