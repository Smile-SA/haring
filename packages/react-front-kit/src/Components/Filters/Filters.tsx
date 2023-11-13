'use client';

import type { ReactElement, ReactNode } from 'react';

import { Badge, Box, Button, Group } from '@mantine/core';
import { TrashSimple, X } from '@phosphor-icons/react';

import { useStyles } from './Filters.style';

export interface ISidebarFilter {
  id: number | string;
  label: string;
  onRemove: (filter: ISidebarFilter) => void;
  value: unknown;
}

export interface IFiltersProps {
  activeFilters?: ISidebarFilter[] | [];
  deleteButtonLabel?: string;
  title?: ReactNode;
}

export function Filters(props: IFiltersProps): ReactElement {
  const {
    activeFilters = [
      {
        id: 1,
        label: 'truck',
        onRemove: (filter: ISidebarFilter) => {
          console.log(filter);
        },
        value: 'truck',
      },
      {
        id: 2,
        label: 'truck',
        onRemove: (filter: ISidebarFilter) => {
          console.log(filter);
        },
        value: 'truck',
      },
      {
        id: 2,
        label: 'truck',
        onRemove: (filter: ISidebarFilter) => {
          console.log(filter);
        },
        value: 'truck',
      },
      {
        id: 2,
        label: 'truck',
        onRemove: (filter: ISidebarFilter) => {
          console.log(filter);
        },
        value: 'truck',
      },
      {
        id: 2,
        label: 'truck',
        onRemove: (filter: ISidebarFilter) => {
          console.log(filter);
        },
        value: 'truck',
      },
      {
        id: 2,
        label: 'truck',
        onRemove: (filter: ISidebarFilter) => {
          console.log(filter);
        },
        value: 'truck',
      },
      {
        id: 2,
        label: 'truck',
        onRemove: (filter: ISidebarFilter) => {
          console.log(filter);
        },
        value: 'truck',
      },
      {
        id: 2,
        label: 'truck',
        onRemove: (filter: ISidebarFilter) => {
          console.log(filter);
        },
        value: 'truck',
      },
      {
        id: 2,
        label: 'truck',
        onRemove: (filter: ISidebarFilter) => {
          console.log(filter);
        },
        value: 'truck',
      },
    ],
    title = 'Active filters',
    deleteButtonLabel = 'Remove all',
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
            onClick={() => filter.onRemove(filter)}
            pr={3}
            rightSection={<X size={10} />}
            size="xl"
            variant="outline"
          >
            {filter.label}
          </Badge>
        ))}
      </div>
    </Box>
  );
}
