import type { IMenuItem } from '@smile/haring-react';
import type { ReactNode } from 'react';

export const texts = {
  conflicts: `Conflits d'intérêt`,
  decisions: 'Décisions',
  descriptionLabel: 'Description :',
  details: 'Détails',
  history: 'Historique',
  modifyLabel: 'Modify',
  next: 'Suivant',
  order: `Ordre du jour`,
  previous: 'Précédent',
  pv: 'PV',
  sends: 'Envois',
  titleLabel: 'Title :',
  toggleLabel: `Voir l'ordre du jour`,
};

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
  content: {
    body?: ReactNode;
    description?: string;
    title?: string;
  };
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
        content: {
          body: (
            <>
              <p>Content of Order 1</p>
              <p>Tab order</p>
            </>
          ),
        },

        id: 'order',
      },
      {
        content: {
          description: '',
          title: 'Titre tab détails order 1',
        },
        id: 'details',
      },
      {
        content: {
          body: (
            <>
              <p>Content of Order 1</p>
              <p>Tab conflicts</p>
            </>
          ),
        },
        id: 'conflicts',
      },
      {
        content: {
          body: (
            <>
              <p>Content of Order 1</p>
              <p>Tab sends</p>
            </>
          ),
        },
        id: 'sends',
      },
      {
        content: {
          body: (
            <>
              <p>Content of Order 1</p>
              <p>Tab pv</p>
            </>
          ),
        },
        id: 'pv',
      },
      {
        content: {
          body: (
            <>
              <p>Content of Order 1</p>
              <p>Tab decisions</p>
            </>
          ),
        },
        id: 'decisions',
      },
      {
        content: {
          body: (
            <>
              <p>Content of Order 1</p>
              <p>Tab history</p>
            </>
          ),
        },
        id: 'history',
      },
    ],
  },
  {
    id: '2',
    tabs: [
      { content: { body: 'Content of Order 2, Tab order' }, id: 'order' },
      {
        content: {
          description: '',
          title: 'Titre tab détails order 2',
        },
        id: 'details',
      },
      {
        content: { body: 'Content of Order 2, Tab conflicts' },
        id: 'conflicts',
      },
      { content: { body: 'Content of Order 2, Tab sends' }, id: 'sends' },
      { content: { body: 'Content of Order 2, Tab pv' }, id: 'pv' },
      {
        content: { body: 'Content of Order 2, Tab decisions' },
        id: 'decisions',
      },
      {
        content: { body: 'Content of Order 2, Tab history' },
        id: 'history',
      },
    ],
  },
  {
    id: '3',
    tabs: [
      { content: { body: 'Content of Order 3, Tab order' }, id: 'order' },
      {
        content: {
          description: '',
          title: 'Titre tab détails order 3',
        },
        id: 'details',
      },
      {
        content: { body: 'Content of Order 3, Tab conflicts' },
        id: 'conflicts',
      },
      { content: { body: 'Content of Order 3, Tab order' }, id: 'sends' },
      { content: { body: 'Content of Order 3, Tab pv' }, id: 'pv' },
      {
        content: { body: 'Content of Order 3, Tab decisions' },
        id: 'decisions',
      },
      {
        content: { body: 'Content of Order 3, Tab history' },
        id: 'history',
      },
    ],
  },
];
