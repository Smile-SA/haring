import type { Meta, StoryObj } from '@storybook/react';

import { ButtonListOrDropdown as Cmp } from './ButtonListOrDropdown';
import { items } from './ButtonListOrDropdown.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/ButtonListOrDropdown',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const ButtonListOrDropdown: IStory = {
  args: {
    defaultCurrent: 'FR',
    items,
    maxButtonItems: 0,
  },
};
