import type { Meta, StoryObj } from '@storybook/react';

import { iconsElements } from '../../../icons';

import { ActionIcon as Cmp } from './ActionIcon';

const meta = {
  argTypes: {
    children: {
      control: 'select',
      mapping: iconsElements,
      options: Object.keys(iconsElements),
    },
  },
  component: Cmp,
  title: '2-mantine/Buttons/ActionIcon',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const ActionIcon: IStory = {
  args: {
    children: iconsElements.Activity,
  },
};
