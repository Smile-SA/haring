import type { Meta, StoryObj } from '@storybook/react';

import { childrenExampleMock } from '../SummaryBox/SummaryBox.mock';

import { CardList as Cmp } from './CardList';

const summaryboxs = (
  <>
    {childrenExampleMock}
    {childrenExampleMock}
    {childrenExampleMock}
    {childrenExampleMock}
    {childrenExampleMock}
  </>
);

const texts = (
  <>
    <p>Hello-world</p>
    <p>Hello-world</p>
    <p>Hello-world</p>
  </>
);

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/CardList',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const CardListWithSummaryBox: IStory = {
  args: {
    children: summaryboxs,
    h: '500px',
    p: '0px 20px',
    separator: true,
  },
};

export const CardListWithTexts: IStory = {
  args: {
    children: texts,
    h: '200px',
    p: '0px 20px',
  },
};
