'use client';

import type { ChangeEvent, ReactElement } from 'react';

import {
  Button,
  Checkbox,
  Divider,
  Input,
  getThemeColor,
  useMantineTheme,
} from '@mantine/core';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useState } from 'react';

import classes from './SearchableList.module.css';

export interface ICheckbox {
  active?: boolean;
  id: number | string;
  label: string;
}

export interface ISearchableListProps<T extends ICheckbox> {
  checkboxes?: T[];
  minSearchableItems?: number;
  onChange?: (checkboxes: T[]) => void;
  onClickButton?: (checkboxes: T[]) => void;
  placeholder?: string;
  submitButton?: boolean;
  submitButtonLabel?: string;
}

export function SearchableList<T extends ICheckbox>(
  props: ISearchableListProps<T>,
): ReactElement {
  const {
    submitButtonLabel = 'Validate changes',
    minSearchableItems = 10,
    placeholder = 'Search in options',
    submitButton = true,
    checkboxes = [],
    onChange,
    onClickButton,
  } = props;
  const [searchInput, setSearchInput] = useState('');
  const [newCheckboxes, setNewCheckboxes] = useState(checkboxes);

  const theme = useMantineTheme();

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setSearchInput(event.target.value);
  }

  function handleCheckboxChange(item: ICheckbox): void {
    setNewCheckboxes(
      newCheckboxes.map((element) => {
        if (element.id !== item.id) {
          return element;
        }
        element.active = !element.active;
        return element;
      }),
    );
    onChange?.(checkboxes);
  }

  function checkboxIncludesSearchInput(label: string): boolean {
    return label.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase());
  }

  return (
    <>
      {Boolean(minSearchableItems <= checkboxes.length) && (
        <Input
          onChange={handleInputChange}
          placeholder={placeholder}
          rightSection={
            <MagnifyingGlass
              color={getThemeColor(theme.primaryColor, theme)}
              size={20}
              values={searchInput}
              weight="bold"
            />
          }
        />
      )}
      <div className={classes.checkboxTop}>
        {checkboxes.map((item) => {
          if (!item.active && checkboxIncludesSearchInput(item.label)) {
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
      <div className={classes.checkboxBottom}>
        {checkboxes.map((item) => {
          if (item.active && checkboxIncludesSearchInput(item.label)) {
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
      {Boolean(submitButton) && (
        <Button
          fullWidth
          onClick={() => onClickButton?.(newCheckboxes)}
          size="md"
        >
          {submitButtonLabel}
        </Button>
      )}
    </>
  );
}
