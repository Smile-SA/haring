import type { Meta, StoryObj } from '@storybook/react';

import { BitConverter as Cmp } from './BitConverter';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/BitConverter',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const BitConverter: IStory = {
  args: {
    options: { locale: 'fr' },
    value: 121212,
  },
};
