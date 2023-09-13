import type { Meta, StoryObj } from '@storybook/react';

import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import { iconsElements } from '../../../icons';
import { sleep } from '../../../utils/storybook';

import { CollapseButton as Cmp } from './CollapseButton';

const meta = {
  argTypes: {
    leftIcon: {
      control: 'select',
      mapping: iconsElements,
      options: Object.keys(iconsElements),
    },
  },
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/CollapseButton',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const CollapseButton: IStory = {
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
varius bibendum dui non imperdiet. Donec vehicula fringilla lorem
vitae rutrum. Etiam malesuada ullamcorper aliquam. Vestibulum ante
ipsum primis in faucibus orci luctus et ultrices posuere cubilia
curae; Cras elit lacus, viverra vitae risus et, pharetra tincidunt
felis. Aliquam erat volutpat. In vitae nibh eu turpis commodo
luctus vitae id libero. Curabitur eget nunc volutpat, luctus quam
rutrum, ultricies tellus. Integer diam nulla, vestibulum id enim
quis, molestie luctus magna. Phasellus et rhoncus augue, id
maximus mi. Vivamus consequat quam tristique ex laoreet, ut
eleifend eros sodales. Cras bibendum enim dolor, id rutrum urna
vestibulum non.`,
    fullWidth: true,
    label: 'Home',
    leftIcon: iconsElements.HouseLine,
    level: 0,
    line: false,
    radius: 0,
    variant: 'white',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('content')).not.toBeVisible();
    await userEvent.click(canvas.getByTestId('toggle'));
    await sleep(200);
    await expect(canvas.getByTestId('content')).toBeVisible();
  },
};

export const Nested: IStory = {
  args: {
    children: (
      <>
        <Cmp label="Dashboard" level={1}>
          <Cmp label="Wiki pages" level={2} />
          <Cmp label="Settings" level={2} />
        </Cmp>
        <Cmp label="Home" level={1} />
      </>
    ),
    fullWidth: true,
    label: 'Pull Requests',
    leftIcon: iconsElements.User,
    level: 0,
    line: true,
    radius: 0,
  },
};
