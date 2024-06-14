'use client';

import type { ReactElement } from 'react';

import { AppShell, Flex, Stack } from '@mantine/core';
import { FoldableColumnLayout, SidebarMenu } from '@smile/haring-react';

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
          sidebarContent={<SidebarMenu menu={[]} />}
          sidebarToggleLabel={toggleLabel}
          topBarRight={
            <Flex>
              <span>Fil d&apos;ariane</span>
            </Flex>
          }
        >
          <Stack justify="space-between" style={{ height: 300 }}>
            <span>Navigation par onglets</span>
            <p>contenu page</p>
            <p>pagination</p>
          </Stack>
        </FoldableColumnLayout>
      </AppShell.Main>
    </AppShell>
  );
}
