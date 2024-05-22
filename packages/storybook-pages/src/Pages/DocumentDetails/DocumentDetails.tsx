'use client';

import type { ReactElement } from 'react';

import {
  ActionIcon,
  AppShell,
  Avatar,
  Button,
  Flex,
  Grid,
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
} from '@smile/haring-react';
import {
  FolderMove,
  NestedProvider,
  usePrimaryTheme,
} from '@smile/haring-react-shared';

import {
  CardAction,
  CardIdentity,
  CardMetadata,
  CardNative,
  CardPermissions,
  CardsMetadata,
} from '../pages.mock';

import classes from './DocumentDetails.module.css';
import { texts } from './DocumentDetailsTexts';

/**
 * Example Page of a document preview, actions and attributes in a `ResponsiveTabs` component
 */
export function DocumentDetails(): ReactElement {
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
      header={{ height: { base: 76, lg: 90 } }}
      padding={0}
    >
      <AppShell.Header>
        <Header
          childrenComponent="nav"
          left={<img alt="logo" height="58" src="./logo.svg" width="128" />}
          right={
            <>
              <DropdownButton label={texts.mySpace}>
                <Menu.Item component="a" href="#">
                  {texts.calico}
                </Menu.Item>
                <Menu.Item component="a" href="#">
                  {texts.mySpace}
                </Menu.Item>
                <Menu.Item component="a" href="#">
                  {texts.adventureAI}
                </Menu.Item>
                <Menu.Item component="a" href="#">
                  {texts.glassesAndCo}
                </Menu.Item>
              </DropdownButton>
              <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
            </>
          }
          searchTheme={primary}
        >
          <a href="#">{texts.spaceDoc}</a>
          <a href="#">{texts.spaceWorkflow}</a>
          <a href="#">{texts.archives}</a>
        </Header>
      </AppShell.Header>
      <AppShell.Main>
        <Grid className={classes.grid} grow m={0} overflow="hidden">
          <Grid.Col span={7}>
            <Flex align="flex-start" direction="column" p="26px 64px">
              <div className={classes.colLeftBar}>
                <Button
                  color="black"
                  leftSection={<CaretLeft />}
                  p={0}
                  variant="transparent"
                >
                  <span style={{ fontSize: 14 }}>{texts.listReturn}</span>
                </Button>
                <div className={classes.actionIcons}>
                  <ActionIcon
                    className={classes.actionIcon}
                    radius={4}
                    size={40}
                    variant="default"
                  >
                    <Star size={17} />
                  </ActionIcon>
                  <ActionIcon
                    className={classes.actionIcon}
                    radius={4}
                    size={40}
                    variant="default"
                  >
                    <FolderMove size={17} />
                  </ActionIcon>
                </div>
              </div>
              <Space h="1.5rem" />
              <Preview url="./example.pdf" />
            </Flex>
          </Grid.Col>
          <Grid.Col className={classes.colRight} span={5}>
            <NestedProvider theme={primary}>
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
            </NestedProvider>
          </Grid.Col>
        </Grid>
      </AppShell.Main>
    </AppShell>
  );
}
