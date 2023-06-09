import type { Meta, StoryObj } from '@storybook/react';

import { HeaderSearch as Cmp } from './HeaderSearch';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/HeaderSearch',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const HeaderSearch: IStory = {
  args: {},
};
