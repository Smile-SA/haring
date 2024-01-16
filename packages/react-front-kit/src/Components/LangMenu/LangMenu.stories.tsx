import type { Meta, StoryObj } from '@storybook/react';

import { LangMenu as Cmp } from './LangMenu';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/LangMenu',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const LangMenu: IStory = {
  args: {},
};
