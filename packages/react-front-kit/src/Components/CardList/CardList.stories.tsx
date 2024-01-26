import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';

import { childrenExampleMock } from '../SummaryBox/SummaryBox.mock';

import { CardList as Cmp } from './CardList';

function addContainer(element: ReactNode): ReactNode {
  return <div style={{ padding: '0 20px' }}>{element}</div>;
}

const summaryboxs = (
  <>
    {addContainer(childrenExampleMock)}
    {addContainer(childrenExampleMock)}
    {addContainer(childrenExampleMock)}
    {addContainer(childrenExampleMock)}
    {addContainer(childrenExampleMock)}
  </>
);

const texts = (
  <>
    {addContainer(<p>Hello-world</p>)}
    {addContainer(<p>Hello-world</p>)}
    {addContainer(<p>Hello-world</p>)}
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
    height: '500px',
    separator: true,
  },
};

export const CardListWithTexts: IStory = {
  args: {
    children: texts,
    height: '200px',
  },
};
