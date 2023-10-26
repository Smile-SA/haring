'use client';

import type { FormEvent, ReactElement } from 'react';

import { Box, Flex, Paper, Select } from '@mantine/core';
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

import {
  headerContent,
  headerLeft,
  headerRight,
  typeOptions,
} from './SearchResults.mock';

type IFilterTypes =
  | 'clientName'
  | 'contractDuration'
  | 'contractType'
  | 'timePeriod';

export interface IOption<T> {
  label: string;
  value: T;
}

export interface ITypeFilter extends IOption<string> {
  results: number;
}

export interface ISearchFilter extends IOption<unknown> {
  id: IFilterTypes;
}

interface ISearchResultsProps {
  filters: ISearchFilter[];
  initialSearch: string;
  numberOfResults: number;
  sortingOptions: IOption<string>[];
  typeFilterOptions?: ITypeFilter[];
}

/**
 * Example Page of a search results page, actions and attributes in a `ResponsiveTabs` component
 */
export function SearchResults(props: ISearchResultsProps): ReactElement {
  const {
    filters = [],
    initialSearch = '',
    numberOfResults = 100,
    sortingOptions = [],
    typeFilterOptions = typeOptions(numberOfResults),
  } = props;
  // Search
  const [search, setSearch] = useState<string>(initialSearch);
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
  const [activeType, setActiveType] = useState<ITypeFilter>(
    typeFilterOptions[0],
  );
  const typeFilteredResults = activeType.results;
  // Filters Column
  const [isColumnVisible, setIsColumnVisible] = useState<boolean>(true);
  const activeFilters = filters.filter((filter) =>
    isNotNullNorEmpty(filter.value),
  );
  const toggleLabel = isColumnVisible
    ? `Filtres actifs (${activeFilters.length})`
    : `Voir les filtres actifs (${activeFilters.length})`;
  // Sorting
  const [activeSorting, setActiveSorting] = useState<string | null>(
    sortingOptions[0]?.value,
  );

  const totalPages = Math.ceil(typeFilteredResults / rowsPerPage);

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
        itemsPerPage={rowsPerPage}
        itemsPerPageAriaLabel="Nombre de résultats"
        itemsPerPageOptions={rowsPerPageOptions}
        onItemsPerPageChange={setRowsPerPage}
        onPageChange={setPage}
        page={page}
        styleTransparent
        totalPages={totalPages}
      />
    </FoldableColumnLayout>
  );
}
