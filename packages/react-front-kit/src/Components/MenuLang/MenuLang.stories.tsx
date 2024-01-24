import type { Meta, StoryObj } from '@storybook/react';

import { MenuLang as Cmp } from './MenuLang';
import { languages } from './MenuLang.mock';

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
    languages,
    maxButtonItems: 0,
    squareFormat: false,
  },
};
