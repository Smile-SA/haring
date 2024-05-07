import type { IActionListAction } from './ActionList';
import type { Meta, StoryObj } from '@storybook/react';

import { ActionList as Cmp } from './ActionList';
import {
  actionRowOverflowActionsMock,
  actionRowOverflowSelectedMock,
} from './ActionList.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/ActionList',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const ActionList: IStory = {
  args: {
    actions: actionRowOverflowActionsMock as IActionListAction<
      Record<string, unknown>
    >[],
    rowActionNumber: 2,
    selectedElements: actionRowOverflowSelectedMock,
  },
};
