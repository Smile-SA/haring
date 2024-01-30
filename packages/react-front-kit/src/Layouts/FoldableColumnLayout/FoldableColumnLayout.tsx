'use client';

import type {
  BoxProps,
  ContainerProps,
  MantineThemeOverride,
} from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import {
  Box,
  Button,
  Container,
  Grid,
  Switch,
  Text,
} from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import { NestedProvider, useMainTheme } from '@smile/react-front-kit-shared';

import { useStyles } from './FoldableColumnLayout.style';

export interface IFoldableColumnLayoutProps {
  boxMotif?: ReactNode;
  boxProps?: BoxProps;
  children: ReactNode;
  containerProps?: ContainerProps;
  defaultIsColumnVisible?: boolean;
  isColumnVisible?: boolean;
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
    boxMotif,
    boxProps,
    children,
    containerProps,
    defaultIsColumnVisible = true,
    isColumnVisible,
    onChangeIsColumnVisible,
    sidebarContent,
    sidebarToggleLabel = 'Display sidebar',
    topBarRight,
    topBlock,
    topBlockTheme,
  } = props;
  const [isColumnVisibleState, handleIsColumnVisibleChange] =
    useUncontrolled<boolean>({
      defaultValue: defaultIsColumnVisible,
      finalValue: true,
      onChange: onChangeIsColumnVisible,
      value: isColumnVisible,
    });
  const main = useMainTheme();
  const theme = topBlockTheme ?? main;
  const { classes } = useStyles();

  function handleSidebarVisibleToggle(isVisible: boolean): void {
    handleIsColumnVisibleChange(isVisible);
  }

  return (
    <>
      <NestedProvider theme={theme}>
        <Box
          className={`${classes.box} ${boxMotif ? classes.boxWithMotif : ''}`}
          color="primary"
          {...boxProps}
        >
          {Boolean(boxMotif) && (
            <div className={classes.motifContainer}>
              <div className={classes.motif}>{boxMotif}</div>
            </div>
          )}
          {Boolean(topBlock) && (
            <Grid className={classes.topBlock} grow>
              <Grid.Col className={classes.topBlockContent} span={1}>
                {topBlock}
              </Grid.Col>
            </Grid>
          )}
          <Grid className={classes.topGrid}>
            <Grid.Col className={classes.topLeft} span={3}>
              <Switch
                checked={isColumnVisibleState}
                id="sidebar-toggle"
                label={
                  <Text fw={600} size="md">
                    {sidebarToggleLabel}
                  </Text>
                }
                onChange={(e) =>
                  handleSidebarVisibleToggle(Boolean(e.target.checked))
                }
              />
            </Grid.Col>
            {Boolean(topBarRight) && (
              <Grid.Col className={classes.topRight} span={9}>
                {topBarRight}
              </Grid.Col>
            )}
          </Grid>
        </Box>
      </NestedProvider>
      <div
        className={`${classes.collapseButton} ${
          boxMotif ? classes.collapseButtonWithMotif : ''
        }`}
      >
        <Button
          onClick={() => handleSidebarVisibleToggle(!isColumnVisibleState)}
          rightIcon={isColumnVisibleState ? <CaretUp /> : <CaretDown />}
        >
          {sidebarToggleLabel}
        </Button>
      </div>
      <Container className={classes.container} fluid {...containerProps}>
        <Grid className={classes.contentGrid} gutter="xl" pt={12}>
          <Grid.Col
            aria-hidden={!isColumnVisibleState}
            className={classes.sidebar}
            hidden={!isColumnVisibleState}
            span={3}
          >
            {sidebarContent}
          </Grid.Col>
          <Grid.Col
            className={classes.content}
            span={!isColumnVisibleState ? 12 : 9}
          >
            {children}
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
