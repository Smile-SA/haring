import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { Zone as Cmp } from './Zone';
import { withActionsMock, zoneBlocksMock, zoneButtonsMock } from './Zone.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/Zone',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Zone: IStory = {
  args: {
    blockOptions: zoneButtonsMock,
    blocks: zoneBlocksMock,
    buttonsText: 'Ajouter un block',
    onAppendBlock: action('onAppendBlock, id'),
    onRenderBlockContent: (_b, index) => <input key={index} />,
    onToggleBlock: action('onToggleBlock'),
  },
};

export const ZoneWithActions: IStory = {
  args: {
    blockOptions: zoneButtonsMock,
    blocks: withActionsMock,
    buttonsText: 'Ajouter un block',
    onAppendBlock: action('onAppendBlock, id'),
    onRenderBlockContent: (_b, index) => <input key={index} />,
    onToggleBlock: action('onToggleBlock'),
  },
};

export const CustomInternalProps: IStory = {
  args: {
    blockOptions: zoneButtonsMock,
    blocks: withActionsMock,
    internalBlockComponentProps: {
      headerActionListProps: {
        actionIconDefaultProps: {
          color: 'white',
        },
      },
      headerCardSectionProps: {
        bg: 'cadetblue',
        c: 'white',
      },
      toggleComponentProps: {
        actionIconProps: { color: 'white', variant: 'subtle' },
      },
    },
    onAppendBlock: action('onAppendBlock, id'),
    onRenderBlockContent: (_b, index) => <input key={index} />,
    onToggleBlock: action('onToggleBlock'),
  },
};
