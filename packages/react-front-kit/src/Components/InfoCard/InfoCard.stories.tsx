import type { Meta, StoryObj } from '@storybook/react';

import { Eye, Suitcase, User } from '@phosphor-icons/react';
import { action } from '@storybook/addon-actions';

import { InfoCard as Cmp } from './InfoCard';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/InfoCard',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const InfoCard: IStory = {
  args: {
    children: <p>Customizable content</p>,
    content: (
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
        onAction: action('onAction'),
      },
      {
        icon: <Suitcase size={20} />,
        label: '2 Lines text for example',
        onAction: action('onAction'),
      },
    ],
    motif: undefined,
    title: <h1>Jean-Michel DUPONT</h1>,
  },
};
