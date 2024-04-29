import type { Meta, StoryObj } from '@storybook/react';

import { Text as MantineText } from '@mantine/core';

const meta = {
  title: '1-StyleGuide/Text',
} satisfies Meta;

// eslint-disable-next-line storybook/csf-component
export default meta;
type IStory = StoryObj<typeof meta>;

export const Text: IStory = {
  render: () => (
    <div>
      <MantineText fz="xs">Extra small text</MantineText>
      <MantineText fz="sm">Small text</MantineText>
      <MantineText fz="md">Default text</MantineText>
      <MantineText fz="lg">Large text</MantineText>
      <MantineText fz="xl">Extra large text</MantineText>
    </div>
  ),
};
