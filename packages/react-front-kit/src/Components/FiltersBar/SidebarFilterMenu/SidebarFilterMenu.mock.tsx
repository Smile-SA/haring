import type { IFiltersItem } from './SidebarFilterMenu';

import { Checkbox, Group } from '@mantine/core';

export function getMenu(checked: boolean): IFiltersItem<number>[] {
  return [
    {
      content: (
        <>
          <Group>
            <Checkbox defaultChecked={checked} value="Dupont" /> Dupont
          </Group>
          <br />
          <Group>
            <Checkbox defaultChecked={checked} value="Martin" /> Martin
          </Group>
          <br />
          <Group>
            <Checkbox value="André" /> Andrée
          </Group>
        </>
      ),
      id: 1,
      label: 'Nom du client',
    },
    {
      children: [
        {
          content: (
            <>
              <Group>
                <Checkbox defaultChecked={checked} value="CDI" /> CDI
              </Group>
              <br />
              <Group>
                <Checkbox value="CDD" /> CDD
              </Group>
            </>
          ),
          id: 10,
          label: 'Contrat classique',
        },
        {
          content: (
            <Group style={{ padding: '10px 0 10px 10px' }}>
              <Checkbox defaultChecked={checked} value="FREELANCE" /> Freelance
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
}

// Because, the random mantine ids to make fail test
export const menuWithoutContent = [
  {
    id: 1,
    label: 'Nom du client',
  },
  {
    children: [
      {
        id: 10,
        label: 'Contrat classique',
      },
      {
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
