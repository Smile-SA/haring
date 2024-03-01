import type { Meta, StoryObj } from '@storybook/react';

import { IconCard as Cmp } from './IconCard';
import { iconCardMock, iconCardMockWithoutTitle } from './IconCard.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/IconCard',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const IconCard: IStory = {
  args: {
    children: iconCardMock.children,
    icon: iconCardMock.icon,
    subTitle: iconCardMock.subTitle,
    title: iconCardMock.title,
  },
};

export const IconCardWithoutTitle: IStory = {
  args: {
    children: iconCardMockWithoutTitle.children,
    color: 'white',
    icon: iconCardMockWithoutTitle.icon,
  },
};
