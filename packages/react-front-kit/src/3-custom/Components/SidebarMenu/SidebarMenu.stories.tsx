import type { Meta, StoryObj } from '@storybook/react';

import { Chat, HouseLine, Star, User } from '@phosphor-icons/react';

import { SidebarMenu as Cmp } from './SidebarMenu';

const meta = {
  component: Cmp,
  tags: ['autodocs'],
  title: '3-custom/Components/SidebarMenu',
} satisfies Meta<typeof Cmp>;

export default meta;
type IStory = StoryObj<typeof meta>;

export const SidebarMenu: IStory = {
  args: {
    menu: [
      { children: [{ label: 'Home' }], label: 'Home', leftIcon: <HouseLine /> },
      {
        children: [{ label: 'Security' }],
        label: 'Security',
        leftIcon: <Chat />,
      },
      {
        children: [
          { label: 'Release' },
          { children: [{ label: 'Account' }], label: 'Account' },
          { label: 'Upcoming release' },
        ],
        label: 'Dashboard',
        leftIcon: <Star />,
      },
      { label: 'Open Issues', leftIcon: <HouseLine /> },
      {
        children: [
          {
            children: [{ label: 'Wiki pages' }, { label: 'Settings' }],
            label: 'Dashboard',
          },
          { label: 'Home' },
        ],
        label: 'Pull Requests',
        leftIcon: <User />,
      },
    ],
  },
};
