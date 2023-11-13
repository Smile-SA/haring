import type { Meta, StoryObj } from '@storybook/react';

import { Filters as Cmp } from './Filters';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/Filters',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Filters: IStory = {
  args: {},
};
