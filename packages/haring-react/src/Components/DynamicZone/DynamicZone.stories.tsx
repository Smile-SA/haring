import type { IExampleBlock } from './DynamicZone.mock';
import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { DynamicZone as Cmp } from './DynamicZone';
import {
  dynamicZoneAvailableBlocksMock,
  dynamicZoneBlocksMock,
} from './DynamicZone.mock';

const meta = {
  component: Cmp<IExampleBlock>,
  tags: ['autodocs'],
  title: '3-custom/Components/DynamicZone',
} satisfies Meta<typeof Cmp<IExampleBlock>>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const DynamicZone: IStory = {
  args: {
    availableBlocks: dynamicZoneAvailableBlocksMock,
    blocksArray: dynamicZoneBlocksMock,
    onAppendUpdate: action('append'),
    onRemoveUpdate: action('remove'),
    onSwapUpdate: action('swap'),
    onToggleUpdate: action('toggle'),
  },
};

export const CustomInternalProps: IStory = {
  args: {
    availableBlocks: dynamicZoneAvailableBlocksMock,
    blocksArray: dynamicZoneBlocksMock,
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
