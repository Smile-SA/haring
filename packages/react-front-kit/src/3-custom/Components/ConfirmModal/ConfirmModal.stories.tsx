import type { Meta, StoryObj } from '@storybook/react';

import { MANTINE_COLORS } from '@mantine/styles';

import { ConfirmModal as Cmp } from './ConfirmModal';

const colorOptions = ['primary'].concat(MANTINE_COLORS);

const meta = {
  argTypes: {
    cancelColor: {
      control: 'select',
      options: colorOptions,
    },
    confirmColor: {
      control: 'select',
      options: colorOptions,
    },
    onClick: { action: 'clicked' },
    opened: { control: 'boolean' },
  },
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/ConfirmModal',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const ConfirmModal: IStory = {
  args: {
    cancelColor: 'gray',
    cancelLabel: 'Cancel',
    children: 'Are you sure you want to delete this item?',
    confirmColor: 'red',
    confirmLabel: 'Remove',
    opened: false,
    title: 'Remove ?',
  },
};
