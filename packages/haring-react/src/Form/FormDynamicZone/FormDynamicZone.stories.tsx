import type { IExampleBlock } from './FormDynamicZone.mock';
import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { FormDynamicZone as Cmp } from './FormDynamicZone';
import { availableBlocksMock, blocksMock } from './FormDynamicZone.mock';

const meta = {
  component: Cmp<IExampleBlock>,
  tags: ['autodocs'],
  title: '3-custom/Form/FormDynamicZone',
} satisfies Meta<typeof Cmp<IExampleBlock>>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const FormDynamicZone: IStory = {
  args: {
    availableBlocks: availableBlocksMock,
    blocksArray: blocksMock,
    onAppendUpdate: action('append'),
    onRemoveUpdate: action('remove'),
    onSwapUpdate: action('swap'),
    onToggleUpdate: action('toggle'),
  },
};

export const CustomInternalProps: IStory = {
  args: {
    availableBlocks: availableBlocksMock,
    blocksArray: blocksMock,
    internalDynamicZoneProps: {
      internalBlockComponentProps: {
        headerActionListProps: {
          actionIconDefaultProps: {
            color: 'white',
            variant: 'subtle',
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
    },
    onAppendUpdate: action('append'),
    onRemoveUpdate: action('remove'),
    onSwapUpdate: action('swap'),
    onToggleUpdate: action('toggle'),
  },
};
