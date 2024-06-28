'use client';

import type { IFile } from '@smile/haring-react-dropzone';
import type { IFilter } from '@smile/haring-react-shared';
import type { FormEvent, ReactElement } from 'react';

import {
  Accordion,
  AppShell,
  Button,
  Collapse,
  Flex,
  Input,
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
  InfoBox,
  SearchableList,
  SidebarMenu,
  flattenNestedObjects,
} from '@smile/haring-react';
import { Dropzone } from '@smile/haring-react-dropzone';
import { NestedProvider, useThemes } from '@smile/haring-react-shared';
import { TableGridView } from '@smile/haring-react-table';
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
  SearchableListProps,
  actions,
  data,
  gridProps,
  menuMock,
  tableProps,
  texts,
} from './BrowsingPage.mock';
import classes from './BrowsingPage.module.css';

/**
 * Primary UI component for user interaction
 */
export function BrowsingPage(): ReactElement {
  const [search, setSearch] = useState('');
  const [currentModalIsNewFolder, setCurrentModalIsNewFolder] =
    useState<boolean>(false);

  const [newFolderNameInput, setNewFolderNameInput] = useState(texts.newFolder);
  const [sidebarMenu, setSidebarMenu] = useState(menuMock);
  const [files, setFiles] = useState<IFile[]>([]);
  const [gridCols, setGridCols] = useState(4);
  const [seeMoreModal, { open, close }] = useDisclosure(false);
  const { primary, secondary } = useThemes();
  const [filtersOpened, { toggle }] = useDisclosure(false);
  const [filtersManagerModal, handleFiltersManagerModal] = useDisclosure(false);
  const [globalFilters, setGlobalFilters] =
    useState<IFilter[]>(SearchableListProps);
  const theme = useMantineTheme();

  const accordionItems = [
    { content: CardAction, key: 1, title: texts.action },
    { content: CardsMetadata, key: 2, title: texts.metaData },
    { content: CardNative, key: 3, title: texts.history },
    { content: CardPermissions, key: 4, title: texts.rights },
    { content: CardIdentity, key: 5, title: texts.lifeCycle },
  ];

  function handleSearchSubmit(event: FormEvent): void {
    event.preventDefault();
  }

  function handleClickNewFolderSubmitButton(): void {
    setSidebarMenu(
      sidebarMenu.concat([
        {
          id: flattenNestedObjects(sidebarMenu).length + 1,
          label:
            newFolderNameInput.trim().length > 0
              ? newFolderNameInput
              : texts.newFolder,
          leftIcon: <FolderPlus />,
        },
      ]),
    );
    setNewFolderNameInput(texts.newFolder);
    close();
    setCurrentModalIsNewFolder(false);
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
          defaultValue={texts.metaData}
          variant="filled"
        >
          {items}
        </Accordion>
      </NestedProvider>
    );
  }

  function getNewFolderNameInput(): ReactElement {
    return (
      <div className={classes.newFolderModalContent} style={{ gap: '20px' }}>
        <Input.Wrapper label={texts.folderName}>
          <Input
            onChange={(e) => setNewFolderNameInput(e.target.value)}
            value={newFolderNameInput}
          />
        </Input.Wrapper>
        <Button onClick={() => handleClickNewFolderSubmitButton()}>
          {texts.send}
        </Button>
      </div>
    );
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
              <Button
                onClick={() => {
                  setCurrentModalIsNewFolder(true);
                  open();
                }}
                size="md"
              >
                {texts.newFolder}
              </Button>
              <SidebarMenu menu={sidebarMenu} />
            </Flex>
          }
          sidebarToggleLabel={texts.seeDirectoryTree}
          topBarRight={
            <Breadcrumbs>
              <a href="#">{texts.calico}</a>
              <a href="#">{texts.clients}</a>
              <a href="#">Jean-Michel Dupont</a>
            </Breadcrumbs>
          }
        >
          <NestedProvider theme={secondary}>
            <InfoBox
              content={
                <p
                  aria-hidden="true"
                  onClick={() => {
                    setCurrentModalIsNewFolder(false);
                    open();
                  }}
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
                  {texts.displayFolderProperties}
                </p>
              }
              contentItems={[
                {
                  icon: (
                    <User color={getThemeColor(theme.colors.cyan[9], theme)} />
                  ),
                  iconProps: { color: 'cyan' },
                  label: 'N°6754389',
                },
                {
                  icon: (
                    <Suitcase
                      color={getThemeColor(theme.colors.cyan[9], theme)}
                    />
                  ),
                  iconProps: { color: 'cyan' },
                  label: texts.individualContract,
                },
              ]}
              p="32px 48px"
              title={<h1 style={{ margin: 0 }}>Jean-Michel DUPONT</h1>}
            >
              <Dropzone
                browseLabel={texts.browserLabel}
                dragLabel={texts.dragLabel}
                files={files}
                onDrop={setFiles}
                onRemoveFile={(file) =>
                  setFiles(files.filter((f) => f !== file))
                }
              />
            </InfoBox>
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
                    {filtersOpened ? texts.hideFilters : texts.displayFilters}
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
                    filtersManageLabel={texts.manageFilters}
                    submitLabel={texts.filter}
                  />
                </Collapse>
              }
            />
          </div>
          <div className={classes.sizeDesktop}>
            <TableGridView
              actions={actions}
              data={data}
              gridProps={{
                ...gridProps,
                actionBarProps: { maxVisibleActions: 1 },
                cols: gridCols,
              }}
              mt={24}
              style={{ gap: 20, padding: 16 }}
              tableProps={tableProps}
              topBarLeft={
                <FilterList
                  filters={globalFilters}
                  filtersManageLabel={texts.manageFilters}
                  submitLabel={texts.filter}
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
                    filtersManageLabel={texts.manageFilters}
                    submitLabel={texts.filter}
                  />
                </Collapse>
              }
            />
          </div>
        </FoldableColumnLayout>
      </AppShell.Main>
      <NestedProvider theme={secondary}>
        <Modal
          centered
          classNames={{
            body: classes.modalBody,
            close: classes.modalClose,
          }}
          onClose={close}
          opened={seeMoreModal}
          size="xl"
        >
          <h3 className={classes.modalTitle}>
            {currentModalIsNewFolder ? texts.newFolder : texts.folderProperties}
          </h3>
          {currentModalIsNewFolder
            ? getNewFolderNameInput()
            : getAccordionItems()}
        </Modal>
      </NestedProvider>
      <Modal
        centered
        classNames={{ title: classes.filtersManagerModalTitle }}
        onClose={handleFiltersManagerModal.close}
        opened={filtersManagerModal}
        size="md"
        title={texts.manageFilters}
      >
        <SearchableList<IFilter>
          checkboxes={globalFilters}
          onClickButton={handleFiltersManagerSubmit}
          placeholder={texts.searchInFilters}
          submitButtonLabel={texts.validateModification}
        />
      </Modal>
    </AppShell>
  );
}
