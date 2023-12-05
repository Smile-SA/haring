'use client';

import type { IFiltersItem } from './SidebarFilterMenu/SidebarFilterMenu';
import type { ReactElement, ReactNode } from 'react';

import { ActionIcon, Badge, Box, Button, Group } from '@mantine/core';
import { CaretDown, CaretUp, TrashSimple, X } from '@phosphor-icons/react';
import { useState } from 'react';

import { CollapseButtonControlled } from '../CollapseButton/CollapseButtonControlled';

import { useStyles } from './Filters.style';
import { SidebarFilterMenu } from './SidebarFilterMenu/SidebarFilterMenu';

export interface ISidebarFilter {
  categoryId: (number | string)[];
  id: number | string;
  label: string;
  onRemove?: (filter: ISidebarFilter) => void;
  value: unknown;
}

export interface IFiltersProps {
  activeFilters?: ISidebarFilter[] | [];
  closeAllFiltersLabel?: string;
  deleteButtonLabel?: string;
  filterButtonLabel?: string;
  onCloseAllFilters: () => void;
  onDeleteButtonClick?: (filters: ISidebarFilter[]) => void;
  onFilterButtonClick?: (filters: ISidebarFilter[]) => void;
  onOpenAllFilters: () => void;
  openAllFiltersLabel?: string;
  openedMenuIds?: (number | string)[];
  sideBarFiltersMenu?: IFiltersItem<number | string>[] | undefined;
  title?: ReactNode;
}

