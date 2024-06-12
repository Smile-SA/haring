'use client';

import type { ReactElement } from 'react';

import { AppShell, Grid, Stack } from '@mantine/core';
import { FoldableColumnLayout, SidebarMenu } from '@smile/haring-react';

import classes from './AgendaItemPage.module.css';

export function AgendaItemPage(): ReactElement {
  return (
    <AppShell
      classNames={{ main: classes.main }}
      header={{ height: { base: 76, lg: 90 } }}
      padding={0}
    >
      <AppShell.Main>
        <FoldableColumnLayout
          onChangeIsColumnVisible={(isVisible) =>
            // setGridCols(isVisible ? 4 : 5)
            console.log(isVisible)
          }
          sidebarContent={<SidebarMenu menu={[]} />}
          sidebarToggleLabel="tmp"
          topBlock={
            <Grid gutter={{ base: 0, md: 'lg' }}>
              <Grid.Col span={3}>fil d ariane</Grid.Col>
              <Grid.Col span={9}>navigation onglets</Grid.Col>
            </Grid>
          }
        >
          <Stack justify="space-between" style={{ height: 300 }}>
            <p>contenu page</p>
            <p>pagination</p>
          </Stack>
        </FoldableColumnLayout>
      </AppShell.Main>
    </AppShell>
  );
}
