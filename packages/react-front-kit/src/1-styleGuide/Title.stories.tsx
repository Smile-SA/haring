import type { Meta, StoryObj } from '@storybook/react';

import { Title as MantineTitle } from '@mantine/core';

const meta = {
  title: '1-StyleGuide/Title',
} satisfies Meta;

// eslint-disable-next-line storybook/csf-component
export default meta;
type IStory = StoryObj<typeof meta>;

export const Title: IStory = {
  render: () => (
    <div>
      <MantineTitle order={1}>Title 1</MantineTitle>
      <MantineTitle order={2}>Title 2</MantineTitle>
      <MantineTitle order={3}>Title 3</MantineTitle>
    </div>
  ),
};
