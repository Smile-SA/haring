import type { Meta, StoryObj } from '@storybook/react';

import { IconCard as Cmp } from './IconCard';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/IconCard',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const IconCard: IStory = {
  args: {},
};
