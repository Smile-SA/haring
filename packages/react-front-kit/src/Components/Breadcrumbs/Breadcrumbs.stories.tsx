import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumbs as Cmp } from './Breadcrumbs';

const meta = {
  argTypes: {
    children: {
      control: false,
    },
  },
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/Breadcrumbs',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Breadcrumbs: IStory = {
  args: {
    children: [
      <a key={1} data-testid="Breadcrumbs-first-element" href="test">
        test string
      </a>,
      <a key={2} data-testid="Breadcrumbs-second-element" href="test">
        another string
      </a>,
      <a key={3} data-testid="Breadcrumbs-last-element" href="test">
        a slightly longer string
      </a>,
    ],
  },
};
