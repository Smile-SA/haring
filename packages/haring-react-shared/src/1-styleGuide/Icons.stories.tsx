import type { Icon, IconProps } from '@phosphor-icons/react';
import type { Meta, StoryObj } from '@storybook/react';
import type { ReactElement } from 'react';

import { Center, Grid, Text } from '@mantine/core';

import { customIcons, icons, phosphorIcons } from '../storybook-utils';

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
  title: '1-StyleGuide/Icons',
} satisfies Meta<typeof icons.Activity>;

export default meta;
type IStory = StoryObj<typeof meta>;

function render(icons: Record<string, Icon>) {
  return function Render(props: IconProps): ReactElement {
    return (
      <Grid>
        {Object.entries(icons).map(([key, IconCmp]) => {
          return (
            <Grid.Col key={key} span={1} title={key}>
              <Center style={{ flexDirection: 'column' }}>
                <Text fz="xs" lineClamp={1} style={{ maxWidth: '100%' }}>
                  {key}
                </Text>
                <IconCmp {...props} />
              </Center>
            </Grid.Col>
          );
        })}
      </Grid>
    );
  };
}

export const CustomIcons: IStory = {
  args: {
    color: '#000',
    mirrored: false,
    size: 32,
    weight: 'regular',
  },
  render: render(customIcons),
};

export const PhosphorIcons: IStory = {
  args: {
    color: '#000',
    mirrored: false,
    size: 32,
    weight: 'regular',
  },
  render: render(phosphorIcons),
};
