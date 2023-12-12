'use client';

import type { IFile } from '@smile/react-front-kit-dropzone';
import type { FormEvent, ReactElement } from 'react';

import {
  Accordion,
  AppShell,
  Button,
  Flex,
  MantineProvider,
  Modal,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Eye, FolderPlus, Suitcase, User } from '@phosphor-icons/react';
import {
  Breadcrumbs,
  FoldableColumnLayout,
  Header,
  InfoCard,
  SidebarMenu,
  flattenNestedObjects,
} from '@smile/react-front-kit';
import { menuMock } from '@smile/react-front-kit/mock';
import { Dropzone } from '@smile/react-front-kit-dropzone';
import { primaryTheme, secondaryTheme } from '@smile/react-front-kit-shared';
import { TableGridView } from '@smile/react-front-kit-table';
import { useState } from 'react';

import {
  CardAction,
  CardIdentity,
  CardNative,
  CardPermissions,
  CardsMetadata,
  headerContent,
  headerLeft,
  headerRight,
} from '../pages.mock';

import { actions, data, gridProps, tableProps } from './BrowsingPage.mock';
import { useStyles } from './BrowsingPage.style';

/**
 * Primary UI component for user interaction
 */
export function BrowsingPage(): ReactElement {
  const [search, setSearch] = useState('');
  const [sidebarMenu, setSidebarMenu] = useState(menuMock);
  const [files, setFiles] = useState<IFile[]>([]);
  const [gridCols, setGridCols] = useState(4);
  const [seeMoreModal, { open, close }] = useDisclosure(false);

  const { classes } = useStyles();
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

  function getAccordionItems(): ReactElement {
    const items = accordionItems.map((item) => (
      <Accordion.Item key={item.title} value={item.title}>
        <Accordion.Control>{item.title}</Accordion.Control>
        <Accordion.Panel>{item.content}</Accordion.Panel>
      </Accordion.Item>
    ));

    return (
      <MantineProvider theme={primaryTheme}>
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
      </MantineProvider>
    );
  }

  return (
    <AppShell
      header={
        <Header
          childrenComponent="nav"
          left={headerLeft}
          onSearchChange={setSearch}
          onSearchSubmit={handleSearchSubmit}
          right={headerRight}
          searchTheme={primaryTheme}
          searchValue={search}
        >
          {headerContent}
        </Header>
      }
      padding={0}
    >
      <FoldableColumnLayout
        onChangeIsColumnVisible={(isVisible) => setGridCols(isVisible ? 4 : 5)}
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
        <MantineProvider theme={secondaryTheme}>
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
                icon: <User color={theme.fn.primaryColor()} />,
                label: 'N°6754389',
              },
              {
                icon: <Suitcase color={theme.fn.primaryColor()} />,
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
              onRemoveFile={(file) => setFiles(files.filter((f) => f !== file))}
            />
          </InfoCard>
        </MantineProvider>
        <TableGridView
          actions={actions}
          data={data}
          gridProps={{ ...gridProps, cols: gridCols }}
          mt={24}
          style={{ gap: 20, paddingTop: 12 }}
          tableProps={tableProps}
        />
      </FoldableColumnLayout>
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
    </AppShell>
  );
}
