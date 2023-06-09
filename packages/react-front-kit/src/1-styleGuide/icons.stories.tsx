import type { Meta, StoryObj } from '@storybook/react';

import { Center, Grid, Text } from '@mantine/core';

import { icons } from '../icons';

const meta = {
  argTypes: {
    size: {
      control: { max: 48, min: 8, step: 1, type: 'range' },
    },
    weight: {
      control: 'select',
      options: ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'],
    },
  },
  component: icons.Activity,
  title: '1-StyleGuide/PhosphorIcons',
} satisfies Meta<typeof icons.Activity>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const PhosphorIcons: IStory = {
  args: {
    color: '#000',
    mirrored: false,
    size: 32,
    weight: 'regular',
  },
  render: (props) => (
    <Grid>
      {Object.entries(icons).map(([key, IconCmp]) => {
        return (
          <Grid.Col key={key} span={1} title={key}>
            <Center sx={{ flexDirection: 'column' }}>
              <Text fz="xs" lineClamp={1} sx={{ maxWidth: '100%' }}>
                {key}
              </Text>
              <IconCmp {...props} />
            </Center>
          </Grid.Col>
        );
      })}
    </Grid>
  ),
};
