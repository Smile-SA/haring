import type { Meta, StoryObj } from '@storybook/react';

import { ActionIcon, Button } from '@mantine/core';

import { iconsElements } from '../../icons';
import List from '../List';

const meta = {
  argTypes: {
    color: {
      control: 'select',
      options: [
        'primary',
        'dark',
        'gray',
        'red',
        'pink',
        'grape',
        'violet',
        'indigo',
        'blue',
        'cyan',
        'teal',
        'green',
        'lime',
        'yellow',
        'orange',
      ],
    },
    disabled: {
      control: 'boolean',
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  component: Button,
  title: '2-mantine/Buttons',
} satisfies Meta<typeof Button>;

export default meta;
type IStory = StoryObj<typeof meta>;

const { Activity } = iconsElements;
export const Buttons: IStory = {
  args: {
    color: 'primary',
    disabled: false,
  },
  render: (props) => (
    <>
      <List
        Cmp={ActionIcon}
        commonProps={{ ...props, children: Activity }}
        title="ActionIcon"
        variantProps={{
          variant: [
            'outline',
            'transparent',
            'light',
            'default',
            'filled',
            'gradient',
            'subtle',
          ],
        }}
      />
      <List
        Cmp={Button}
        commonProps={{ ...props, children: 'Text' }}
        title="Button"
        variantProps={{
          variant: [
            'outline',
            'white',
            'light',
            'default',
            'filled',
            'gradient',
            'subtle',
          ],
        }}
      />
    </>
  ),
};
