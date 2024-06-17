'use client';

import type { ReactElement } from 'react';

import { AppShell, Button, Tabs } from '@mantine/core';
import {
  Breadcrumbs,
  FoldableColumnLayout,
  SidebarMenu,
} from '@smile/haring-react';

import { breadcrumbsMock, menusMock } from './AgendaItemPage.mock';
import classes from './AgendaItemPage.module.css';

export function AgendaItemPage(): ReactElement {
  const toggleLabel = `Voir l'ordre du jour`;

  // TODO: stuff to fix:
  //  have an active menu in sidebar, this is the active page
  //  buttons at the bottom change this menu, change the page content
  //  also link switch state in layout

  return (
    <AppShell classNames={{ main: classes.main }} padding={0}>
      <AppShell.Main>
        <FoldableColumnLayout
          onChangeIsColumnVisible={(isVisible) =>
            // setGridCols(isVisible ? 4 : 5)
            console.log(isVisible)
          }
          sidebarContent={<SidebarMenu menu={menusMock} />}
          sidebarToggleLabel={toggleLabel}
          topBarRight={<Breadcrumbs>{...breadcrumbsMock}</Breadcrumbs>}
        >
          <div className={classes.box}>
            <Tabs defaultValue="order">
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
              <p>Contenu page</p>
            </div>
            <div className={classes.pagination}>
              <Button>Précédent</Button>
              <Button>Suivant</Button>
            </div>
          </div>
        </FoldableColumnLayout>
      </AppShell.Main>
    </AppShell>
  );
}
