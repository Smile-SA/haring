import type { Meta, StoryObj } from '@storybook/react';

import { TruncateStringWithEllipsis as Cmp } from './TruncateStringWithEllipsis';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/TruncateStringWithEllipsis',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const TruncateStringWithEllipsis: IStory = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
};
