import type { Meta, StoryObj } from '@storybook/react';

import { ButtonsListOrDropdown as Cmp } from './ButtonsListOrDropdown';

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
    items: [
      { label: 'FR', value: 'FR' },
      { label: 'EN', value: 'EN' },
      { label: 'ES', value: 'ES' },
    ],
  },
};
