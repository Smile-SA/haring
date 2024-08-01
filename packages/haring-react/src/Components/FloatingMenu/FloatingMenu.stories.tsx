import type { Meta, StoryObj } from '@storybook/react';

import { FloatingMenu as Cmp } from './FloatingMenu';
import { floatingMenuLabelMock } from './FloatingMenu.mock';

const meta = {
  component: Cmp,
  decorators: [
    (Story) => (
      <div style={{ height: '500px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: '3-custom/Components/FloatingMenu',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const FloatingMenu: IStory = {
  args: {
    items: floatingMenuLabelMock.children,
    position: 'Right',
  },
};
