import type { IActionListAction } from '../ActionList/ActionList';
import type { Meta, StoryObj } from '@storybook/react';

import {
  actionRowOverflowActionsMock,
  actionRowOverflowSelectedMock,
} from '../ActionList/ActionList.mock';

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
    actions: actionRowOverflowActionsMock as IActionListAction<
      Record<string, unknown>
    >[],
    maxVisibleActions: 2,
    selectedElements: actionRowOverflowSelectedMock,
    selectedElementsLabel: actionBarLabelMock,
  },
};
