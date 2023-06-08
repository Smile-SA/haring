import type { Meta, StoryObj } from '@storybook/react';

import { Input as Cmp } from './Input';

const meta = {
  component: Cmp,
  title: '2-Mantine/Inputs/Input',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Input: IStory = {};
