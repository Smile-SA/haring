import type { Meta, StoryObj } from '@storybook/react';

import { Button, DEFAULT_THEME } from '@mantine/core';
import { useStorybookArgsConnect } from '@smile/react-front-kit-shared/storybook-utils';
import { useArgs } from '@storybook/preview-api';

import { ConfirmModal as Cmp } from './ConfirmModal';

const colorOptions = Object.keys(DEFAULT_THEME.colors);

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
    opened: { control: 'boolean' },
  },
  component: Cmp,
  decorators: [
    function Component(Story, ctx) {
      const args = useStorybookArgsConnect(ctx.args, {
        onCancel: { opened: false },
        onClose: { opened: false },
        onConfirm: { opened: false },
      });
      const [, setArgs] = useArgs();
      return (
        <>
          <Button onClick={() => setArgs({ opened: true })}>Open modal</Button>
          <Story args={{ ...args }} />
        </>
      );
    },
  ],
  tags: ['autodocs'],
  title: '3-custom/Components/ConfirmModal',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const ConfirmModal: IStory = {
  args: {
    cancelColor: 'black',
    cancelLabel: 'Cancel',
    children: 'Are you sure you want to delete this item?',
    confirmColor: 'black',
    confirmLabel: 'Remove',
    opened: false,
    title: 'Remove ?',
  },
};
