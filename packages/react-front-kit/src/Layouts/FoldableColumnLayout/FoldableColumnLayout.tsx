'use client';

import type { ContainerProps } from '@mantine/core';
import type { AppShellProps } from '@mantine/core/lib/AppShell/AppShell';
import type { ChangeEvent, ReactElement, ReactNode } from 'react';

import { AppShell, Container, Grid, Switch, Text } from '@mantine/core';
import { useState } from 'react';

export interface IFoldableColumnLayoutProps {
  appShellProps?: Omit<AppShellProps, 'children'>;
  children: ReactNode;
  containerProps?: ContainerProps;
  sidebarContent: ReactNode;
  sidebarToggleLabel?: string;
}

/**
 * Layout with header and grid content with foldable left sidebar
 */
export function FoldableColumnLayout(
  props: IFoldableColumnLayoutProps,
): ReactElement {
  const {
    appShellProps,
    children,
    containerProps,
    sidebarContent,
    sidebarToggleLabel = 'Display sidebar',
  } = props;

  const [isColumnVisible, setIsColumnVisible] = useState(true);

  function handleSidebarVisibleToggle(e: ChangeEvent<HTMLInputElement>): void {
    setIsColumnVisible(Boolean(e.target.checked));
  }

  return (
    <AppShell padding={0} {...appShellProps}>
      <Container fluid p="40px 64px" {...containerProps}>
        <Grid grow>
          <Grid.Col span={3}>
            <Switch
              checked={isColumnVisible}
              id="sidebar-toggle"
              label={
                <Text fw={600} size="md">
                  {sidebarToggleLabel}
                </Text>
              }
              onChange={handleSidebarVisibleToggle}
            />
          </Grid.Col>
        </Grid>
        <Grid grow gutter="xl" pt={12}>
          {Boolean(isColumnVisible) && (
            <Grid.Col span={3}>{sidebarContent}</Grid.Col>
          )}
          <Grid.Col span={9}>{children}</Grid.Col>
        </Grid>
      </Container>
    </AppShell>
  );
}
