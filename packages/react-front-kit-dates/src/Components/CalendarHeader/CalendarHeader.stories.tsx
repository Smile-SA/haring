import type { Meta, StoryObj } from '@storybook/react';

import { Badge, Button, Card, Group, Text } from '@mantine/core';
import { CardHeader } from '@smile/react-front-kit';
import { action } from '@storybook/addon-actions';

import { CalendarHeader as Cmp } from './CalendarHeader';

const meta = {
  argTypes: {
    type: {
      control: 'select',
      options: ['month', 'monthsList', 'yearsList'],
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
    label: 'August 2023',
    onDateClick: action('onDateClick'),
    onNext: action('onNext'),
    onPrevious: action('onPrevious'),
    type: 'month',
  },
};

export const InCardHeader: IStory = {
  args: {
    date: new Date(),
    label: 'August 2023',
    onDateClick: action('onDateClick'),
    onNext: action('onNext'),
    onPrevious: action('onPrevious'),
    type: 'month',
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
