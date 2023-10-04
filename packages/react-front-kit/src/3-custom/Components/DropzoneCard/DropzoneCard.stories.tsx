import type { Meta, StoryObj } from '@storybook/react';

import { Eye, Suitcase, User } from '@phosphor-icons/react';
import { action } from '@storybook/addon-actions';

import { DropzoneCard as Cmp } from './DropzoneCard';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/DropzoneCard',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const DropzoneCard: IStory = {
  args: {
    children: (
      <p
        style={{
          cursor: 'pointer',
          display: 'flex',
          fontWeight: 600,
          margin: '0',
          verticalAlign: 'center',
        }}
      >
        <Eye size={18} style={{ margin: 'auto 10px auto 0' }} weight="bold" />
        View the folder properties
      </p>
    ),
    contentItems: [
      {
        icon: <User size={20} />,
        label: 'Individual contract',
        onAction: (): void => {
          action('Click on first card');
        },
      },
      {
        icon: <Suitcase size={20} />,
        label: '2 Lines text for example',
        onAction: (): void => {
          action('Click on second card');
        },
      },
    ],
    motif: undefined,
    title: <h1>Jean-Michel DUPONT</h1>,
  },
};
