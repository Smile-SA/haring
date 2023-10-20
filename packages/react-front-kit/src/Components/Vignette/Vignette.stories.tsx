import type { Meta, StoryObj } from '@storybook/react';

import { Plus } from '@phosphor-icons/react';
import { action } from '@storybook/addon-actions';

import { Vignette as Cmp } from './Vignette';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/Vignette',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Vignette: IStory = {
  args: {
    action: [
      {
        icon: <Plus size="16px" />,
        label: 'Add',
        onAction: action('onAction'),
      },
    ],
    icon: <Plus size="16px" />,
    label: 'Document',
    selected: false,
  },
};
