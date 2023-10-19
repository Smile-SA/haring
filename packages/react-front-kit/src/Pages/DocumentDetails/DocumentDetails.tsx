'use client';

import type { ReactElement } from 'react';

import {
  ActionIcon,
  AppShell,
  Avatar,
  Button,
  Flex,
  Grid,
  Group,
  MantineProvider,
  Menu,
  Space,
  Tabs,
  rem,
} from '@mantine/core';
import { createStyles } from '@mantine/styles';
import { CaretLeft, Plus, Star } from '@phosphor-icons/react';
import { FolderMove, primaryTheme } from '@smile/react-front-kit-shared';

import { DropdownButton } from '../../Components/DropdownButton/DropdownButton';
import { Header } from '../../Components/Header/Header';
import { ResponsiveTabs } from '../../Components/ResponsiveTabs/ResponsiveTabs';

import {
  CardAction,
  CardIdentity,
  CardMetadata,
  CardNative,
  CardPermissions,
} from './DocumentDetails.mock';

const theme = primaryTheme;
theme.colorScheme = 'dark';
theme.focusRingStyles = {
  // Default orange for focus-ring on all elements and Input-based components
  inputStyles: (theme) => ({
    outline: `${rem(2)} solid ${theme.colors.orange[5]}`,
  }),
  styles: (theme) => ({
    outline: `${rem(2)} solid ${theme.colors.orange[5]}`,
  }),
};

const useStyles = createStyles((theme) => ({
  actionIcons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  colLeftBar: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  colRight: {
    background: theme.fn.primaryColor(),
    padding: '40px 64px',
  },
  document: {
    aspectRatio: '3/4',
    background: 'white',
    boxShadow:
      '0px 3.4348926544189453px 2.7479140758514404px 0px rgba(0, 0, 0, 0.0155),' +
      '0px 8.687101364135742px 6.949680805206299px 0px rgba(0, 0, 0, 0.0222),' +
      '0px 17.720870971679688px 14.176697731018066px 0px rgba(0, 0, 0, 0.0278),' +
      '0px 36.501644134521484px 29.201316833496094px 0px rgba(0, 0, 0, 0.0345),' +
      '0px 100px 80px 0px rgba(0, 0, 0, 0.05)',
    width: '100%',
  },
  grid: {
    height: '100%',
  },
  spacer: {
    flex: 1,
    height: 0,
  },
  tab: {
    fontSize: 18,
    fontWeight: 600,
  },
}));

/**
 * Example Page of a document preview, actions and attributes in a `ResponsiveTabs` component
 */
export function DocumentDetails(): ReactElement {
  const { classes } = useStyles();

  const tabs = [
    <Tabs.Tab key={1} className={classes.tab} id="tab-1" value="1">
      Actions
    </Tabs.Tab>,
    <Tabs.Tab
      key={2}
      className={classes.tab}
      data-testid="test-tab"
      id="tab-1"
      value="2"
    >
      Métadonnées
    </Tabs.Tab>,
    <Tabs.Tab key={3} className={classes.tab} value="3">
      Historique
    </Tabs.Tab>,
    <Tabs.Tab key={4} className={classes.tab} value="4">
      Droits
    </Tabs.Tab>,
    <Tabs.Tab key={5} className={classes.tab} value="5">
      Cycle de vie
    </Tabs.Tab>,
  ];

  return (
    <AppShell
      header={
        <Header
          childrenComponent="nav"
          left={<img alt="logo" height="58" src="./logo.svg" width="128" />}
          right={
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
              <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
            </>
          }
          searchTheme={primaryTheme}
        >
          <a href="#">Espace documentaire</a>
          <a href="#">Espace workflow</a>
          <a href="#">Archives</a>
        </Header>
      }
      padding={0}
    >
      <Grid className={classes.grid} grow m={0}>
        <Grid.Col span={6}>
          <Flex align="flex-start" direction="column" p="26px 64px">
            <div className={classes.colLeftBar}>
              <Button leftIcon={<CaretLeft />} p={0} variant="transparent">
                <span style={{ fontSize: 14 }}>Retour à la liste</span>
              </Button>
              <div className={classes.spacer} />
              <div className={classes.actionIcons}>
                <ActionIcon radius={4} size={40} variant="light">
                  <Star size={17} />
                </ActionIcon>
                <ActionIcon radius={4} size={40} variant="light">
                  <FolderMove size={17} />
                </ActionIcon>
              </div>
            </div>
            <Space h="xl" />
            <div className={classes.document} />
          </Flex>
        </Grid.Col>
        <Grid.Col className={classes.colRight} span={4}>
          <MantineProvider theme={theme}>
            <ResponsiveTabs defaultValue="1" tabs={tabs}>
              <Space h="xl" />
              <Tabs.Panel value="1">
                <>{CardAction}</>
                <Space h="xl" />
                <>{CardMetadata}</>
                <Space h="xl" />
                <>{CardPermissions}</>
              </Tabs.Panel>
              <Tabs.Panel value="2">
                <>{CardNative}</>
                <Space h="xl" />
                <>{CardIdentity}</>
                <Space h="xl" />
                <Group grow>
                  <Button leftIcon={<Plus />}>Nouvelle métadonnées</Button>
                </Group>
              </Tabs.Panel>
              <Tabs.Panel value="3">{CardNative}</Tabs.Panel>
              <Tabs.Panel value="4">{CardPermissions}</Tabs.Panel>
              <Tabs.Panel value="5">{CardIdentity}</Tabs.Panel>
            </ResponsiveTabs>
          </MantineProvider>
        </Grid.Col>
      </Grid>
    </AppShell>
  );
}
