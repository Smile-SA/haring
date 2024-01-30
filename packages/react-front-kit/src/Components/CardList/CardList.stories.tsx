import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '@mantine/core';

import { CardHeader } from '../CardHeader/CardHeader';
import { childrenExampleMock } from '../SummaryBox/SummaryBox.mock';

import { CardList as Cmp } from './CardList';

const summaryboxs = [
  childrenExampleMock,
  childrenExampleMock,
  childrenExampleMock,
  childrenExampleMock,
  childrenExampleMock,
];

const texts = ['Hello-world', 'Hello-world', 'Hello-world'];

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
    h: '200px',
    separator: true,
  },
};

export const CardListWithTexts: IStory = {
  args: {
    children: texts,
    h: '70px',
  },
  render: ({ ...props }) => (
    <Card p={0}>
      <Card.Section>
        <CardHeader>
          <h1 style={{ margin: '24px', marginBottom: 0 }}>Titre</h1>
        </CardHeader>
      </Card.Section>
      <Cmp {...props} />
    </Card>
  ),
};
