import type { IFiltersItem } from './SidebarFilterMenu';

import { Checkbox, Group } from '@mantine/core';

export const menu: IFiltersItem<number>[] = [
  {
    content: (
      <>
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
      </>
    ),
    id: 1,
    label: 'Nom du client',
  },
  {
    id: 3,
    label: 'Type de contrat',
  },
  {
    id: 8,
    label: 'Période',
  },
  { id: 9, label: 'Durée du contrat' },
];
