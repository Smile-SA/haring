import { Avatar, Box, Flex, Menu, Paper, Select } from '@mantine/core';
import { CaretDown } from '@phosphor-icons/react';

import { DropdownButton } from '../../Components/DropdownButton/DropdownButton';
import { Pagination } from '../../Components/Pagination/Pagination';
import { SearchBar } from '../../Components/SearchBar/SearchBar';

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

export const sidebarContent = (
  <Paper p={24} style={{ borderRadius: 16, height: '100%' }}>
    [filters]
  </Paper>
);

const leftSearch = (
  <Select
    data={['Tous (135)']}
    defaultValue="Tous (135)"
    rightSection={<CaretDown size={14} />}
    size="lg"
    styles={() => ({
      input: {
        padding: '0 calc(3.125rem  / 3) 0 40px',
      },
    })}
  />
);

export const topBlock = (
  <Box mb={24}>
    <SearchBar leftSection={leftSearch} />
  </Box>
);

export const topBarRight = (
  <Flex style={{ justifyContent: 'flex-end' }}>
    <Select
      data={['Trier par pertinence']}
      defaultValue="Trier par pertinence"
    />
  </Flex>
);

export const content = (
  <>
    <Paper mb={24} p={24} style={{ borderRadius: 16, height: 748 }}>
      [results]
    </Paper>
    <Pagination
      itemsPerPage={10}
      itemsPerPageAriaLabel="Nombre de résultats"
      itemsPerPageOptions={[
        { label: 'Afficher 5 résultats', value: 5 },
        { label: 'Afficher 10 résultats', value: 10 },
        { label: 'Afficher 20résultats', value: 20 },
      ]}
      page={1}
      totalPages={10}
    />
  </>
);
