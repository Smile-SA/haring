import type { IMenuItem } from './SidebarMenu';

import { Chat, HouseLine, Star, User } from '@phosphor-icons/react';

export const menu: IMenuItem[] = [
  {
    children: [{ id: 0, label: 'Home' }],
    id: 1,
    label: 'Home',
    leftIcon: <HouseLine />,
  },
  {
    children: [{ id: 2, label: 'Security' }],
    id: 3,
    label: 'Security',
    leftIcon: <Chat />,
  },
  {
    children: [
      { id: 4, label: 'Release' },
      { children: [{ id: 5, label: 'Account' }], id: 6, label: 'Account' },
      { id: 7, label: 'Upcoming release' },
    ],
    id: 8,
    label: 'Dashboard',
    leftIcon: <Star />,
  },
  { id: 9, label: 'Open Issues', leftIcon: <HouseLine /> },
  {
    children: [
      {
        children: [
          { id: 10, label: 'Wiki pages' },
          { id: 11, label: 'Settings' },
        ],
        id: 12,
        label: 'Dashboard',
      },
      { id: 13, label: 'Home' },
    ],
    id: 14,
    label: 'Pull Requests',
    leftIcon: <User />,
  },
];
