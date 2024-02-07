import type { Meta, StoryObj } from '@storybook/react';

import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';

import { CardHeader as Cmp } from './CardHeader';
import { icon, title } from './CardHeader.mock';

const meta = {
  component: Cmp,
  decorators: [
    (Story) => (
      <div>
        <Card padding={0} radius="lg" shadow="sm" withBorder>
          <Story />
          <Card.Section>
            <Image
              alt="Norway"
              height={160}
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            />
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
  ],
  tags: ['autodocs'],
  title: '3-custom/Components/CardHeader',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const CardHeaderWithLeftSection: IStory = {
  args: {
    children: title,
    leftSection: icon,
  },
};

export const CardHeader: IStory = {
  args: {
    children: title,
  },
};
