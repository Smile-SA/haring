'use client';

import type { IFiltersItem } from './SidebarFilterMenu/SidebarFilterMenu';
import type { ReactElement, ReactNode } from 'react';

import { Badge, Box, Button, Group } from '@mantine/core';
import { TrashSimple, X } from '@phosphor-icons/react';

import { useStyles } from './Filters.style';
import { SidebarFilterMenu } from './SidebarFilterMenu/SidebarFilterMenu';

export interface ISidebarFilter {
  id: number | string;
  label: string;
  onRemove?: (filter: ISidebarFilter) => void;
  value: unknown;
}

export interface IFiltersProps {
  activeFilters?: ISidebarFilter[] | [];
  deleteButtonLabel?: string;
  filterButtonLabel?: string;
  onDeleteButtonClick?: (filters: ISidebarFilter[]) => void;
  onFilterButtonClick?: (filters: ISidebarFilter[]) => void;
  openedMenuIds?: (number | string)[] | undefined;
  sideBarFiltersMenu?: IFiltersItem<number | string>[] | undefined;
  title?: ReactNode;
}

export function Filters(props: IFiltersProps): ReactElement {
  const {
    activeFilters = [],
    title = 'Active filters',
    sideBarFiltersMenu = [],
    onDeleteButtonClick,
    onFilterButtonClick,
    openedMenuIds = undefined,
    deleteButtonLabel = 'Remove all',
    filterButtonLabel = 'Filter',
  } = props;
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <div className={classes.top}>
        <Group position="apart">
          <span className={classes.title}>{title}</span>
          <Button
            className={classes.buttonRemoveRoot}
            leftIcon={<TrashSimple size={12} />}
            onClick={() => onDeleteButtonClick?.(activeFilters)}
            variant="transparent"
          >
            {deleteButtonLabel}
          </Button>
        </Group>
        <div className={classes.activeFilters} />
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
      <div className={classes.middle}>
        <SidebarFilterMenu
          menu={sideBarFiltersMenu}
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
      </div>
    </Box>
  );
}
