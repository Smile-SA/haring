import type { Meta, StoryObj } from '@storybook/react';

import { BitByteConverter as Cmp } from './BitByteConverter';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/BitByteConverter',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const BitByteConverter: IStory = {
  args: {
    base: 1000,
    children: '121212',
  },
};
