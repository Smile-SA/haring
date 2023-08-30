import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumbs as Cmp } from './Breadcrumbs';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/Breadcrumbs',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const Breadcrumbs: IStory = {
  args: {
    separator: null,
    // eslint-disable-next-line sort-keys
    children: null,
  },
};