export function Filters(props: IFiltersProps): ReactElement {
  const {
    activeFilters = [],
    closeAllFiltersLabel = 'Close all',
    title = 'Active filters',
    sideBarFiltersMenu = [],
    onCloseAllFilters,
    onDeleteButtonClick,
    onFilterButtonClick,
    onOpenAllFilters,
    openAllFiltersLabel = 'Open all',
    deleteButtonLabel = 'Remove all',
    filterButtonLabel = 'Filter',
    openedMenuIds = [],
  } = props;
  const { classes } = useStyles();
  const [activeFiltersCollapseOpened, setActiveFiltersCollapseOpened] =
    useState(true);

  function getFiltersMenuId(
    filtersMenu: IFiltersItem<number | string>[],
  ): (number | string)[] {
    let allFiltersMenuId: (number | string)[] = [];
    for (const element of filtersMenu) {
      allFiltersMenuId.push(element.id);
      if (element.children) {
        allFiltersMenuId = allFiltersMenuId.concat(
          getFiltersMenuId(element.children),
        );
      }
    }
    return allFiltersMenuId;
  }

  function areEqualArrays(
    arr1: (number | string)[],
    arr2: (number | string)[],
  ): boolean {
    if (arr1.length !== arr2.length) {
      return false;
    }

    const sortedArr1: string[] = arr1.map((element) => String(element)).sort();
    const sortedArr2: string[] = arr2.map((element) => String(element)).sort();

    return JSON.stringify(sortedArr1) === JSON.stringify(sortedArr2);
  }

  function countOccurrences(
    tableau: (number | string)[],
  ): Record<string, number> {
    const occurrences: Record<string, number> = {};

    tableau.forEach((element) => {
      occurrences[element] = (occurrences[element] || 0) + 1;
    });

    const result: Record<string, number> = {};
    for (const element in occurrences) {
      result[element] = occurrences[element];
    }

    return result;
  }

  function replaceLabelValue(
    occurrencesArray: Record<string, number>,
    sideBarFiltersMenu: IFiltersItem<number | string>[] | undefined,
  ): IFiltersItem<number | string>[] {
    const newSidebareFiltersMenu = sideBarFiltersMenu?.map((element) => {
      if (Object.hasOwn(occurrencesArray, element.id)) {
        element.label = `${String(element.label).replace(/\([^)]*\)/g, '')} (${
          occurrencesArray[element.id]
        })`;
        element.children = replaceLabelValue(
          occurrencesArray,
          element.children,
        );
      }
      return element;
    });

    if (newSidebareFiltersMenu !== undefined) {
      return newSidebareFiltersMenu;
    }
    return [];
  }

  function addActiveFiltersNumber(
    sideBarFiltersMenu: IFiltersItem<number | string>[],
    activeFilters: ISidebarFilter[],
  ): IFiltersItem<number | string>[] {
    const categoryArray = [];

    for (const i of activeFilters) {
      for (const a of i.categoryId) {
        categoryArray.push(a);
      }
    }

    const occurrencesArray = countOccurrences(categoryArray);

    replaceLabelValue(occurrencesArray, sideBarFiltersMenu);
    return sideBarFiltersMenu;
  }
  return (
    <Box className={classes.root}>
      <div className={classes.top}>
        <CollapseButtonControlled
          classNames={{
            inner: classes.activeFiltersCollapseInner,
            label: classes.activeFiltersCollapseLabel,
            root: classes.activeFiltersCollapseRoot,
          }}
          fullWidth
          isOpenOnSelect
          label={
            <span className={classes.title}>
              {title} ({activeFilters.length})
            </span>
          }
          onSelect={() => {
            setActiveFiltersCollapseOpened(!activeFiltersCollapseOpened);
          }}
          opened={activeFiltersCollapseOpened}
          rightIcon={
            <ActionIcon
              data-testid="toggle"
              onClick={() => {
                setActiveFiltersCollapseOpened(!activeFiltersCollapseOpened);
              }}
              radius="sm"
              variant="transparent"
            >
              {activeFiltersCollapseOpened ? (
                <CaretUp color="white" />
              ) : (
                <CaretDown color="white" />
              )}
            </ActionIcon>
          }
        >
          <div className={classes.activeFilters}>
            {activeFilters.map((filter) => (
              <Badge
                key={filter.id}
                classNames={{
                  inner: classes.badgeInner,
                  rightSection: classes.badgeRight,
                  root: classes.badgeRoot,
                }}
                onClick={() => filter.onRemove?.(filter)}
                pr={3}
                rightSection={<X size={10} />}
                size="xl"
                variant="outline"
              >
                {filter.label}
              </Badge>
            ))}
          </div>
        </CollapseButtonControlled>
      </div>
      <div className={classes.middle}>
        <Group className={classes.controlledMenu}>
          {openedMenuIds.length > 0 && (
            <span
              aria-hidden="true"
              className={classes.controlledMenuButton}
              onClick={() => onCloseAllFilters()}
            >
              - {closeAllFiltersLabel}
            </span>
          )}
          <span className={classes.controlledMenuLine} />
          {!areEqualArrays(
            openedMenuIds,
            getFiltersMenuId(sideBarFiltersMenu),
          ) && (
            <span
              aria-hidden="true"
              className={classes.controlledMenuButton}
              onClick={() => onOpenAllFilters()}
            >
              + {openAllFiltersLabel}
            </span>
          )}
        </Group>
        <SidebarFilterMenu
          menu={
            sideBarFiltersMenu.length > 0
              ? addActiveFiltersNumber(sideBarFiltersMenu, activeFilters)
              : undefined
          }
          openedMenuIds={openedMenuIds}
        />
      </div>
      <div className={classes.bottom}>
        <Button
          classNames={{ root: classes.activeFiltersButtonRoot }}
          color="cyan.9"
          onClick={() => onFilterButtonClick?.(activeFilters)}
          variant="filled"
        >
          {filterButtonLabel} ({activeFilters.length})
        </Button>
        <Button
          classNames={{ root: classes.removeAllFiltersButtonRoot }}
          color="dark"
          leftIcon={<TrashSimple size={12} />}
          onClick={() => onDeleteButtonClick?.(activeFilters)}
          variant="outline"
        >
          {deleteButtonLabel} ({activeFilters.length})
        </Button>
      </div>
    </Box>
  );
}
