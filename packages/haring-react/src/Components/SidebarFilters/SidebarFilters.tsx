'use client';

import type { IMenuItem } from '../SidebarMenu/SidebarMenu';
import type { ReactElement, ReactNode } from 'react';

import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Group,
  getThemeColor,
  useMantineTheme,
} from '@mantine/core';
import { CaretDown, CaretUp, TrashSimple, X } from '@phosphor-icons/react';
import { useMemo, useState } from 'react';

import { addPathAndDepth, flattenNestedObjects } from '../../helpers';
import { CollapseButtonControlled } from '../CollapseButton/CollapseButtonControlled';
import { SidebarMenu } from '../SidebarMenu/SidebarMenu';

import classes from './SidebarFilters.module.css';

export interface ISidebarFilter {
  categoryId: IId[];
  id: IId;
  label: string;
  onRemove?: (filter: ISidebarFilter) => void;
  value: unknown;
}

export interface ISidebarFiltersAriaLabels {
  expandIcon?: string;
}

type IId = number | string;

export interface ISidebarFiltersProps {
  activeFilters?: ISidebarFilter[] | [];
  ariaLabels?: ISidebarFiltersAriaLabels;
  closeAllFiltersLabel?: string;
  defaultOpenedActiveFilters?: boolean;
  defaultOpenedMenuIds?: IId[];
  deleteButtonLabel?: string;
  filterButtonLabel?: string;
  menus?: IMenuItem<IId>[] | undefined;
  onDeleteButtonClick?: (filters: ISidebarFilter[]) => void;
  onFilterButtonClick?: (filters: ISidebarFilter[]) => void;
  openAllFiltersLabel?: string;
  title?: ReactNode;
}

export function SidebarFilters(props: ISidebarFiltersProps): ReactElement {
  const {
    activeFilters = [],
    ariaLabels,
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
  const theme = useMantineTheme();

  const flatFilters = useMemo(
    () => flattenNestedObjects(addPathAndDepth(menus)),
    [menus],
  );

  const [activeFiltersCollapseOpened, setActiveFiltersCollapseOpened] =
    useState(defaultOpenedActiveFilters);
  const [openedIds, setOpenedIds] = useState<IId[]>(defaultOpenedMenuIds);

  function addActiveLabelAndStyle(
    menus?: IMenuItem<IId>[],
  ): IMenuItem<IId>[] | undefined {
    return menus?.map((menu) => ({
      ...menu,
      children: addActiveLabelAndStyle(menu.children),
      ...(menu.content && {
        content: (
          <div className={classes.sidebarMenuContentContainer}>
            {menu.content}
          </div>
        ),
      }),
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

  const filtersWithActiveLabelAndStyle = addActiveLabelAndStyle(menus);

  function handleOpenAllButton(): void {
    setOpenedIds(flattenNestedObjects(menus).map((menu) => menu.id));
  }

  function handleCloseAllButton(): void {
    setOpenedIds([]);
  }

  const currentIdIsNotInOpenIds = !flatFilters.every((filter) =>
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
          rightSection={
            <ActionIcon
              aria-label={ariaLabels?.expandIcon || 'expand icon'}
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
                  label: classes.badgeInner,
                  root: classes.badgeRoot,
                  section: classes.badgeRight,
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
          {currentIdIsNotInOpenIds && openedIds.length > 0 ? (
            <span className={classes.controlledMenuLine} />
          ) : null}
          {currentIdIsNotInOpenIds ? (
            <span
              aria-hidden="true"
              className={classes.controlledMenuButton}
              onClick={() => handleOpenAllButton()}
            >
              {`+ ${openAllFiltersLabel}`}
            </span>
          ) : null}
        </Group>
        <SidebarMenu
          collapseButtonProps={(
            _item: unknown,
            _level: number,
            isSelected: boolean,
            opened: boolean,
          ) => ({
            classNames: {
              inner: classes.sidebarMenuButtonInner,
              label: classes.sidebarMenuButtonLabel,
              root: classes.sidebarMenuButtonRoot,
            },
            collapseProps: {
              style:
                opened && isSelected
                  ? {
                      backgroundColor: theme.colors[theme.primaryColor][0],
                      borderTop: `1px solid ${
                        theme.colors[theme.primaryColor][2]
                      }`,
                    }
                  : opened
                    ? {
                        borderTop: `1px solid ${theme.colors.gray[3]}`,
                      }
                    : {},
            },
            indentation: 'simple',
          })}
          component="div"
          menu={filtersWithActiveLabelAndStyle}
          menuOpenValue={openedIds}
          onMenuOpenChange={setOpenedIds}
          p={0}
        />
      </div>
      <div className={classes.bottom}>
        <Button
          classNames={{ root: classes.activeFiltersButtonRoot }}
          color={getThemeColor(theme.primaryColor, theme)}
          onClick={() => onFilterButtonClick?.(activeFilters)}
          variant="filled"
        >
          {filterButtonLabel} ({activeFilters.length})
        </Button>
        <Button
          classNames={{ root: classes.removeAllFiltersButtonRoot }}
          color="dark"
          leftSection={<TrashSimple size={12} />}
          onClick={() => onDeleteButtonClick?.(activeFilters)}
          variant="outline"
        >
          {deleteButtonLabel} ({activeFilters.length})
        </Button>
      </div>
    </Box>
  );
}
