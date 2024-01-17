'use client';

import type { ReactElement } from 'react';

import {
  ActionIcon,
  AppShell,
  Avatar,
  Button,
  Flex,
  Grid,
  MantineProvider,
  Menu,
  Space,
  Tabs,
} from '@mantine/core';
import { CaretLeft, Star } from '@phosphor-icons/react';
import {
  DropdownButton,
  Header,
  Preview,
  ResponsiveTabs,
} from '@smile/react-front-kit';
import { FolderMove, usePrimaryTheme } from '@smile/react-front-kit-shared';

import {
  CardAction,
  CardIdentity,
  CardMetadata,
  CardNative,
  CardPermissions,
  CardsMetadata,
} from '../pages.mock';

import { useStyles } from './DocumentDetails.style';

/**
 * Example Page of a document preview, actions and attributes in a `ResponsiveTabs` component
 */
export function DocumentDetails(): ReactElement {
  const { classes } = useStyles();
  const primary = usePrimaryTheme();

  const tabs = [
    <Tabs.Tab key={1} id="tab-1" value="1">
      Actions
    </Tabs.Tab>,
    <Tabs.Tab key={2} id="tab-1" value="2">
      Métadonnées
    </Tabs.Tab>,
    <Tabs.Tab key={3} value="3">
      Historique
    </Tabs.Tab>,
    <Tabs.Tab key={4} value="4">
      Droits
    </Tabs.Tab>,
    <Tabs.Tab key={5} value="5">
      Cycle de vie
    </Tabs.Tab>,
  ];

  return (
    <AppShell
      classNames={{ main: classes.main }}
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
          searchTheme={primary}
        >
          <a href="#">Espace documentaire</a>
          <a href="#">Espace workflow</a>
          <a href="#">Archives</a>
        </Header>
      }
      padding={0}
    >
      <Grid className={classes.grid} grow m={0}>
        <Grid.Col span={7}>
          <Flex align="flex-start" direction="column" p="26px 64px">
            <div className={classes.colLeftBar}>
              <Button leftIcon={<CaretLeft />} p={0} variant="transparent">
                <span style={{ fontSize: 14 }}>Retour à la liste</span>
              </Button>
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
            <Preview url="./example.pdf" />
          </Flex>
        </Grid.Col>
        <Grid.Col className={classes.colRight} span={5}>
          <MantineProvider theme={primary}>
            <ResponsiveTabs defaultValue="1" tabs={tabs}>
              <Space h="xl" />
              <Tabs.Panel value="1">
                <>{CardAction}</>
                <Space h="xl" />
                <>{CardMetadata}</>
                <Space h="xl" />
                <>{CardPermissions}</>
              </Tabs.Panel>
              <Tabs.Panel value="2">{CardsMetadata}</Tabs.Panel>
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
