import type { Meta, StoryObj } from '@storybook/react';

import { LanguageMenu as Cmp } from './LanguageMenu';
import { languages } from './LanguageMenu.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/LanguageMenu',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const LanguageMenu: IStory = {
  args: {
    defaultCurrent: 'FR',
    languages,
    maxButtonItems: 0,
    squareFormat: false,
  },
};
