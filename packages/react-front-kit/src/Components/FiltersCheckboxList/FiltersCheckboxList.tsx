'use client';

import type { ReactElement } from 'react';

import {
  Button,
  Checkbox,
  Divider,
  Input,
  useMantineTheme,
} from '@mantine/core';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useState } from 'react';

import { useStyles } from './FiltersCheckboxList.style';

export interface IFilter {
  active: boolean;
  id: number | string;
  label: string;
  value: string;
}

export interface IFiltersCheckboxListProps {
  buttonLabel?: string;
  filters?: IFilter[];
  onClickButton?: (newFilters: IFilter[]) => void;
  placeholder?: string;
}

export function FiltersCheckboxList(
  props: IFiltersCheckboxListProps,
): ReactElement {
  const {
    buttonLabel = 'Validate changes',
    placeholder = 'Search in filters',
    filters = [],
    onClickButton,
  } = props;
  const [searchInput, setSearchInput] = useState('');
  const [newFilters, setNewFilters] = useState(filters);

  const theme = useMantineTheme();
  const { classes } = useStyles();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearchInput(event.target.value);
  }

  function handleCheckboxChange(item: IFilter): void {
    setNewFilters(
      newFilters.map((element) => {
        if (element.id !== item.id) {
          return element;
        }
        element.active = !element.active;
        return element;
      }),
    );
  }

  function compareByName(filter1: IFilter, filter2: IFilter): number {
    return filter1.label.localeCompare(filter2.label);
  }

  function getFiltersByAlphabeticalOrder(filters: IFilter[]): IFilter[] {
    return filters.sort(compareByName);
  }

  function filterIncludeSearchInput(label: string): boolean {
    return label.includes(searchInput.toLocaleLowerCase());
  }

  return (
    <>
      <Input
        onChange={handleInputChange}
        placeholder={placeholder}
        rightSection={
          <MagnifyingGlass
            color={theme.colors.cyan[9]}
            size={20}
            values={searchInput}
            weight="bold"
          />
        }
      />
      <div className={classes.checkboxsTop}>
        {getFiltersByAlphabeticalOrder(filters).map((item) => {
          if (!item.active && filterIncludeSearchInput(item.label)) {
            return (
              <Checkbox
                key={item.id}
                classNames={{ root: classes.checkboxRoot }}
                defaultChecked={item.active}
                label={item.label}
                onChange={() => handleCheckboxChange(item)}
              />
            );
          }
          return '';
        })}
      </div>
      <Divider color="gray.2" />
      <div className={classes.checkboxsBottom}>
        {getFiltersByAlphabeticalOrder(filters).map((item) => {
          if (item.active && filterIncludeSearchInput(item.label)) {
            return (
              <Checkbox
                key={item.id}
                classNames={{ root: classes.checkboxRoot }}
                defaultChecked={item.active}
                label={item.label}
                onChange={() => handleCheckboxChange(item)}
              />
            );
          }
          return '';
        })}
      </div>
      <Button fullWidth onClick={() => onClickButton?.(newFilters)} size="md">
        {buttonLabel}
      </Button>
    </>
  );
}
