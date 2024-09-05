import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { DynamicZone as Cmp } from './DynamicZone';
import { dynamicZoneBlocks, dynamicZoneButtons } from './DynamicZone.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Form/DynamicZone',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const DynamicZone: IStory = {
  args: {
    blockOptions: dynamicZoneButtons,
    blocks: dynamicZoneBlocks,
    buttonsText: 'Ajouter un block',
    internalBlockCardProps: {
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
