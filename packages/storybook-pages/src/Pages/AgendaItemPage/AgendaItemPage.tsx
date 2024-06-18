'use client';

import type { ReactElement } from 'react';

import { AppShell, Button, Tabs } from '@mantine/core';
import {
  Breadcrumbs,
  FoldableColumnLayout,
  SidebarMenu,
} from '@smile/haring-react';
import { useState } from 'react';

import {
  breadcrumbsMock,
  menusMock,
  tabsMock,
  texts,
} from './AgendaItemPage.mock';
import classes from './AgendaItemPage.module.css';

export function AgendaItemPage(): ReactElement {
  const [openedMenu, setOpenedMenu] = useState<string>(menusMock[0].id);
  const [activeTab, setActiveTab] = useState<string | null>('order');

  function handlePrevious(): void {
    const previousIndex = menusMock.findIndex((m) => m.id === openedMenu) - 1;
    const newOpenedId: string =
      previousIndex === -1
        ? menusMock[menusMock.length - 1].id
        : menusMock[previousIndex].id;
    setOpenedMenu(newOpenedId);
  }

  function handleNext(): void {
    const nextIndex = menusMock.findIndex((m) => m.id === openedMenu) + 1;
    const newOpenedId: string =
      nextIndex > menusMock.length - 1
        ? menusMock[0].id
        : menusMock[nextIndex].id;
    setOpenedMenu(newOpenedId);
  }

  return (
    <AppShell classNames={{ main: classes.main }} padding={0}>
      <AppShell.Main>
        <FoldableColumnLayout
          sidebarContent={
            <SidebarMenu<string>
              defaultSelectedId={openedMenu[0]}
              hasOnlyOneOpenMenu
              menu={menusMock}
              menuOpenValue={[openedMenu]}
              onMenuOpenChange={(v: string[]) => setOpenedMenu(v[0])}
              onSelectedChange={(v?: string) => (v ? setOpenedMenu(v) : null)}
              selectedValue={openedMenu}
            />
          }
          sidebarToggleLabel={texts.toggleLabel}
          topBarRight={<Breadcrumbs>{...breadcrumbsMock}</Breadcrumbs>}
        >
          <div className={classes.box}>
            <Tabs onChange={setActiveTab} value={activeTab}>
              <Tabs.List>
                <Tabs.Tab value="order">{texts.order}</Tabs.Tab>
                <Tabs.Tab value="details">{texts.details}</Tabs.Tab>
                <Tabs.Tab value="conflicts">{texts.conflicts}</Tabs.Tab>
                <Tabs.Tab value="sends">{texts.sends}</Tabs.Tab>
                <Tabs.Tab value="pv">{texts.pv}</Tabs.Tab>
                <Tabs.Tab value="decisions">{texts.decisions}</Tabs.Tab>
                <Tabs.Tab value="history">{texts.history}</Tabs.Tab>
              </Tabs.List>
            </Tabs>
            <div className={classes.content}>
              {
                tabsMock
                  .find((o) => o.id === openedMenu)
                  ?.tabs.find((t) => t.id === activeTab)?.content
              }
            </div>
            <div className={classes.pagination}>
              <Button onClick={handlePrevious}>{texts.previous}</Button>
              <Button onClick={handleNext}>{texts.next}</Button>
            </div>
          </div>
        </FoldableColumnLayout>
      </AppShell.Main>
    </AppShell>
  );
}
