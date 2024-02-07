import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '@mantine/core';

import { CardHeader } from '../CardHeader/CardHeader';
import { childrenExampleMock } from '../SummaryBox/SummaryBox.mock';

import { CardList as Cmp } from './CardList';

const summaryBoxesMock = [
  childrenExampleMock(1),
  childrenExampleMock(2),
  childrenExampleMock(3),
  childrenExampleMock(4),
  childrenExampleMock(5),
];

const texts = ['Hello-world', 'Hello-world', 'Hello-world'];

const meta = {
  argTypes: {
    gap: {
      control: { type: 'select' },
      options: ['xl', 'lg', 'md', 'sm', 'xs'],
    },
  },
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/CardList',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const CardListWithMultiSummaryBox: IStory = {
  args: {
    children: summaryBoxesMock,
    h: 200,
    separator: true,
  },
};

export const CardListWithOneSummaryBox: IStory = {
  args: {
    children: childrenExampleMock(),
    h: 110,
    separator: true,
  },
};

export const CardListWithTexts: IStory = {
  args: {
    children: texts,
    h: 80,
    m: '32px 3px 32px 0',
    p: 0,
    stackProps: { m: '0 32px' },
  },
  render: ({ ...props }) => (
    <Card>
      <Card.Section>
        <CardHeader>
          <h1 style={{ margin: '24px', marginBottom: 0 }}>Titre</h1>
        </CardHeader>
        <Cmp {...props} />
      </Card.Section>
    </Card>
  ),
};
