'use client';

import type { ISidebarFilterMenuProps } from '../SidebarFilterMenu/SidebarFilterMenu';
import type { ElementType, ReactElement, ReactNode } from 'react';

import { Badge, Box, Button, Group } from '@mantine/core';
import { TrashSimple, X } from '@phosphor-icons/react';

import { SidebarFilterMenu } from '../SidebarFilterMenu/SidebarFilterMenu';

import { useStyles } from './Filters.style';

export interface ISidebarFilter {
  id: number | string;
  label: string;
  onRemove?: (filter: ISidebarFilter) => void;
  value: unknown;
}

export interface IFiltersProps<
  T extends number | string,
  C extends ElementType,
> {
  activeFilters?: ISidebarFilter[] | [];
  deleteButtonLabel?: string;
  filterLabelButton?: string;
  onDeleteButtonClick?: (filters: ISidebarFilter[]) => void;
  onFilterButtonClick?: (filters: ISidebarFilter[]) => void;
  sideBarFiltersMenu?: ISidebarFilterMenuProps<T, C>;
  title?: ReactNode;
}

export function Filters(props: IFiltersProps<T, C>): ReactElement {
  const {
    activeFilters = [],
    title = 'Active filters',
    sideBarFiltersMenu = [],
    onDeleteButtonClick,
    onFilterButtonClick,
    deleteButtonLabel = 'Remove all',
    filterLabelButton = 'Filter',
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
        <SidebarFilterMenu menu={sideBarFiltersMenu} />
      </div>
      <div className={classes.bottom}>
        <Button
          classNames={{ root: classes.activeFiltersButtonRoot }}
          color="cyan.9"
          onClick={() => onFilterButtonClick?.(activeFilters)}
          variant="filled"
        >
          {filterLabelButton} ({activeFilters.length})
        </Button>
      </div>
    </Box>
  );
}
