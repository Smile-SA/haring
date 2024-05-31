import type { IMenuItem } from '../SidebarMenu/SidebarMenu';

import { Checkbox, Group } from '@mantine/core';

import { SearchableList } from '../SearchableList/SearchableList';

export const activeFilters = [
  {
    categoryId: [1],
    id: 1,
    label: 'Dupont',
    value: 'DUPONT',
  },
  {
    categoryId: [1],
    id: 2,
    label: 'Martin',
    value: 'MARTIN',
  },
  {
    categoryId: [3, 10],
    id: 3,
    label: 'Freelance',
    value: 'Freelance',
  },
  {
    categoryId: [3, 11],
    id: 4,
    label: 'CDI',
    value: 'CDI',
  },
];

export function getMenu(checked: boolean): IMenuItem<number>[] {
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
            <Group>
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

const clientsMock = [
  { active: true, id: 1, label: 'Dupont', value: 'dupont' },
  { active: true, id: 2, label: 'Martin', value: 'martin' },
  { active: false, id: 5, label: 'Andrée', value: 'andree' },
];

const classicsContractsMock = [
  { active: true, id: 4, label: 'CDI', value: 'cdi' },
  { active: false, id: 7, label: 'CDD', value: 'cdd' },
];

const specialContractMock = [
  { active: true, id: 3, label: 'Freelance', value: 'freelance' },
];

export function getMenuWithSelectableList(): IMenuItem<number>[] {
  return [
    {
      content: (
        <SearchableList
          checkboxes={clientsMock}
          minSearchableItems={0}
          submitButton={false}
        />
      ),
      id: 1,
      label: 'Nom du client',
    },
    {
      children: [
        {
          content: (
            <SearchableList
              checkboxes={classicsContractsMock}
              minSearchableItems={0}
              submitButton={false}
            />
          ),
          id: 10,
          label: 'Contrat classique',
        },
        {
          content: (
            <SearchableList
              checkboxes={specialContractMock}
              minSearchableItems={0}
              submitButton={false}
            />
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
