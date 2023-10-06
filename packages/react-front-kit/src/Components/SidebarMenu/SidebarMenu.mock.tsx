import type { IMenuItem } from './types';

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

export const deeplyNestedMenu: IMenuItem[] = [
  {
    children: [
      {
        children: [
          {
            children: [
              {
                children: [{ id: 16, label: 'Level 4 - A' }],
                id: 8,
                label: 'Level 3 - A',
              },
              {
                children: [{ id: 17, label: 'Level 4 - B' }],
                id: 9,
                label: 'Level 3 - B',
              },
            ],
            id: 4,
            label: 'Level 2 - A',
          },
          {
            children: [
              {
                children: [{ id: 18, label: 'Level 4 - C' }],
                id: 10,
                label: 'Level 3 - C',
              },
              {
                children: [{ id: 19, label: 'Level 4 - D' }],
                id: 11,
                label: 'Level 3 - D',
              },
            ],
            id: 5,
            label: 'Level 2 - B',
          },
        ],
        id: 2,
        label: 'Level 1 - A',
      },
      {
        children: [
          {
            children: [
              {
                children: [{ id: 20, label: 'Level 4 - E' }],
                id: 12,
                label: 'Level 3 - E',
              },
              {
                children: [{ id: 21, label: 'Level 4 - F' }],
                id: 13,
                label: 'Level 3 - F',
              },
            ],
            id: 6,
            label: 'Level 2 - C',
          },
          {
            children: [
              {
                children: [{ id: 22, label: 'Level 4 - G' }],
                id: 14,
                label: 'Level 3 - G',
              },
              {
                children: [{ id: 23, label: 'Level 4 - H' }],
                id: 15,
                label: 'Level 3 - H',
              },
            ],
            id: 7,
            label: 'Level 2 - D',
          },
        ],
        id: 3,
        label: 'Level 1 - B',
      },
    ],
    id: 0,
    label: 'Level 0 - A',
  },
  { children: [{ id: 24, label: 'Level 1 - C' }], id: 1, label: 'Level 0 - B' },
];
