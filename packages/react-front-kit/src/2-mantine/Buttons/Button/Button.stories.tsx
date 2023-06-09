import type { Meta, StoryObj } from '@storybook/react';

import { Button as Cmp } from './Button';

const meta = {
  component: Cmp,
  title: '2-mantine/Buttons/Button',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Button: IStory = {
  args: {
    children: 'Button',
    fullWidth: false,
  },
};
