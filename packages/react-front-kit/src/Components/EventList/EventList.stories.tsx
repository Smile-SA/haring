import type { Meta, StoryObj } from '@storybook/react';

import { EventList as Cmp } from './EventList';
import { eventMock } from './EventList.mock';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/EventList',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const EventList: IStory = {
  args: {
    color: eventMock.color,
    description: eventMock.description,
    details: eventMock.details,
    title: eventMock.title,
  },
};
