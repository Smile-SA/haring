import type { Meta, StoryObj } from '@storybook/react';

import { Eye, Suitcase, User } from '@phosphor-icons/react';
import { action } from '@storybook/addon-actions';

import { InfoBox as Cmp } from './InfoBox';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/InfoBox',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const InfoBox: IStory = {
  args: {
    children: <p>Customizable content</p>,
    collapse: true,
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
        arialLabel: 'user button',
        icon: <User />,
        label: 'Individual contract',
        onAction: action('onAction'),
      },
      {
        arialLabel: 'suitcase button',
        icon: <Suitcase />,
        label: '2 Lines text for example',
        onAction: action('onAction'),
      },
    ],
    motif: undefined,
    title: <h1 style={{ marginTop: 0 }}>Jean-Michel DUPONT</h1>,
  },
};
