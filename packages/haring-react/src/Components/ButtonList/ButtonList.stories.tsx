import type { Meta, StoryObj } from '@storybook/react';

import { ButtonList as Cmp } from './ButtonList';
import { items } from './ButtonList.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/ButtonList',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const ButtonList: IStory = {
  args: {
    defaultCurrent: 'FR',
    items,
    maxButtonItems: 4,
  },
};
