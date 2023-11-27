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
  Filters,
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
  const numberOfResults = 135;
  // Search
  const [search, setSearch] = useState<string>('567890456');
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
  const { classes } = useStyles();
  const menu = [
    {
      content: (
        <div>
          <Group>
            <Checkbox value="Dupont" /> Dupont
          </Group>
          <br />
          <Group>
            <Checkbox checked value="Martin" /> Martin
          </Group>
          <br />
          <Group>
            <Checkbox value="André" /> Andrée
          </Group>
        </div>
      ),
      id: 1,
      label: `Nom du client (1)`,
    },
    {
      children: [
        {
          content: (
            <>
              <Group>
                <Checkbox value="CDI" /> CDI
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
            <>
              <Group>
                <Checkbox value="FREELANCE" /> Freelance
              </Group>
              <br />
              <Group>
                <Checkbox checked value="PARTICULIER" /> Particulié
              </Group>
            </>
          ),
          id: 11,
          label: 'Contrat special (1)',
        },
      ],
      id: 3,
      label: 'Type de contrat (1)',
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
      id: 8,
      label: 'Période (1)',
    },
    { id: 9, label: 'Durée du contrat' },
    { id: 10, label: 'Nom du filtre' },
    { id: 11, label: 'Nom du filtre' },
    { id: 12, label: 'Nom du filtre' },
  ];

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
          <Filters
            activeFilters={[
              {
                id: 1,
                label: 'dupont',
                value: 'DUPONT',
              },
              {
                id: 2,
                label: 'particulier',
                value: 'PARTICULAR',
              },
              {
                id: 3,
                label: '3 ans',
                value: '3 YEARS',
              },
            ]}
            deleteButtonLabel="Supprimer tout"
            filterButtonLabel="Filtrer"
            openedMenuIds={[8]}
            sideBarFiltersMenu={menu}
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
