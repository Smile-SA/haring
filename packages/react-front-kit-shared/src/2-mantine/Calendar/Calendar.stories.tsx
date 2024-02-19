import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '@mantine/core';
import { Calendar as MantineCalendar } from '@mantine/dates';

const meta = {
  component: MantineCalendar,
  title: '2-mantine/Calendar',
} satisfies Meta<typeof MantineCalendar>;

export default meta;
type IStory = Omit<StoryObj<typeof meta>, 'args'>;

export const Calendar: IStory = {
  render: () => (
    <Card p="24px 32px" radius="16px" w="fit-content">
      <MantineCalendar hideOutsideDates />
    </Card>
  ),
};
