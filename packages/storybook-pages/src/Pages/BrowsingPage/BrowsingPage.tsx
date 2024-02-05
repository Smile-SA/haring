'use client';

import type { IMenuItem } from '@smile/react-front-kit/src';
import type { IFile } from '@smile/react-front-kit-dropzone';
import type { IFilter } from '@smile/react-front-kit-shared';
import type { FormEvent, ReactElement } from 'react';

import {
  Accordion,
  AppShell,
  Button,
  Collapse,
  Flex,
  Modal,
  getThemeColor,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  CaretDown,
  CaretUp,
  Eye,
  FolderPlus,
  Suitcase,
  User,
} from '@phosphor-icons/react';
import {
  Breadcrumbs,
  FilterList,
  FoldableColumnLayout,
  Header,
  InfoCard,
  SearchableCheckboxList,
  SidebarMenu,
  flattenNestedObjects,
} from '@smile/react-front-kit';
import { menuMock } from '@smile/react-front-kit/mock';
import { Dropzone } from '@smile/react-front-kit-dropzone';
import { NestedProvider, useThemes } from '@smile/react-front-kit-shared';
import { TableGridView } from '@smile/react-front-kit-table';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';

import {
  CardAction,
  CardIdentity,
  CardNative,
  CardPermissions,
  CardsMetadata,
  headerContent,
  headerLeft,
  headerLeftMobile,
  headerRight,
  headerRightMobile,
} from '../pages.mock';

import {
  SearchableCheckboxListProps,
  actions,
  data,
  gridProps,
  tableProps,
} from './BrowsingPage.mock';
import classes from './BrowsingPage.module.css';

/**
 * Primary UI component for user interaction
 */
