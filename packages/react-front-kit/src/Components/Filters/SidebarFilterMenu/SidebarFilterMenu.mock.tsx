import type { IFiltersItem } from './SidebarFilterMenu';

import { Checkbox, Group } from '@mantine/core';

export const menu: IFiltersItem<number>[] = [
  {
    content: (
      <div style={{ padding: '10px 0' }}>
        <Group>
          <Checkbox value="Dupont" /> Dupont
        </Group>
        <br />
        <Group>
          <Checkbox value="Martin" /> Martin
        </Group>
        <br />
        <Group>
          <Checkbox value="André" /> Andrée
        </Group>
      </div>
    ),
    id: 1,
    label: 'Nom du client',
  },
  {
    children: [
      {
        content: (
          <div style={{ padding: '10px 0' }}>
            <Group>
              <Checkbox value="CDI" /> CDI
            </Group>
            <br />
            <Group>
              <Checkbox value="CDD" /> CDD
            </Group>
          </div>
        ),
        id: 10,
        label: 'Contrat classique',
      },
      {
        content: (
          <Group style={{ padding: '10px 0' }}>
            <span>
              <Checkbox value="FREELANCE" /> Freelance
            </span>
          </Group>
        ),
        id: 11,
        label: 'Contrat special',
      },
    ],
    id: 3,
    label: 'Type de contrat',
  },
  {
    id: 8,
    label: 'Période',
  },
  { id: 9, label: 'Durée du contrat' },
];
