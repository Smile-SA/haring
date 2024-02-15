import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from '@mantine/core';
import { CardList } from '@smile/react-front-kit';

const meta = {
  argTypes: {},
  component: CardList,
  title: '2-mantine/Dashboard',
} satisfies Meta<typeof CardList>;

export default meta;
type IStory = StoryObj<typeof meta>;
export const Dashboard: IStory = {
  args: {},
  render: () => (
    <Grid>
      <Grid.Col span={{ base: 12, lg: 4, md: 6, sm: 12 }}>1</Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4, md: 6, sm: 12 }}>2</Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4, md: 6, sm: 12 }}>3</Grid.Col>
    </Grid>
  ),
};
