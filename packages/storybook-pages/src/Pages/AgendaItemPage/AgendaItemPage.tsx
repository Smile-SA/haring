'use client';

import type { ReactElement } from 'react';

import { AppShell, Tabs } from '@mantine/core';
import {
  Breadcrumbs,
  FoldableColumnLayout,
  Pagination,
  SidebarMenu,
} from '@smile/haring-react';

import { menusMock } from './AgendaItemPage.mock';
import classes from './AgendaItemPage.module.css';

export function AgendaItemPage(): ReactElement {
  const toggleLabel = `Voir l'ordre du jour`;

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
          topBarRight={
            <Breadcrumbs>
              <a href="#">First level</a>
              <a href="#">Second level</a>
              <a href="#">Third level</a>
            </Breadcrumbs>
          }
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
              <Pagination
                itemsPerPage={1}
                page={1}
                paginationProps={{ withControls: true }}
                totalPages={20}
              />
            </div>
          </div>
        </FoldableColumnLayout>
      </AppShell.Main>
    </AppShell>
  );
}
