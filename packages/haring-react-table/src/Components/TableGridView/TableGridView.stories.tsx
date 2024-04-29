import type { Meta, StoryObj } from '@storybook/react';

import { TableGridView as Cmp } from './TableGridView';
import { tableGridViewProps } from './TableGridView.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/TableGridView',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const TableGridView: IStory = {
  args: { ...tableGridViewProps },
};
