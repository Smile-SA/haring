import type { Meta, StoryObj } from '@storybook/react';

import { ItemList as Cmp } from './ItemList';
import { itemsMock } from './itemList.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/ItemList',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const ItemList: IStory = {
  args: {
    h: '300px',
    items: itemsMock,
  },
};
