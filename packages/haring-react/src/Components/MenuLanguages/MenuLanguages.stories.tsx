import type { Meta, StoryObj } from '@storybook/react';

import { MenuLanguages as Cmp } from './MenuLanguages';
import { languages } from './MenuLanguages.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/MenuLanguages',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const MenuLanguages: IStory = {
  args: {
    defaultCurrent: 'FR',
    languages,
    maxButtonItems: 0,
    squareFormat: false,
  },
};
