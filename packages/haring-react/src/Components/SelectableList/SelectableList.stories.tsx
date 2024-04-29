import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { SelectableList as Cmp } from './SelectableList';
import { selectableListElementsMock } from './SelectableList.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/SelectableList',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const SelectableList: IStory = {
  args: {
    children: selectableListElementsMock,
    onSelectChange: action('Element selected'),
    selectedIndexes: [1, 2],
  },
};
