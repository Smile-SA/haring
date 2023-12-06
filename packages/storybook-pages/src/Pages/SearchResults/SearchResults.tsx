'use client';

import type { ReactElement } from 'react';

import {
  AppShell,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Group,
  Paper,
  Select,
  Space,
  Stack,
  createStyles,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import {
  CalendarBlank,
  CaretDown,
  DownloadSimple,
} from '@phosphor-icons/react';
import {
  DocumentCard,
  FiltersBar,
  FoldableColumnLayout,
  Header,
  Motif,
  Pagination,
  SearchBar,
} from '@smile/react-front-kit';
import { secondaryTheme } from '@smile/react-front-kit-shared';
import { useState } from 'react';

import { headerContent, headerLeft, headerRight } from '../pages.mock';

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
  dataInput: {
    border: `1px solid ${theme.colors.gray[2]}`,
    color: theme.colors.dark,
  },
  dataInputLabel: {
    color: theme.colors.dark,
    fontWeight: 600,
    marginBottom: '4px',
  },
  periodContainer: {
    padding: '6px 0',
  },
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
  // style
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const numberOfResults = 135;
  // Search
  const [search, setSearch] = useState<string>('567890456');
  // Pagination
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  // FilterBar
  const [activeFilters, setActiveFilters] = useState([
    {
      categoryId: [1],
      id: 1,
      label: 'dupont',
      onRemove: () => {
        setActiveFilters(activeFilters.filter((filter) => filter.id !== 1));
      },
      value: 'dupont',
    },
    {
      categoryId: [2, 4],
      id: 2,
      label: 'particulier',
      onRemove: () => {
        setActiveFilters(activeFilters.filter((filter) => filter.id !== 2));
      },
      value: 'particular',
    },
  ]);
  const [dupontFilter, setDupontFilter] = useState(true);
  const [martinFilter, setMartinFilter] = useState(false);
  const [andreeFilter, setAndreeFilter] = useState(false);
  const [cdiFilter, setCdiFilter] = useState(false);
  const [cddFilter, setCddFilter] = useState(false);
  const [freelanceFilter, setFreelanceFilter] = useState(false);
  const [particularFilter, setParticularFilter] = useState(true);
  const menus = [
    {
      content: (
        <div>
          <Group>
            <Checkbox
              checked={dupontFilter}
              onChange={(event) => {
                setActiveFiltersManager(1, event.target);
              }}
              value="dupont"
            />{' '}
            Dupont
          </Group>
          <br />
          <Group>
            <Checkbox
              checked={martinFilter}
              onChange={(event) => {
                setActiveFiltersManager(2, event.target);
              }}
              value="martin"
            />{' '}
            Martin
          </Group>
          <br />
          <Group>
            <Checkbox
              checked={andreeFilter}
              onChange={(event) => {
                setActiveFiltersManager(3, event.target);
              }}
              value="andré"
            />{' '}
            Andrée
          </Group>
        </div>
      ),
      id: 1,
      label: `Nom du client`,
    },
    {
      children: [
        {
          content: (
            <>
              <Group>
                <Checkbox
                  checked={cdiFilter}
                  onChange={(event) => {
                    setActiveFiltersManager(4, event.target);
                  }}
                  value="CDI"
                />{' '}
                CDI
              </Group>
              <br />
              <Group>
                <Checkbox
                  checked={cddFilter}
                  onChange={(event) => {
                    setActiveFiltersManager(5, event.target);
                  }}
                  value="CDD"
                />{' '}
                CDD
              </Group>
            </>
          ),
          id: 3,
          label: 'Contrat classique',
        },
        {
          content: (
            <>
              <Group>
                <Checkbox
                  checked={freelanceFilter}
                  onChange={(event) => {
                    setActiveFiltersManager(6, event.target);
                  }}
                  value="freelance"
                />{' '}
                Freelance
              </Group>
              <br />
              <Group>
                <Checkbox
                  checked={particularFilter}
                  onChange={(event) => {
                    setActiveFiltersManager(7, event.target);
                  }}
                  value="particular"
                />{' '}
                Particulié
              </Group>
            </>
          ),
          id: 4,
          label: 'Contrat special',
        },
      ],
      id: 2,
      label: 'Type de contrat',
    },
    {
      content: (
        <div className={classes.periodContainer}>
          <DateInput
            classNames={{
              input: classes.dataInput,
              label: classes.dataInputLabel,
            }}
            label="Entre le"
            placeholder="JJ /MM/ AAAA"
            rightSection={
              <CalendarBlank
                color={theme.colors.cyan[9]}
                size={20}
                weight="bold"
              />
            }
            value={new Date('01/05/12')}
            valueFormat="DD/MM/YYYY"
          />
          <Space h="6px" />
          <DateInput
            classNames={{
              input: classes.dataInput,
              label: classes.dataInputLabel,
            }}
            label="Et le"
            placeholder="JJ /MM/ AAAA"
            rightSection={
              <CalendarBlank
                color={theme.colors.cyan[9]}
                size={20}
                weight="bold"
              />
            }
            value={new Date('05/23/12')}
            valueFormat="DD/MM/YYYY"
          />
        </div>
      ),
      id: 5,
      label: 'Période',
    },
    { id: 6, label: 'Durée du contrat' },
    { id: 7, label: 'Nom du filtre' },
    { id: 8, label: 'Nom du filtre' },
    { id: 9, label: 'Nom du filtre' },
  ];

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
  const toggleLabel = isColumnVisible
    ? `Filtres actifs (2)`
    : `Voir les filtres actifs (2)`;
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

  function removeAllFilters(): void {
    setActiveFilters([]);
    setDupontFilter(false);
    setMartinFilter(false);
    setAndreeFilter(false);
    setCdiFilter(false);
    setCddFilter(false);
    setFreelanceFilter(false);
    setParticularFilter(false);
  }

  const setActiveFiltersManager = (
    id: number,
    element: EventTarget & HTMLInputElement,
  ): void => {
    let categoryId: number[] = [];
    let currentSetFilter: (() => void) | undefined = undefined;
    switch (id) {
      case 1:
        currentSetFilter = () => setDupontFilter(element.checked);
        categoryId = [1];
        break;
      case 2:
        currentSetFilter = () => setMartinFilter(element.checked);
        categoryId = [1];
        break;
      case 3:
        currentSetFilter = () => setAndreeFilter(element.checked);
        categoryId = [1];
        break;
      case 4:
        currentSetFilter = () => setCdiFilter(element.checked);
        categoryId = [2, 3];
        break;
      case 5:
        currentSetFilter = () => setCddFilter(element.checked);
        categoryId = [2, 3];
        break;
      case 6:
        currentSetFilter = () => setFreelanceFilter(element.checked);
        categoryId = [2, 4];
        break;
      case 7:
        currentSetFilter = () => setParticularFilter(element.checked);
        categoryId = [2, 4];
        break;
    }
    currentSetFilter?.();

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
            label: element.value,
            onRemove: () => {
              currentSetFilter?.();
              setActiveFilters(
                activeFilters.filter((filter) => filter.id !== id),
              );
            },
            value: element.value,
          },
        ]);
      }
    }
  };

  return (
    <AppShell
      header={
        <Header
          childrenComponent="nav"
          hasSearch={false}
          left={headerLeft}
          right={headerRight}
        >
          {headerContent}
        </Header>
      }
      padding={0}
    >
      <FoldableColumnLayout
        boxMotif={<Motif style={{ fill: '#868E96', opacity: 0.1 }} />}
        boxProps={{ p: '50px 64px' }}
        isColumnVisible={isColumnVisible}
        onChangeIsColumnVisible={setIsColumnVisible}
        sidebarContent={
          <FiltersBar
            activeFilters={activeFilters}
            defaultOpenedMenuIds={[8]}
            deleteButtonLabel="Supprimer tout"
            filterButtonLabel="Filtrer"
            menus={menus}
            onDeleteButtonClick={removeAllFilters}
            title="Filtres actifs"
          />
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
              value={search}
            />
          </Box>
        }
        topBlockTheme={{ ...secondaryTheme, colorScheme: 'dark' }}
      >
        <Paper mb={24} p={24} style={{ borderRadius: 16, padding: '8px 56px' }}>
          <Stack>
            <Space h="40px" />
            <DocumentCard
              author="Aline Dupon"
              date="Published on December 24, 2023"
              iconType="PDF"
              path="(Customer > 567890456 > Invoices)"
              title="Random_File.PDF"
            >
              <>
                <p>
                  Ceci est une description faite pour cette facture et ajoutée
                  par le créateur lors de l’import du document dans la GED, en
                  l’absence de description cet espace est laissé vide...
                </p>
                <Button color="gray.8">
                  <DownloadSimple width={12} />
                  <Space w={8} />
                  PDF, FR - 1Mo
                </Button>
              </>
            </DocumentCard>
            <Space h="28px" />
            <Divider color="gray.2" my="sm" />
            <Space h="28px" />
            <DocumentCard
              author="Julien Dominique"
              date="Published on December 24, 2023"
              iconType="ppt"
              path="(Customer > 567890456 > Invoices)"
              title="Presentation.PPT"
            >
              <>
                <p>
                  Ceci est une description faite pour cette facture et ajoutée
                  par le créateur lors de l’import du document dans la GED, en
                  l’absence de description cet espace est laissé vide...
                </p>
                <Button color="gray.8">
                  <DownloadSimple width={12} />
                  <Space w={8} />
                  PTT, FR - 1Mo
                </Button>
              </>
            </DocumentCard>
            <Space h="28px" />
            <Divider color="gray.2" my="sm" />
            <Space h="28px" />
            <DocumentCard
              author="Mohamed Aldri"
              date="Published on December 24, 2023"
              iconType="PDF"
              path="(Customer > 567890456 > Invoices)"
              title="Other_random_File.PDF"
            >
              <>
                <p>
                  Ceci est une description faite pour cette facture et ajoutée
                  par le créateur lors de l’import du document dans la GED, en
                  l’absence de description cet espace est laissé vide...
                </p>
                <Button color="gray.8">
                  <DownloadSimple width={12} />
                  <Space w={8} />
                  PDF, FR - 1Mo
                </Button>
              </>
            </DocumentCard>
            <Space h="40px" />
          </Stack>
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
    </AppShell>
  );
}
