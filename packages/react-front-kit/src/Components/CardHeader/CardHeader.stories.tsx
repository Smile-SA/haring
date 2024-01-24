import type { Meta, StoryObj } from '@storybook/react';

import { CardHeader as Cmp } from './CardHeader';
import { icon, title } from './CardHeader.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/CardHeader',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const CardHeaderWithLeftSection: IStory = {
  args: {
    children: title,
    left: icon,
  },
};

export const CardHeader: IStory = {
  args: {
    children: title,
  },
};
