'use client';

import type { ChangeEvent, ReactElement } from 'react';

import {
  Button,
  Checkbox,
  Divider,
  Input,
  useMantineTheme,
} from '@mantine/core';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useState } from 'react';

import { useStyles } from './SearchableCheckboxList.style';

export interface ICheckbox {
  active?: boolean;
  id: number | string;
  label: string;
}

export interface ISearchableCheckboxListProps<T extends ICheckbox> {
  buttonLabel?: string;
  checkboxes?: T[];
  onClickButton?: (checkboxes: T[]) => void;
  placeholder?: string;
}

export function SearchableCheckboxList<T extends ICheckbox>(
  props: ISearchableCheckboxListProps<T>,
): ReactElement {
  const {
    buttonLabel = 'Validate changes',
    placeholder = 'Search in options',
    checkboxes = [],
    onClickButton,
  } = props;
  const [searchInput, setSearchInput] = useState('');
  const [newCheckboxes, setNewCheckboxes] = useState(checkboxes);

  const theme = useMantineTheme();
  const { classes } = useStyles();

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
  }

  function checkboxIncludesSearchInput(label: string): boolean {
    return label.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase());
  }

  return (
    <>
      <Input
        onChange={handleInputChange}
        placeholder={placeholder}
        rightSection={
          <MagnifyingGlass
            color={theme.fn.primaryColor()}
            size={20}
            values={searchInput}
            weight="bold"
          />
        }
      />
      <div className={classes.checkboxsTop}>
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
      <div className={classes.checkboxsBottom}>
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
      <Button
        fullWidth
        onClick={() => onClickButton?.(newCheckboxes)}
        size="md"
      >
        {buttonLabel}
      </Button>
    </>
  );
}
