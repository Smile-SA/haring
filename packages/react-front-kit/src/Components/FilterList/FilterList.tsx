'use client';

import type { ModalProps, StackProps } from '@mantine/core';
import type { IFilter } from '@smile/react-front-kit-shared';
import type { ElementType, ReactElement } from 'react';

import { Button, Group, Modal, Stack, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Plus } from '@phosphor-icons/react';
import { useState } from 'react';

import { SearchableCheckboxList } from '../SearchableCheckboxList/SearchableCheckboxList';

import { useStyles } from './FilterList.style';

export interface IFilterListProps
  extends Omit<StackProps, 'justify' | 'onSubmit'> {
  direction?: 'column' | 'row';
  filters: IFilter[];
  filtersManageLabel?: string;
  manageFilterModalSearchPlaceholder?: string;
  manageFilterModalSearchSubmit?: string;
  manageFilterModalTitle?: string;
  modalProps?: ModalProps;
  onActiveFiltersChange?: (filters: IFilter[]) => void;
  onSubmit?: (activeFilters: IFilter[]) => void;
  submitLabel?: string;
}

export function FilterList(props: IFilterListProps): ReactElement {
  const {
    direction = 'row',
    filters,
    filtersManageLabel = 'Manage filters',
    manageFilterModalSearchPlaceholder = 'Search in filters',
    manageFilterModalSearchSubmit = 'Confirm changes',
    manageFilterModalTitle = 'Manage filters',
    modalProps,
    onActiveFiltersChange,
    onSubmit,
    submitLabel = 'Filter',
    ...containerProps
  } = props;
  const [localFilters, setLocalFilters] = useState<IFilter[]>(filters);
  const [manageFiltersModal, handleManageFiltersModal] = useDisclosure(false);
  const Container: ElementType = direction === 'row' ? Group : Stack;

  const theme = useMantineTheme();
  const { classes } = useStyles();

  function handleSubmit(): void {
    onSubmit?.(localFilters.filter((filter) => filter.active));
  }

  function handleManageFiltersSubmit(activeFilters: IFilter[]): void {
    handleManageFiltersModal.close();

    const newFilters = localFilters.map((filter, i) =>
      activeFilters[i].id === filter.id ? activeFilters[i] : filter,
    );
    onActiveFiltersChange?.(activeFilters);
    setLocalFilters(newFilters);
  }

  return (
    <Container spacing={10} {...containerProps}>
      {localFilters
        .filter((filter) => filter.active)
        .map((filter) => (
          <span key={filter.id} className={classes.filterComponent}>
            {filter.component}
          </span>
        ))}
      {onSubmit ? (
        <Button className={classes.submitButton} onClick={handleSubmit}>
          {submitLabel}
        </Button>
      ) : null}
      <Button
        className={classes.manageFiltersButton}
        classNames={{ label: classes.manageFiltersLabel }}
        onClick={handleManageFiltersModal.open}
        variant="default"
      >
        <Plus color={theme.colors.dark[6]} size={12} />
        {filtersManageLabel}
      </Button>
      <Modal
        centered
        classNames={{
          body: classes.manageFilterModalBody,
          header: classes.manageFilterModalHeader,
          title: classes.manageFilterModalTitle,
        }}
        onClose={handleManageFiltersModal.close}
        opened={manageFiltersModal}
        size="md"
        title={manageFilterModalTitle}
        {...modalProps}
      >
        <SearchableCheckboxList<IFilter>
          buttonLabel={manageFilterModalSearchSubmit}
          checkboxes={filters}
          onClickButton={handleManageFiltersSubmit}
          placeholder={manageFilterModalSearchPlaceholder}
        />
      </Modal>
    </Container>
  );
}
