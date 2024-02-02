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
    children: summaryboxs,
    gap: 'xl',
    h: '200px',
    separator: true,
  },
};

export const CardListWithOneSummaryBox: IStory = {
  args: {
    children: childrenExampleMock,
    gap: 'xl',
    h: '110px',
    separator: true,
  },
};

export const CardListWithTexts: IStory = {
  args: {
    children: texts,
    gap: 'xl',
    h: '70px',
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
