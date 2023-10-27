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
import { useUncontrolled } from '@mantine/hooks';
import { createStyles } from '@mantine/styles';
import { baseTheme } from '@smile/react-front-kit-shared';

const useStyles = createStyles((_, boxTheme: MantineThemeOverride) => ({
  box: {
    background:
      boxTheme.colorScheme === 'dark' ? boxTheme.black : boxTheme.white,
    position: 'relative',
    width: '100%',
  },
  motif: {
    left: -40,
    position: 'absolute',
    top: -60,
    zIndex: 0,
  },
  motifContainer: {
    height: '100%',
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    width: '100%',
  },
}));

export interface IFoldableColumnLayoutProps {
  appShellProps?: Omit<AppShellProps, 'children'>;
  boxMotif?: ReactNode;
  boxProps?: BoxProps;
  children: ReactNode;
  containerProps?: ContainerProps;
  isColumnVisible?: boolean;
  isColumnVisibleDefaultValue?: boolean;
  onChangeIsColumnVisible?: (isVisible: boolean) => void;
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
    isColumnVisible,
    isColumnVisibleDefaultValue = true,
    onChangeIsColumnVisible,
    sidebarContent,
    sidebarToggleLabel = 'Display sidebar',
    topBarRight,
    topBlock,
    topBlockTheme = baseTheme,
  } = props;
  const [isColumnVisibleState, handleIsColumnVisibleChange] =
    useUncontrolled<boolean>({
      defaultValue: isColumnVisibleDefaultValue,
      finalValue: true,
      onChange: onChangeIsColumnVisible,
      value: isColumnVisible,
    });
  const { classes } = useStyles(topBlockTheme);

  function handleSidebarVisibleToggle(e: ChangeEvent<HTMLInputElement>): void {
    handleIsColumnVisibleChange(Boolean(e.target.checked));
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
          {Boolean(boxMotif) && (
            <div className={classes.motifContainer}>
              <div className={classes.motif}>{boxMotif}</div>
            </div>
          )}
          {Boolean(topBlock) && (
            <Grid grow>
              <Grid.Col span={1}>{topBlock}</Grid.Col>
            </Grid>
          )}
          <Grid>
            <Grid.Col span={3}>
              <Switch
                checked={isColumnVisibleState}
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
        <Grid gutter="xl" pt={12}>
          <Grid.Col
            aria-hidden={!isColumnVisibleState}
            hidden={!isColumnVisibleState}
            span={3}
          >
            {sidebarContent}
          </Grid.Col>
          <Grid.Col span="auto">{children}</Grid.Col>
        </Grid>
      </Container>
    </AppShell>
  );
}
