import type { IActionBarAction } from './ActionBar';
import type { Meta, StoryObj } from '@storybook/react';

import { ActionBar as Cmp } from './ActionBar';
import {
  actionBarActionsMock,
  actionBarLabelMock,
  actionBarSelectedMock,
} from './ActionBar.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/ActionBar',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const ActionBar: IStory = {
  args: {
    actions: actionBarActionsMock as IActionBarAction<
      Record<string, unknown>
    >[],
    selectedElements: actionBarSelectedMock,
    selectedElementsLabel: actionBarLabelMock,
  },
};
