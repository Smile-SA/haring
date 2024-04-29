import type { IActionRowOverflowAction } from '../ActionRowOverflow/ActionRowOverflow';
import type { Meta, StoryObj } from '@storybook/react';

import {
  actionRowOverflowActionsMock,
  actionRowOverflowSelectedMock,
} from '../ActionRowOverflow/ActionRowOverflow.mock';

import { ActionBar as Cmp } from './ActionBar';
import { actionBarLabelMock } from './ActionBar.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/ActionBar',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const ActionBar: IStory = {
  args: {
    actions: actionRowOverflowActionsMock as IActionRowOverflowAction<
      Record<string, unknown>
    >[],
    rowActionNumber: 2,
    selectedElements: actionRowOverflowSelectedMock,
    selectedElementsLabel: actionBarLabelMock,
  },
};
