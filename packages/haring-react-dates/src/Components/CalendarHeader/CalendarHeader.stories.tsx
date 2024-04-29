import type { ICalendarHeaderClickType } from './CalendarHeader';
import type { CalendarLevel } from '@mantine/dates/lib/types/GeneralTypes';
import type { Meta, StoryObj } from '@storybook/react';

import { Badge, Button, Card, Group, Text } from '@mantine/core';
import { CardHeader } from '@smile/haring-react';
import { useStorybookArgsConnect } from '@smile/haring-react-shared/storybook-utils';
import { action } from '@storybook/addon-actions';

import { CalendarHeader as Cmp } from './CalendarHeader';

const meta = {
  argTypes: {
    level: {
      control: 'select',
      defaultValue: 'decade',
      options: ['month', 'year', 'decade'],
    },
  },
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/CalendarHeader',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const CalendarHeader: IStory = {
  args: {
    date: new Date(),
    label: 'August 2024',
    level: 'month',
    onDateClick: action('onDateClick'),
    onNext: action('onNext'),
    onPrevious: action('onPrevious'),
  },
};

export const InCardHeader: IStory = {
  args: {
    date: new Date(),
    label: '2024',
    level: 'year',
    onDateClick: action('onDateClick'),
    onNext: action('onNext'),
    onPrevious: action('onPrevious'),
  },
  render: (args) => (
    <div>
      <Card padding={0} radius="lg" shadow="sm" withBorder>
        <Card.Section>
          <CardHeader>
            <Cmp {...args} />
          </CardHeader>
        </Card.Section>
        <Card.Section m="24px 32px">
          <Group justify="apart" mb="xs" mt="md">
            <Text fw={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text color="dimmed" size="sm">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button
            color="blue"
            fullWidth
            mb="xl"
            mt="md"
            radius="md"
            variant="light"
          >
            Book classic tour now
          </Button>
        </Card.Section>
      </Card>
    </div>
  ),
};

function renderLabelMock(date: Date, level: CalendarLevel): string {
  switch (level) {
    case 'decade': {
      const decade = Math.floor(date.getFullYear() / 10) * 10;
      return `${decade} - ${decade + 9}`;
    }
    case 'year':
      return date.getFullYear().toString();
    case 'month':
      return date.toLocaleString('en-GB', { month: 'long', year: 'numeric' });
    default:
      return '';
  }
}

function renderLevelMock(level: ICalendarHeaderClickType): CalendarLevel {
  action('onDateClick');
  return level !== 'day' ? level : 'month';
}

export const LevelSwitchingExample: IStory = {
  args: {
    date: new Date(),
    label: renderLabelMock(new Date(), 'decade'),
    level: 'decade',
    onNext: action('onNext'),
    onPrevious: action('onPrevious'),
  },
  decorators: [
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    (Story, ctx) => {
      const args = useStorybookArgsConnect(ctx.args, {
        onDateClick: (_, date, level) => ({
          date: date as Date,
          label: renderLabelMock(
            date as Date,
            renderLevelMock(level as ICalendarHeaderClickType),
          ),
          level: renderLevelMock(level as ICalendarHeaderClickType),
        }),
      });
      return <Story args={{ ...args }} />;
    },
  ],
};
