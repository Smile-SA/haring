'use client';

import type { IDocument } from '@smile/haring-react';
import type { IOption } from '@smile/haring-react-shared';
import type { ReactElement } from 'react';

import {
  AppShell,
  Box,
  Checkbox,
  Flex,
  Group,
  Paper,
  Select,
  Space,
  getThemeColor,
  useMantineTheme,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { CalendarBlank, CaretDown } from '@phosphor-icons/react';
import {
  DocumentList,
  FoldableColumnLayout,
  Header,
  Motif,
  Pagination,
  SearchBar,
  SidebarFilters,
} from '@smile/haring-react';
import {
  isNotNullNorEmpty,
  useSecondaryTheme,
} from '@smile/haring-react-shared';
import { useState } from 'react';

import {
  headerContent,
  headerLeft,
  headerRight,
  searchActions,
  searchDocuments,
} from '../pages.mock';

import { texts } from './SearchResults.mock';
import classes from './SearchResults.module.css';

interface IOptionExtended extends IOption<string> {
  label: string;
}

interface ITypeFilter extends IOptionExtended {
  results: number;
}

/**
 * Example Page of a search results page, using `FoldableColumnLayout`
 */
export function SearchResults(): ReactElement {
  // style
  const theme = useMantineTheme();
  const numberOfResults = 135;
  // Search
  const [search, setSearch] = useState<string>('567890456');
  const [numberOfFiltersActive, setNumberOfFiltersActive] = useState(0);
  // Pagination
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  // FilterBar
  const [activeFilters, setActiveFilters] = useState([
    {
      categoryId: [2, 4],
      id: 7,
      label: 'Particulié',
      onRemove: () => {
        removeAllFilters();
      },
      value: 'particular',
    },
  ]);
  const [dupontFilter, setDupontFilter] = useState(false);
  const [martinFilter, setMartinFilter] = useState(false);
  const [andreeFilter, setAndreeFilter] = useState(false);
  const [cdiFilter, setCdiFilter] = useState(false);
  const [cddFilter, setCddFilter] = useState(false);
  const [freelanceFilter, setFreelanceFilter] = useState(false);
  const [particularFilter, setParticularFilter] = useState(true);
  const secondary = useSecondaryTheme();

  const menus = [
    {
      content: (
        <div>
          <Group>
            <Checkbox
              checked={dupontFilter}
              label="Dupont"
              onChange={(event) => {
                setActiveFiltersManager(1, event.target, 'Dupont');
              }}
              value="dupont"
            />
          </Group>
          <br />
          <Group>
            <Checkbox
              checked={martinFilter}
              label="Martin"
              onChange={(event) => {
                setActiveFiltersManager(2, event.target, 'Martin');
              }}
              value="martin"
            />
          </Group>
          <br />
          <Group>
            <Checkbox
              checked={andreeFilter}
              label="Andrée"
              onChange={(event) => {
                setActiveFiltersManager(3, event.target, 'Andrée');
              }}
              value="andrée"
            />
          </Group>
        </div>
      ),
      id: 1,
      label: texts.clientName,
    },
    {
      children: [
        {
          content: (
            <>
              <Group>
                <Checkbox
                  checked={cdiFilter}
                  label={texts.permanentContract}
                  onChange={(event) => {
                    setActiveFiltersManager(4, event.target, 'CDI');
                  }}
                  value="CDI"
                />
              </Group>
              <br />
              <Group>
                <Checkbox
                  checked={cddFilter}
                  label={texts.permanentContract}
                  onChange={(event) => {
                    setActiveFiltersManager(5, event.target, 'CDD');
                  }}
                  value="CDD"
                />
              </Group>
            </>
          ),
          id: 3,
          label: texts.classicContract,
        },
        {
          content: (
            <>
              <Group>
                <Checkbox
                  checked={freelanceFilter}
                  label={texts.freelance}
                  onChange={(event) => {
                    setActiveFiltersManager(6, event.target, 'Freelance');
                  }}
                  value="freelance"
                />
              </Group>
              <br />
              <Group>
                <Checkbox
                  checked={particularFilter}
                  label={texts.particular}
                  onChange={(event) => {
                    setActiveFiltersManager(7, event.target, 'Particular');
                  }}
                  value="particular"
                />
              </Group>
            </>
          ),
          id: 4,
          label: texts.specialContract,
        },
      ],
      id: 2,
      label: texts.typeOfContract,
    },
    {
      content: (
        <div className={classes.periodContainer}>
          <DateInput
            classNames={{
              input: classes.dataInput,
              label: classes.dataInputLabel,
            }}
            label={texts.between}
            placeholder="JJ /MM/ AAAA"
            rightSection={
              <CalendarBlank
                color={getThemeColor(theme.primaryColor, theme)}
                size={20}
                weight="bold"
              />
            }
            value={undefined}
            valueFormat="DD/MM/YYYY"
          />
          <Space h="6px" />
          <DateInput
            classNames={{
              input: classes.dataInput,
              label: classes.dataInputLabel,
            }}
            label={texts.andThe}
            placeholder="JJ /MM/ AAAA"
            rightSection={
              <CalendarBlank
                color={getThemeColor(theme.primaryColor, theme)}
                size={20}
                weight="bold"
              />
            }
            value={undefined}
            valueFormat="DD/MM/YYYY"
          />
        </div>
      ),
      id: 5,
      label: texts.period,
    },
    { id: 6, label: texts.contractDuration },
    { id: 7, label: texts.filterName },
    { id: 8, label: texts.filterName },
    { id: 9, label: texts.filterName },
  ];

  // pagination row per page
  const rowsPerPageOptions = [
    { label: texts.displayNbResult(5), value: 5 },
    { label: texts.displayNbResult(10), value: 10 },
    { label: texts.displayNbResult(20), value: 20 },
  ];
  // Search Type Filter
  const typeFilterOptions: ITypeFilter[] = [
    {
      label: `${texts.all} (${numberOfResults})`,
      results: numberOfResults,
      value: 'all',
    },
    {
      label: `Factures (${Math.ceil(numberOfResults / 2)})`,
      results: Math.ceil(numberOfResults / 2),
      value: texts.invoice,
    },
    {
      label: `${texts.contracts} (${Math.floor(numberOfResults / 2)})`,
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
  const toggleLabel =
    !isColumnVisible && numberOfFiltersActive === 0
      ? texts.seeFilters
      : isColumnVisible
        ? `${texts.activeFilters
            .slice(0, 1)
            .toUpperCase()}${texts.activeFilters.slice(
            1,
            -1,
          )} ${numberOfFiltersActive}`
        : `${texts.seeThe} ${texts.activeFilters} ${numberOfFiltersActive}`;
  // Sorting
  const sortingOptions: IOptionExtended[] = [
    { label: `${texts.sortBy} ${texts.relevance}`, value: 'relevance' },
    { label: `${texts.sortBy} ${texts.title}`, value: 'title' },
    { label: `${texts.sortBy} ${texts.date}`, value: 'publicationDate' },
    { label: `${texts.sortBy} ${texts.author}`, value: 'author' },
    { label: `${texts.sortBy} ${texts.location}`, value: 'location' },
    { label: `${texts.sortBy} ${texts.desc}`, value: 'description' },
  ];
  const [activeSorting, setActiveSorting] = useState<string | null>(
    sortingOptions[0]?.value,
  );
  const totalPages = Math.ceil(typeFilteredResults / rowsPerPage);

  // Remove All filters on SidebarFilters
  const removeAllFilters = (): void => {
    setActiveFilters([]);
    setDupontFilter(false);
    setMartinFilter(false);
    setAndreeFilter(false);
    setCdiFilter(false);
    setCddFilter(false);
    setFreelanceFilter(false);
    setParticularFilter(false);
  };

  const setActiveFiltersManager = (
    id: number,
    element: EventTarget & HTMLInputElement,
    label: string,
  ): void => {
    let categoryId: number[] = [];
    switch (id) {
      case 1:
        setDupontFilter(element.checked);
        categoryId = [1];
        break;
      case 2:
        setMartinFilter(element.checked);
        categoryId = [1];
        break;
      case 3:
        setAndreeFilter(element.checked);
        categoryId = [1];
        break;
      case 4:
        setCdiFilter(element.checked);
        categoryId = [2, 3];
        break;
      case 5:
        setCddFilter(element.checked);
        categoryId = [2, 3];
        break;
      case 6:
        setFreelanceFilter(element.checked);
        categoryId = [2, 4];
        break;
      case 7:
        setParticularFilter(element.checked);
        categoryId = [2, 4];
        break;
    }

    if (id >= 0 && id <= 7) {
      const filtersId = activeFilters.map((filter) => filter.id);

      if (filtersId.includes(id)) {
        setActiveFilters(activeFilters.filter((element) => element.id !== id));
      } else {
        setActiveFilters([
          ...activeFilters,
          {
            categoryId,
            id,
            label,
            onRemove: () => {
              element.click();
            },
            value: element.value,
          },
        ]);
      }
    }
  };
  // Documents
  const [selectedDocuments, setSelectedDocuments] = useState<IDocument[]>([]);

  function handleDocumentSelected(
    selectedDocument: IDocument,
    isSelected: boolean,
  ): void {
    const newSelectedDocuments = [...selectedDocuments];
    if (
      newSelectedDocuments
        .map((document) => document.id)
        .includes(selectedDocument.id) &&
      !isSelected
    ) {
      delete newSelectedDocuments[
        newSelectedDocuments.findIndex(
          (document) => document.id === selectedDocument.id,
        )
      ];
    } else {
      newSelectedDocuments.push(selectedDocument);
    }
    setSelectedDocuments(newSelectedDocuments.filter(isNotNullNorEmpty));
  }

  return (
    <AppShell
      classNames={{ main: classes.main }}
      header={{ height: { base: 76, lg: 90 } }}
      padding={0}
    >
      <AppShell.Header>
        <Header
          childrenComponent="nav"
          hasSearch={false}
          left={headerLeft}
          right={headerRight}
        >
          {headerContent}
        </Header>
      </AppShell.Header>
      <AppShell.Main>
        <FoldableColumnLayout
          boxMotif={<Motif />}
          boxProps={{ p: { lg: '48px 64px' } }}
          isColumnVisible={isColumnVisible}
          onChangeIsColumnVisible={setIsColumnVisible}
          sidebarContent={
            <SidebarFilters
              activeFilters={activeFilters}
              defaultOpenedMenuIds={[2, 4]}
              deleteButtonLabel={texts.removeAll}
              filterButtonLabel={texts.filter}
              menus={menus}
              onDeleteButtonClick={() => {
                removeAllFilters();
                setNumberOfFiltersActive(0);
              }}
              onFilterButtonClick={() => {
                setNumberOfFiltersActive(activeFilters.length);
              }}
              title={texts.activeFilters}
            />
          }
          sidebarToggleLabel={toggleLabel}
          topBarRight={
            <Flex style={{ justifyContent: 'flex-end' }}>
              <Select
                data={sortingOptions}
                defaultValue={activeSorting}
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
                    classNames={{
                      dropdown: classes.selectDropdown,
                      section: classes.selectRight,
                    }}
                    comboboxProps={{ withinPortal: false }}
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
                    variant="unstyled"
                  />
                }
                onChange={setSearch}
                value={search}
              />
            </Box>
          }
          topBlockTheme={secondary}
        >
          <Paper className={classes.documentListContainer} mb={24}>
            <DocumentList
              actionBarProps={{
                selectedElementsLabel: (n) =>
                  `${n} ${texts.file}{n > 1 ? 's' : ''} ${texts.selected} ${
                    n > 1 ? 's' : ''
                  }`,
              }}
              actions={searchActions}
              documents={searchDocuments}
              onDocumentSelected={handleDocumentSelected}
              selectedDocuments={selectedDocuments}
            />
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
      </AppShell.Main>
    </AppShell>
  );
}
