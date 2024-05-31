import type { Meta, StoryObj } from '@storybook/react';

import { LanguageMenu as Cmp } from './LanguageMenu';
import { languages } from './LanguageMenu.mock';

const meta = {
  argTypes: {
    maxVisibleButtons: {
      control: 'number',
      description:
        'If there are more (>) items than this amount, all the items will be displayed as a dropdown instead of buttons',
      type: { name: 'number' },
    },
  },
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
    maxVisibleButtons: 0,
    squareFormat: false,
  },
};
