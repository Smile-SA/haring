import type { IOption, ISearchFilter, ITypeFilter } from './SearchResults';

import { Avatar, Menu } from '@mantine/core';

import { DropdownButton } from '../../Components/DropdownButton/DropdownButton';

export const headerContent = (
  <>
    <a href="#">Espace documentaire</a>
    <a href="#">Espace workflow</a>
    <a href="#">Archives</a>
  </>
);

export const headerLeft = (
  <img alt="logo" height="58" src="./logo.svg" width="128" />
);

export const headerRight = (
  <>
    <DropdownButton label="Mon espace">
      <Menu.Item component="a" href="#">
        Calico
      </Menu.Item>
      <Menu.Item component="a" href="#">
        Espace RH
      </Menu.Item>
      <Menu.Item component="a" href="#">
        Aventure IA
      </Menu.Item>
      <Menu.Item component="a" href="#">
        Lunette & CO
      </Menu.Item>
    </DropdownButton>
    <Avatar
      alt="User"
      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
    />
  </>
);

export const typeOptions = (numberOfResults: number): ITypeFilter[] => {
  return [
    {
      label: `Tous (${numberOfResults})`,
      results: numberOfResults,
      value: 'all',
    },
    {
      label: `Factures (${Math.ceil(numberOfResults / 2)})`,
      results: Math.ceil(numberOfResults / 2),
      value: 'invoice',
    },
    {
      label: `Contrats (${Math.floor(numberOfResults / 2)})`,
      results: Math.floor(numberOfResults / 2),
      value: 'contract',
    },
  ];
};

export const filters: ISearchFilter[] = [
  { id: 'clientName', label: 'Nom du client', value: 'Dupont' },
  { id: 'contractType', label: 'Type de contrat', value: 'Particulier' },
  {
    id: 'timePeriod',
    label: 'Période',
    value: { timeEnd: '20230523T000000Z', timeStart: '20230105T000000Z' },
  },
  { id: 'contractDuration', label: 'Durée du contrat', value: undefined },
];

export const sortingOptions: IOption<string>[] = [
  { label: 'Trier par pertinence', value: 'relevance' },
  { label: 'Trier par titre', value: 'title' },
  { label: 'Trier par date de publication', value: 'publicationDate' },
  { label: 'Trier par auteur', value: 'author' },
  { label: 'Trier par emplacement', value: 'location' },
  { label: 'Trier par description', value: 'description' },
];
