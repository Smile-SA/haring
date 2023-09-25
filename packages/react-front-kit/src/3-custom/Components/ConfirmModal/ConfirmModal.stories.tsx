import type { Meta, StoryObj } from '@storybook/react';

import { ConfirmModal as Cmp } from './ConfirmModal';

const meta = {
  argTypes: {
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
    cancelLabel: 'Annuler',
    children: 'Êtes-vous certain de vouloir supprimer cet élément ?',
    confirmColor: 'red',
    confirmLabel: 'Supprimer',
    onCancel: () => {
      // eslint-disable-next-line no-console
      console.log('onCancel');
    },
    onConfirm: () => {
      // eslint-disable-next-line no-console
      console.log('onConfirm');
    },
    opened: false,
    title: 'Supprimer ?',
  },
};
