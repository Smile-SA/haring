import type { IActionRowOverflowAction } from './ActionRowOverflow';
import type { Meta, StoryObj } from '@storybook/react';

import { ActionRowOverflow as Cmp } from './ActionRowOverflow';
import {
  actionRowOverflowActionsMock,
  actionRowOverflowSelectedMock,
} from './ActionRowOverflow.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/ActionRowOverflow',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const ActionRowOverflow: IStory = {
  args: {
    actions: actionRowOverflowActionsMock as IActionRowOverflowAction<
      Record<string, unknown>
    >[],
    rowActionNumber: 2,
    selectedElements: actionRowOverflowSelectedMock,
  },
};
