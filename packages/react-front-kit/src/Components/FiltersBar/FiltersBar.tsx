'use client';

import type { IFiltersItem } from './SidebarFilterMenu/SidebarFilterMenu';
import type { ReactElement, ReactNode } from 'react';

import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Group,
  useMantineTheme,
} from '@mantine/core';
import { CaretDown, CaretUp, TrashSimple, X } from '@phosphor-icons/react';
import { useMemo, useState } from 'react';

import { addPathAndDepth, flattenNestedObjects } from '../../helpers';
import { CollapseButtonControlled } from '../CollapseButton/CollapseButtonControlled';

import { useStyles } from './FiltersBar.style';
import { SidebarFilterMenu } from './SidebarFilterMenu/SidebarFilterMenu';

export interface ISidebarFilter {
  categoryId: IId[];
  id: IId;
  label: string;
  onRemove?: (filter: ISidebarFilter) => void;
  value: unknown;
}

type IId = number | string;

export interface IFiltersProps {
  activeFilters?: ISidebarFilter[] | [];
  closeAllFiltersLabel?: string;
  defaultOpenedActiveFilters?: boolean;
  defaultOpenedMenuIds?: IId[];
  deleteButtonLabel?: string;
  filterButtonLabel?: string;
  menus?: IFiltersItem<IId>[] | undefined;
  onDeleteButtonClick?: (filters: ISidebarFilter[]) => void;
  onFilterButtonClick?: (filters: ISidebarFilter[]) => void;
  openAllFiltersLabel?: string;
  title?: ReactNode;
}

export function FiltersBar(props: IFiltersProps): ReactElement {
  const {
    activeFilters = [],
    closeAllFiltersLabel = 'Close all',
    title = 'Active filters',
    menus = [],
    onDeleteButtonClick,
    onFilterButtonClick,
    openAllFiltersLabel = 'Open all',
    deleteButtonLabel = 'Remove all',
    filterButtonLabel = 'Filter',
    defaultOpenedMenuIds = [],
    defaultOpenedActiveFilters = true,
  } = props;
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const flatFilters = useMemo(
    () => flattenNestedObjects(addPathAndDepth(menus)),
    [menus],
  );

  const [activeFiltersCollapseOpened, setActiveFiltersCollapseOpened] =
    useState(defaultOpenedActiveFilters);
  const [openedIds, setOpenedIds] = useState<IId[]>(defaultOpenedMenuIds);

  function addActiveNumberToLabel(
    menus?: IFiltersItem<IId>[],
  ): IFiltersItem<IId>[] | undefined {
    return menus?.map((menu) => ({
      ...menu,
      children: addActiveNumberToLabel(menu.children),
      label: `${menu.label}${
        activeFilters
          .map((activeFilter) => activeFilter.categoryId)
          .flat()
          .includes(menu.id)
          ? ` (${
              activeFilters.filter((activeFilter) =>
                activeFilter.categoryId.includes(menu.id),
              ).length
            })`
          : ''
      }`,
    }));
  }

  const filtersWithActiveLabel = addActiveNumberToLabel(menus);

  function handleOpenAllButton(): void {
    setOpenedIds(flattenNestedObjects(menus).map((menu) => menu.id));
  }

  function handleCloseAllButton(): void {
    setOpenedIds([]);
  }

  function handlerOnMenuOpen(id: IId): void {
    const menuIds = openedIds;
    if (menuIds.includes(id)) {
      menuIds.splice(menuIds.indexOf(id), 1);
    } else {
      menuIds.push(id);
    }
    setOpenedIds([...menuIds]);
  }

  const currentIdisNotInOpenIds = !flatFilters.every((filter) =>
    openedIds.includes(filter.id),
  );

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
          {openedIds.length > 0 && (
            <span
              aria-hidden="true"
              className={classes.controlledMenuButton}
              onClick={() => handleCloseAllButton()}
            >
              {`- ${closeAllFiltersLabel}`}
            </span>
          )}
          {currentIdisNotInOpenIds && openedIds.length > 0 ? (
            <span className={classes.controlledMenuLine} />
          ) : null}
          {currentIdisNotInOpenIds ? (
            <span
              aria-hidden="true"
              className={classes.controlledMenuButton}
              onClick={() => handleOpenAllButton()}
            >
              {`+ ${openAllFiltersLabel}`}
            </span>
          ) : null}
        </Group>
        <SidebarFilterMenu
          menu={filtersWithActiveLabel}
          onMenuOpen={(id) => handlerOnMenuOpen(id)}
          openedMenuIds={openedIds}
        />
      </div>
      <div className={classes.bottom}>
        <Button
          classNames={{ root: classes.activeFiltersButtonRoot }}
          color={theme.colors[theme.primaryColor][9]}
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
