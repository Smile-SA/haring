'use client';

import type { TextInputProps } from '@mantine/core';
import type { ChangeEvent, FormEvent, ReactElement, ReactNode } from 'react';

import { CloseButton, Input, TextInput } from '@mantine/core';
import { useEffect, useRef } from 'react';

import { useStyles } from './SearchBar.style';

export interface ISearchBarProps extends Omit<TextInputProps, 'onChange'> {
  clearButtonAriaLabel?: string;
  inputAriaLabel?: string;
  inputPlaceholder?: string;
  leftSection?: ReactNode;
  onChange?: (value: string) => void;
  onSearchClear?: () => void;
  onSearchSubmit?: (event: FormEvent) => void;
  opened?: boolean;
  value?: string;
}

/** Additional props will be forwarded to the [Mantine TextInput component](https://mantine.dev/core/text-input/) */
export function SearchBar(props: ISearchBarProps): ReactElement {
  const {
    clearButtonAriaLabel = 'Clear',
    inputAriaLabel = 'Search',
    inputPlaceholder,
    leftSection,
    opened,
    onChange,
    onSearchClear,
    onSearchSubmit,
    value,
    ...textInputProps
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const { classes } = useStyles();

  useEffect(() => {
    if (inputRef.current && opened) {
      inputRef.current.focus();
    }
  }, [opened]);

  function handleSubmit(event: FormEvent): void {
    onSearchSubmit?.(event);
  }

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>): void {
    onChange?.(event.target.value);
  }

  function handleSearchClear(): void {
    onChange?.('');
    onSearchClear?.();
    if (inputRef.current && opened) {
      inputRef.current.focus();
    }
  }

  return (
    // Input only used as styled wrapper div
    <Input classNames={{ input: classes.container }} component="div" size="lg">
      {Boolean(leftSection) && (
        <>
          <div className={classes.leftSection}>{leftSection}</div>
          <div className={classes.separator} />
        </>
      )}
      <form className={classes.inputRoot} onSubmit={handleSubmit}>
        <TextInput
          ref={inputRef}
          aria-label={inputAriaLabel}
          className={classes.input}
          classNames={{
            input: classes.inputInner,
            wrapper: classes.inputInnerRoot,
          }}
          onChange={handleSearchChange}
          placeholder={inputPlaceholder}
          rightSection={
            <CloseButton
              aria-label={clearButtonAriaLabel}
              className={classes.closeIcon}
              onClick={handleSearchClear}
              size="lg"
              variant="white"
            />
          }
          value={value}
          variant="unstyled"
          {...textInputProps}
        />
      </form>
    </Input>
  );
}