export function BrowsingPage(): ReactElement {
  const [search, setSearch] = useState('');
  const [sidebarMenu, setSidebarMenu] = useState<IMenuItem<number>[]>(menuMock);
  const [files, setFiles] = useState<IFile[]>([]);
  const [gridCols, setGridCols] = useState(4);
  const [seeMoreModal, { open, close }] = useDisclosure(false);
  const { primary, secondary } = useThemes();
  const [filtersOpened, { toggle }] = useDisclosure(false);
  const [filtersManagerModal, handleFiltersManagerModal] = useDisclosure(false);
  const [globalFilters, setGlobalFilters] = useState<IFilter[]>(
    SearchableCheckboxListProps,
  );
  const theme = useMantineTheme();

  const accordionItems = [
    { content: CardAction, key: 1, title: 'Action' },
    { content: CardsMetadata, key: 2, title: 'Métadonnées' },
    { content: CardNative, key: 3, title: 'Historique' },
    { content: CardPermissions, key: 4, title: 'Droits' },
    { content: CardIdentity, key: 5, title: 'Cycle de vie' },
  ];

  function handleSearchSubmit(event: FormEvent): void {
    event.preventDefault();
  }

  function handleAddFolder(): void {
    setSidebarMenu(
      sidebarMenu.concat([
        {
          id: flattenNestedObjects(sidebarMenu).length + 1,
          label: 'Nouveau Dossier',
          leftIcon: <FolderPlus />,
        },
      ]),
    );
  }

  function handleFiltersManagerSubmit(filters: IFilter[]): void {
    handleFiltersManagerModal.close();
    setGlobalFilters(filters);
  }

  function getAccordionItems(): ReactElement {
    const items = accordionItems.map((item) => (
      <Accordion.Item key={item.title} value={item.title}>
        <Accordion.Control>{item.title}</Accordion.Control>
        <Accordion.Panel>{item.content}</Accordion.Panel>
      </Accordion.Item>
    ));

    return (
      <NestedProvider theme={primary}>
        <Accordion
          classNames={{
            chevron: classes.accordionChevron,
            content: classes.accordionContent,
            control: classes.accordionControl,
            item: classes.accordionItem,
          }}
          defaultValue="Métadonnées"
          variant="filled"
        >
          {items}
        </Accordion>
      </NestedProvider>
    );
  }

  return (
    <AppShell
      classNames={{ main: classes.main }}
      header={{ height: 90 }}
      padding={0}
    >
      <AppShell.Header>
        <Header
          childrenComponent="nav"
          left={headerLeft}
          mobileProps={{ left: headerLeftMobile, right: headerRightMobile }}
          onSearchChange={setSearch}
          onSearchSubmit={handleSearchSubmit}
          right={headerRight}
          searchTheme={primary}
          searchValue={search}
        >
          {headerContent}
        </Header>
      </AppShell.Header>
      <AppShell.Main>
        <FoldableColumnLayout
          onChangeIsColumnVisible={(isVisible) =>
            setGridCols(isVisible ? 4 : 5)
          }
          sidebarContent={
            <Flex direction="column" gap={24}>
              <Button onClick={handleAddFolder} size="md">
                Nouveau dossier
              </Button>
              <SidebarMenu menu={sidebarMenu} />
            </Flex>
          }
          sidebarToggleLabel="Voir l'arborescence"
          topBarRight={
            <Breadcrumbs>
              <a href="#">CALICO</a>
              <a href="#">Clients</a>
              <a href="#">Jean-Michel Dupont</a>
            </Breadcrumbs>
          }
        >
          <NestedProvider theme={secondary}>
            <InfoCard
              content={
                <p
                  aria-hidden="true"
                  onClick={open}
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    fontWeight: 600,
                    margin: '0',
                    verticalAlign: 'center',
                  }}
                >
                  <Eye
                    size={18}
                    style={{ margin: 'auto 10px auto 0' }}
                    weight="bold"
                  />
                  Voir les propriétés du dossier
                </p>
              }
              contentItems={[
                {
                  icon: (
                    <User color={getThemeColor(theme.primaryColor, theme)} />
                  ),
                  iconProps: { color: 'cyan' },
                  label: 'N°6754389',
                },
                {
                  icon: (
                    <Suitcase
                      color={getThemeColor(theme.primaryColor, theme)}
                    />
                  ),
                  iconProps: { color: 'cyan' },
                  label: 'Contrat Individuel',
                },
              ]}
              p="32px 48px"
              title={<h1 style={{ margin: 0 }}>Jean-Michel DUPONT</h1>}
            >
              <Dropzone
                browseLabel="Parcourir votre appareil"
                dragLabel="Glissez vos documents ici"
                files={files}
                onDrop={setFiles}
                onRemoveFile={(file) =>
                  setFiles(files.filter((f) => f !== file))
                }
              />
            </InfoCard>
          </NestedProvider>
          <div className={classes.sizeMobile}>
            <TableGridView
              actions={actions}
              data={data}
              gridProps={{ ...gridProps, cols: gridCols }}
              mt={24}
              style={{ gap: 20, padding: 16 }}
              tableProps={{
                ...tableProps,
                enableRowSelection: false,
                enableSelectAll: false,
                initialState: {
                  ...tableProps.initialState,
                  columnPinning: { right: undefined },
                },
              }}
              topBarLeft={
                <div className={classes.filtersMobileButton}>
                  <Button
                    fullWidth
                    onClick={toggle}
                    rightSection={filtersOpened ? <CaretUp /> : <CaretDown />}
                  >
                    {filtersOpened
                      ? 'Masquer les filtres'
                      : 'Afficher les filtres'}
                  </Button>
                </div>
              }
              topContent={
                <Collapse
                  className={classes.filtersCollapse}
                  in={filtersOpened}
                >
                  <FilterList
                    direction="column"
                    filters={globalFilters}
                    filtersManageLabel="Gérer les filtres"
                    onSubmit={action('Filters submitted')}
                    submitLabel="Filtrer"
                  />
                </Collapse>
              }
            />
          </div>
          <div className={classes.sizeDesktop}>
            <TableGridView
              actions={actions}
              data={data}
              gridProps={{ ...gridProps, cols: gridCols }}
              mt={24}
              style={{ gap: 20, padding: 16 }}
              tableProps={tableProps}
              topBarLeft={
                <FilterList
                  filters={globalFilters}
                  filtersManageLabel="Gérer les filtres"
                  onSubmit={action('Filters submitted')}
                  submitLabel="Filtrer"
                />
              }
              topContent={
                <Collapse
                  className={classes.filtersCollapse}
                  in={filtersOpened}
                >
                  <FilterList
                    direction="column"
                    filters={globalFilters}
                    filtersManageLabel="Gérer les filtres"
                    onSubmit={action('Filters submitted')}
                    submitLabel="Filtrer"
                  />
                </Collapse>
              }
            />
          </div>
        </FoldableColumnLayout>
      </AppShell.Main>
      <Modal
        classNames={{
          body: classes.modalBody,
          close: classes.modalClose,
        }}
        onClose={close}
        opened={seeMoreModal}
        size="xl"
      >
        <h3 className={classes.modalTitle}>Propriétés du dossier</h3>
        {getAccordionItems()}
      </Modal>
      <Modal
        centered
        classNames={{ title: classes.filtersManagerModalTitle }}
        onClose={handleFiltersManagerModal.close}
        opened={filtersManagerModal}
        size="md"
        title="Gérer les filtres"
      >
        <SearchableCheckboxList<IFilter>
          buttonLabel="Valider les modifications"
          checkboxes={globalFilters}
          onClickButton={handleFiltersManagerSubmit}
          placeholder="Chercher dans les filtres"
        />
      </Modal>
    </AppShell>
  );
}
