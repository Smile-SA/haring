import type { Meta, StoryObj } from '@storybook/react';

import { SwitchableView as Cmp } from './SwitchableView';
import { views } from './SwitchableView.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/SwitchableView',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const SwitchableView: IStory = {
  args: {
    topBarLeft: <span>TopBarLeft...</span>,
    topBarRight: <span>TopBarRight...</span>,
    views,
  },
};
