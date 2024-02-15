import type { Meta, StoryObj } from '@storybook/react';

import { Grid, Stack } from '@mantine/core';
import { CardList } from '@smile/react-front-kit';

import {
  cardListMock,
  cardListNotifications,
  cardListUploadMock,
  cardSimpleMock,
} from './Dashboard.mock';

const meta = {
  argTypes: {},
  component: CardList,
  title: '2-mantine/Dashboard',
} satisfies Meta<typeof CardList>;

export default meta;
type IStory = Omit<StoryObj<typeof meta>, 'args'>;
export const Dashboard: IStory = {
  render: () => (
    <Grid maw="1480px" mx="auto">
      <Grid.Col span={{ base: 12, lg: 4, xs: 6 }}>
        <Stack>
          {cardSimpleMock}
          {cardListUploadMock}
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4, xs: 6 }}>{cardListMock()}</Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4, xs: 6 }}>
        {cardListMock(false)}
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4, xs: 6 }}>
        {cardListNotifications()}
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4, xs: 6 }}>
        {cardListNotifications(false)}
      </Grid.Col>
    </Grid>
  ),
};
