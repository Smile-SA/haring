'use client';

import type {
  BoxProps,
  ContainerProps,
  MantineThemeOverride,
} from '@mantine/core';
import type { AppShellProps } from '@mantine/core/lib/AppShell/AppShell';
import type { ChangeEvent, ReactElement, ReactNode } from 'react';

import {
  AppShell,
  Box,
  Container,
  Grid,
  MantineProvider,
  Switch,
  Text,
} from '@mantine/core';
import { createStyles } from '@mantine/styles';
import { baseTheme } from '@smile/react-front-kit-shared';
import { useState } from 'react';

const useStyles = createStyles((_, boxTheme: MantineThemeOverride) => ({
  box: {
    background: boxTheme.black,
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
  },
  motif: {
    left: -40,
    position: 'absolute',
    top: -60,
    zIndex: 0,
  },
}));

export interface IFoldableColumnLayoutProps {
  appShellProps?: Omit<AppShellProps, 'children'>;
  boxMotif?: ReactNode;
  boxProps?: BoxProps;
  children: ReactNode;
  containerProps?: ContainerProps;
  sidebarContent: ReactNode;
  sidebarToggleLabel?: string;
  topBarRight?: ReactNode;
  topBlock?: ReactNode;
  topBlockTheme?: MantineThemeOverride;
}

/**
 * Layout with header and grid content with foldable left sidebar
 */
export function FoldableColumnLayout(
  props: IFoldableColumnLayoutProps,
): ReactElement {
  const {
    appShellProps,
    boxMotif,
    boxProps,
    children,
    containerProps,
    sidebarContent,
    sidebarToggleLabel = 'Display sidebar',
    topBarRight,
    topBlock,
    topBlockTheme = baseTheme,
  } = props;
  const [isColumnVisible, setIsColumnVisible] = useState(true);
  const { classes } = useStyles(topBlockTheme);

  function handleSidebarVisibleToggle(e: ChangeEvent<HTMLInputElement>): void {
    setIsColumnVisible(Boolean(e.target.checked));
  }

  return (
    <AppShell padding={0} {...appShellProps}>
      <MantineProvider theme={topBlockTheme}>
        <Box
          className={classes.box}
          color="primary"
          p="40px 64px 0 64px"
          {...boxProps}
        >
          {Boolean(boxMotif) && <div className={classes.motif}>{boxMotif}</div>}
          {Boolean(topBlock) && (
            <Grid grow>
              <Grid.Col span={1}>{topBlock}</Grid.Col>
            </Grid>
          )}
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
            <Grid.Col span={9}>{topBarRight}</Grid.Col>
          </Grid>
        </Box>
      </MantineProvider>
      <Container fluid p="24px 64px 40px 64px" {...containerProps}>
        <Grid grow gutter="xl" pt={12}>
          <Grid.Col
            aria-hidden={!isColumnVisible}
            hidden={!isColumnVisible}
            span={3}
          >
            {sidebarContent}
          </Grid.Col>
          <Grid.Col span={9}>{children}</Grid.Col>
        </Grid>
      </Container>
    </AppShell>
  );
}
