'use client';

import type { FormEvent, ReactElement } from 'react';

import { Box, Flex, Paper, Select, createStyles, rem } from '@mantine/core';
import { CaretDown } from '@phosphor-icons/react';
import {
  isNotNullNorEmpty,
  secondaryTheme,
} from '@smile/react-front-kit-shared';
import { useState } from 'react';

import { Header } from '../../Components/Header/Header';
import Motif from '../../Components/InfoCard/Motif';
import { Pagination } from '../../Components/Pagination/Pagination';
import { SearchBar } from '../../Components/SearchBar/SearchBar';
import { FoldableColumnLayout } from '../../Layouts/FoldableColumnLayout/FoldableColumnLayout';

import { headerContent, headerLeft, headerRight } from './SearchResults.mock';

export interface IOption<T> {
  label: string;
  value: T;
}

export interface ITypeFilter extends IOption<string> {
  results: number;
}

export interface ISearchFilter extends IOption<unknown> {
  id: string;
}

const useStyles = createStyles((theme) => ({
  select: {
    ':focus, :focus-within': {
      outline: `${rem(2)} solid ${theme.colors.orange[5]}`,
    },
    borderRadius: '1.5rem',
  },
}));

/**
 * Example Page of a search results page, using `FoldableColumnLayout`
 */
export function SearchResults(): ReactElement {
  const numberOfResults = 135;
  // Search
  const [search, setSearch] = useState<string>('567890456');
  const [submittedSearch, setSubmittedSearch] = useState<string>(search);
  // Pagination
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const rowsPerPageOptions = [
    { label: 'Afficher 5 résultats', value: 5 },
    { label: 'Afficher 10 résultats', value: 10 },
    { label: 'Afficher 20 résultats', value: 20 },
  ];
  // Search Type Filter
  const typeFilterOptions: ITypeFilter[] = [
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
  const [activeType, setActiveType] = useState<ITypeFilter>(
    typeFilterOptions[0],
  );
  const typeFilteredResults = activeType.results;
  // Filters Column
  const [isColumnVisible, setIsColumnVisible] = useState(true);
  const filters: ISearchFilter[] = [
    { id: 'clientName', label: 'Nom du client', value: 'Dupont' },
    { id: 'contractType', label: 'Type de contrat', value: 'Particulier' },
    {
      id: 'timePeriod',
      label: 'Période',
      value: { timeEnd: '20230523T000000Z', timeStart: '20230105T000000Z' },
    },
    { id: 'contractDuration', label: 'Durée du contrat', value: undefined },
  ];
  const activeFilters = filters.filter((filter) =>
    isNotNullNorEmpty(filter.value),
  );
  const toggleLabel = isColumnVisible
    ? `Filtres actifs (${activeFilters.length})`
    : `Voir les filtres actifs (${activeFilters.length})`;
  // Sorting
  const sortingOptions: IOption<string>[] = [
    { label: 'Trier par pertinence', value: 'relevance' },
    { label: 'Trier par titre', value: 'title' },
    { label: 'Trier par date de publication', value: 'publicationDate' },
    { label: 'Trier par auteur', value: 'author' },
    { label: 'Trier par emplacement', value: 'location' },
    { label: 'Trier par description', value: 'description' },
  ];
  const [activeSorting, setActiveSorting] = useState<string | null>(
    sortingOptions[0]?.value,
  );

  const totalPages = Math.ceil(typeFilteredResults / rowsPerPage);
  const { classes } = useStyles();

  function handleSearchSubmit(event: FormEvent): void {
    event.preventDefault();
    setSubmittedSearch(search);
  }

  function handleSearchClear(): void {
    setSubmittedSearch('');
  }

  return (
    <FoldableColumnLayout
      appShellProps={{
        header: (
          <Header
            childrenComponent="nav"
            hasSearch={false}
            left={headerLeft}
            right={headerRight}
          >
            {headerContent}
          </Header>
        ),
        padding: 0,
      }}
      boxMotif={<Motif style={{ fill: '#868E96', opacity: 0.1 }} />}
      boxProps={{ p: '50px 64px' }}
      isColumnVisible={isColumnVisible}
      onChangeIsColumnVisible={setIsColumnVisible}
      sidebarContent={
        <Paper
          p={24}
          style={{
            borderRadius: 16,
            height: '100%',
            wordWrap: 'break-word',
          }}
        >
          [
          {filters.map(
            (filter) => `${filter.id}: ${JSON.stringify(filter.value)},
            `,
          )}
          ]
        </Paper>
      }
      sidebarToggleLabel={toggleLabel}
      topBarRight={
        <Flex style={{ justifyContent: 'flex-end' }}>
          <Select
            data={sortingOptions}
            defaultValue={activeSorting}
            dropdownPosition="bottom"
            onChange={setActiveSorting}
          />
        </Flex>
      }
      topBlock={
        <Box mb={24}>
          <SearchBar
            leftSection={
              <Select
                className={classes.select}
                data={typeFilterOptions}
                defaultValue={activeType.value}
                onChange={(v) =>
                  setActiveType(
                    typeFilterOptions.find((type) => type.value === v) ??
                      typeFilterOptions[0],
                  )
                }
                rightSection={<CaretDown size={14} />}
                size="lg"
                styles={() => ({
                  input: {
                    padding: '0 calc(3.125rem  / 3) 0 40px',
                  },
                })}
                variant="unstyled"
              />
            }
            onChange={setSearch}
            onSearchClear={handleSearchClear}
            onSearchSubmit={handleSearchSubmit}
            value={search}
          />
        </Box>
      }
      topBlockTheme={{ ...secondaryTheme, colorScheme: 'dark' }}
    >
      <Paper mb={24} p={24} style={{ borderRadius: 16, height: 748 }}>
        [{rowsPerPage}/{typeFilteredResults} results of search &quot;
        {submittedSearch}
        &quot;, page {page}/{totalPages}, sorted by {activeSorting}]
      </Paper>
      <Pagination
        isTransparent
        itemsPerPage={rowsPerPage}
        itemsPerPageAriaLabel="Nombre de résultats"
        itemsPerPageOptions={rowsPerPageOptions}
        onItemsPerPageChange={setRowsPerPage}
        onPageChange={setPage}
        page={page}
        totalPages={totalPages}
      />
    </FoldableColumnLayout>
  );
}
