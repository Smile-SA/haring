import type { IMenuItem } from '@smile/haring-react';
import type { ReactNode } from 'react';

export const breadcrumbsMock = [
  <a key="1" href="#">
    First level
  </a>,
  <a key="2" href="#">
    Second level
  </a>,
  <a key="3" href="#">
    Third level
  </a>,
];

export const menusMock: IMenuItem<string>[] = [
  {
    id: '1',
    label: 'Order 1',
  },
  {
    id: '2',
    label: 'Order 2',
  },
  {
    id: '3',
    label: 'Order 3',
  },
];

export interface IAgendaItemTab {
  content: ReactNode;
  id: string;
}

export interface IAgendaItemOrder {
  id: string;
  tabs: IAgendaItemTab[];
}

export const tabsMock: IAgendaItemOrder[] = [
  {
    id: '1',
    tabs: [
      {
        content: (
          <>
            <p>Content of Order 1</p>
            <p>Tab order</p>
          </>
        ),
        id: 'order',
      },
      {
        content: (
          <>
            <p>Content of Order 1</p>
            <p>Tab details</p>
          </>
        ),
        id: 'details',
      },
      {
        content: (
          <>
            <p>Content of Order 1</p>
            <p>Tab conflicts</p>
          </>
        ),
        id: 'conflicts',
      },
      {
        content: (
          <>
            <p>Content of Order 1</p>
            <p>Tab sends</p>
          </>
        ),
        id: 'sends',
      },
      {
        content: (
          <>
            <p>Content of Order 1</p>
            <p>Tab pv</p>
          </>
        ),
        id: 'pv',
      },
      {
        content: (
          <>
            <p>Content of Order 1</p>
            <p>Tab decisions</p>
          </>
        ),
        id: 'decisions',
      },
      {
        content: (
          <>
            <p>Content of Order 1</p>
            <p>Tab history</p>
          </>
        ),
        id: 'history',
      },
    ],
  },
  {
    id: '2',
    tabs: [
      { content: 'Content of Order 2, Tab order', id: 'order' },
      { content: 'Content of Order 2, Tab details', id: 'details' },
      { content: 'Content of Order 2, Tab conflicts', id: 'conflicts' },
      { content: 'Content of Order 2, Tab sends', id: 'sends' },
      { content: 'Content of Order 2, Tab pv', id: 'pv' },
      { content: 'Content of Order 2, Tab decisions', id: 'decisions' },
      { content: 'Content of Order 2, Tab history', id: 'history' },
    ],
  },
  {
    id: '3',
    tabs: [
      { content: 'Content of Order 3, Tab order', id: 'order' },
      { content: 'Content of Order 3, Tab details', id: 'details' },
      { content: 'Content of Order 3, Tab conflicts', id: 'conflicts' },
      { content: 'Content of Order 3, Tab sends', id: 'sends' },
      { content: 'Content of Order 3, Tab pv', id: 'pv' },
      { content: 'Content of Order 3, Tab decisions', id: 'decisions' },
      { content: 'Content of Order 3, Tab history', id: 'history' },
    ],
  },
];
