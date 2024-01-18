import type { Meta, StoryObj } from '@storybook/react';

import { ButtonsListOrDropdown as Cmp } from './ButtonsListOrDropdown';
import { items } from './ButtonsListOrDropdown.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/ButtonsListOrDropdown',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const ButtonsListOrDropdown: IStory = {
  args: {
    defaultCurrent: 'FR',
    displayAll: true,
    items,
  },
};
