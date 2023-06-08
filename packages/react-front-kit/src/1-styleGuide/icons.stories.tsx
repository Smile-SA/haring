import type { Icon } from '@phosphor-icons/react';
import type { Meta, StoryObj } from '@storybook/react';

import { Center, Grid, Text } from '@mantine/core';
import * as icons from '@phosphor-icons/react';

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

const componentsToIgnore = ['IconBase', 'IconContext'];
export const PhosphorIcons: IStory = {
  args: {
    color: '#000',
    mirrored: false,
    size: 32,
    weight: 'regular',
  },
  render: (props) => (
    <Grid>
      {Object.entries(icons)
        .filter(([key]) => !componentsToIgnore.includes(key))
        .map(([key, IconCmp]) => {
          const IconComponent = IconCmp as Icon;
          return (
            <Grid.Col key={key} span={1} title={key}>
              <Center sx={{ flexDirection: 'column' }}>
                <Text fz="xs" lineClamp={1} sx={{ maxWidth: '100%' }}>
                  {key}
                </Text>
                <IconComponent {...props} />
              </Center>
            </Grid.Col>
          );
        })}
    </Grid>
  ),
};
