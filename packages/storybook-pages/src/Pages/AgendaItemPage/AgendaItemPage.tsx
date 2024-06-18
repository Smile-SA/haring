'use client';

import type { ReactElement } from 'react';

import { AppShell, Button, Tabs } from '@mantine/core';
import {
  Breadcrumbs,
  FoldableColumnLayout,
  SidebarMenu,
} from '@smile/haring-react';
import { useState } from 'react';

import { breadcrumbsMock, menusMock, tabsMock } from './AgendaItemPage.mock';
import classes from './AgendaItemPage.module.css';

export function AgendaItemPage(): ReactElement {
  const toggleLabel = `Voir l'ordre du jour`;

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
              onSelectedChange={(v) => (v ? setOpenedMenu(v) : null)}
              selectedValue={openedMenu}
            />
          }
          sidebarToggleLabel={toggleLabel}
          topBarRight={<Breadcrumbs>{...breadcrumbsMock}</Breadcrumbs>}
        >
          <div className={classes.box}>
            <Tabs onChange={setActiveTab} value={activeTab}>
              <Tabs.List>
                <Tabs.Tab value="order">Ordre du jour</Tabs.Tab>
                <Tabs.Tab value="details">Détails</Tabs.Tab>
                <Tabs.Tab value="conflicts">Conflits d&apos;intérêt</Tabs.Tab>
                <Tabs.Tab value="sends">Envois</Tabs.Tab>
                <Tabs.Tab value="pv">PV</Tabs.Tab>
                <Tabs.Tab value="decisions">Décisions</Tabs.Tab>
                <Tabs.Tab value="history">Historique</Tabs.Tab>
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
              <Button onClick={handlePrevious}>Précédent</Button>
              <Button onClick={handleNext}>Suivant</Button>
            </div>
          </div>
        </FoldableColumnLayout>
      </AppShell.Main>
    </AppShell>
  );
}
