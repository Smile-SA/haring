import type { Meta, StoryObj } from '@storybook/react';

import { childrenExampleMock } from '../SummaryBox/SummaryBox.mock';

import { CardList as Cmp } from './CardList';

const children = (
  <>
    {childrenExampleMock}
    {childrenExampleMock}
    {childrenExampleMock}
    {childrenExampleMock}
    {childrenExampleMock}
    {childrenExampleMock}
    {childrenExampleMock}
    {childrenExampleMock}
    {childrenExampleMock}
  </>
);

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/CardList',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const CardList: IStory = {
  args: {
    children,
  },
};
