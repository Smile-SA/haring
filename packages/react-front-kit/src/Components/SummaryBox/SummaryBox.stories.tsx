import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '@mantine/core';

import { SummaryBox as Cmp } from './SummaryBox';
import {
  actionRightMock,
  childrenExampleMock,
  defaultSummaryBoxMock,
  leftMock,
  otherChildrenExampleMock,
  otherTitleMock,
  otherTopMock,
  rightMock,
  titleMock,
  topMock,
} from './SummaryBox.mock';

const meta = {
  component: Cmp,
  decorators: [
    function Component(Story, ctx) {
      return (
        <Container bg="white" p="1rem" size="400px">
          <Story args={{ ...ctx.args }} />
        </Container>
      );
    },
  ],
  tags: ['autodocs'],
  title: '3-custom/Components/SummaryBox',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const SummaryBox: IStory = {
  args: defaultSummaryBoxMock,
};

export const ChildrenExample: IStory = {
  args: {
    children: childrenExampleMock,
    titleNode: titleMock,
    topNode: topMock,
    topNodeGroupProps: { mb: 12 },
  },
};

export const SimpleRightNodeExample: IStory = {
  args: {
    pb: 24,
    rightNode: rightMock,
    titleNode: titleMock,
  },
};

export const ActionRightNodeExample: IStory = {
  args: {
    children: otherChildrenExampleMock,
    rightNode: actionRightMock,
    rightNodeStackProps: { justify: 'center', style: { minWidth: 70 } },
    titleNode: titleMock,
    topNode: topMock,
    topNodeGroupProps: { mb: 12 },
  },
};

export const LeftNodeExample: IStory = {
  args: {
    leftNode: leftMock,
    titleNode: otherTitleMock,
    topNode: otherTopMock,
  },
};
