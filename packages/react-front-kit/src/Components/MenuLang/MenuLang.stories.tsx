import type { Meta, StoryObj } from '@storybook/react';

import { MenuLang as Cmp } from './MenuLang';
import { langs } from './MenuLang.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/MenuLang',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const MenuLang: IStory = {
  args: {
    defaultCurrent: 'FR',
    langs,
    maxButtonItems: 0,
    squareFormat: false,
  },
};
