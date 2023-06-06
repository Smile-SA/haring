import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  component: Button,
  tags: ['autodocs'],
  title: 'Example/Button',
} satisfies Meta<typeof Button>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Story: IStory = {
  args: {
    label: 'Button',
    primary: false,
    size: 'medium',
  },
};
