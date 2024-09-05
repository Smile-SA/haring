import type { IThumbnail } from '../../types';
import type { Meta, StoryObj } from '@storybook/react';

import { ActionList as Cmp } from './ActionList';
import {
  actionRowOverflowActionsMock,
  actionRowOverflowSelectedMock,
} from './ActionList.mock';

const meta = {
  argTypes: {
    maxVisibleActions: {
      control: 'number',
      description:
        'If there are more (>) actions than this amount, the extra actions will be displayed in the overflow menu',
      type: { name: 'number' },
    },
  },
  component: Cmp<IThumbnail>,
  tags: ['autodocs'],
  title: '3-custom/Components/ActionList',
} satisfies Meta<typeof Cmp<IThumbnail>>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const ActionList: IStory = {
  args: {
    actions: actionRowOverflowActionsMock,
    maxVisibleActions: 2,
    selectedElements: actionRowOverflowSelectedMock,
  },
};
