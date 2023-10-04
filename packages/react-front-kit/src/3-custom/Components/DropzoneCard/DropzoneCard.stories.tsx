import type { Meta, StoryObj } from '@storybook/react';

import { Eye, Suitcase, User } from '@phosphor-icons/react';
import { action } from '@storybook/addon-actions';

import { DropzoneCard as Cmp } from './DropzoneCard';

const meta = {
  argTypes: {
    defaultMotifOpacity: {
      control: { max: 1, min: 0, step: 0.1, type: 'number' },
    },
  },
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/DropzoneCard',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const DropzoneCard: IStory = {
  args: {
    cards: [
      {
        image: <User color="#0B7285" size={20} />,
        onAction: (): void => {
          action('Click on first card');
        },
        title: 'Individual contract',
      },
      {
        image: <Suitcase color="#0B7285" size={20} />,
        onAction: (): void => {
          action('Click on second card');
        },
        title: '2 Lines text for example',
      },
    ],
    cardsColor: '',
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
    defaultMotifColor: '',
    defaultMotifOpacity: '',
    dropZone: false,
    motifVisible: true,
    title: <h1>Jean-Michel DUPONT</h1>,
  },
};
