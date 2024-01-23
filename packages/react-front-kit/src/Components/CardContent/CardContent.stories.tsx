import type { Meta, StoryObj } from '@storybook/react';
import type { ReactElement } from 'react';

import { Container } from '@mantine/core';

import { CardContent as Cmp } from './CardContent';
import {
  childrenExampleMock,
  defaultCardContentMock,
  leftMock,
  otherTitleMock,
  otherTopMock,
  rightMock,
  titleMock,
  topMock,
} from './CardContent.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/CardContent',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const CardContent: IStory = {
  args: defaultCardContentMock,
};

const container = ({ ...props }): ReactElement => (
  <Container bg="white" size="400px">
    <Cmp {...props} />
  </Container>
);

export const ChildrenExample: IStory = {
  args: {
    children: childrenExampleMock,
    titleNode: titleMock,
    topNode: topMock,
    topNodeGroupProps: { mb: 12 },
  },
  render: ({ ...props }) => container(props),
};

export const RightNodeExample: IStory = {
  args: {
    pb: 24,
    rightNode: rightMock,
    titleNode: titleMock,
  },
  render: ({ ...props }) => container(props),
};

export const LeftNodeExample: IStory = {
  args: {
    leftNode: leftMock,
    titleNode: otherTitleMock,
    topNode: otherTopMock,
  },
  render: ({ ...props }) => container(props),
};
