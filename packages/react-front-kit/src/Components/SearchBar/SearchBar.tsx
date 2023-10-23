'use client';

import type { TextInputProps } from '@mantine/core';
import type { ChangeEvent, FormEvent, ReactElement, ReactNode } from 'react';

import {
  CloseButton,
  Input,
  TextInput,
  createStyles,
  rem,
} from '@mantine/core';
import { useEffect, useRef } from 'react';

const useStyles = createStyles((theme) => ({
  container: {
    ':focus, :focus-within': {
      outline: 'none',
    },
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 0,
    paddingRight: 0,
    pointerEvents: 'none',
  },
  input: {
    ':focus, :focus-within': {
      outline: `${rem(2)} solid ${theme.colors.orange[5]}`,
    },
    borderRadius: '1.5rem',
    paddingLeft: 'calc(3.125rem  / 3)',
    paddingRight: 'calc(3.125rem  / 3)',
  },
  inputRoot: {
    flexGrow: 1,
    pointerEvents: 'auto',
  },
  leftSection: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    pointerEvents: 'auto',
  },
  separator: {
    border: `1px solid ${
      theme.colorScheme === 'light'
        ? theme.colors.gray[7]
        : theme.colors.dark[8]
    }`,
    height: '75%',
    margin: 'auto 1.5rem',
  },
}));

export interface ISearchBarProps extends Omit<TextInputProps, 'onChange'> {
  clearButtonAriaLabel?: string;
  inputAriaLabel?: string;
  leftSection?: ReactNode;
  onChange?: (value: string) => void;
  onSubmit?: (event: FormEvent) => void;
  opened?: boolean;
  value?: string;
}

/** Additional props will be forwarded to the [Mantine TextInput component](https://mantine.dev/core/text-input/) */
export function SearchBar(props: ISearchBarProps): ReactElement {
  const {
    clearButtonAriaLabel = 'Clear',
    inputAriaLabel = 'Search',
    leftSection,
    opened,
    onChange,
    onSubmit,
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

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>): void {
    onChange?.(event.target.value);
  }

  function handleSearchClear(): void {
    onChange?.('');
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
      <form className={classes.inputRoot} onSubmit={onSubmit}>
        <TextInput
          ref={inputRef}
          aria-label={inputAriaLabel}
          className={classes.input}
          onChange={handleSearchChange}
          rightSection={
            <CloseButton
              aria-label={clearButtonAriaLabel}
              onClick={handleSearchClear}
              size="lg"
              variant="white"
            />
          }
          size="lg"
          value={value}
          variant="unstyled"
          {...textInputProps}
        />
      </form>
    </Input>
  );
}
