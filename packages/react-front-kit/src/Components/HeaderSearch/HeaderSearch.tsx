'use client';

import type { BoxProps } from '@mantine/core';
import type { ChangeEvent, FormEvent, ReactElement } from 'react';

import { Box, CloseButton, Input, createStyles } from '@mantine/core';
import { useEffect, useRef } from 'react';

const useStyles = createStyles((theme) => ({
  search: {
    background: theme.colorScheme === 'dark' ? theme.black : theme.white,
    bottom: 0,
    left: 0,
    padding: '30px 64px',
    position: 'absolute',
    right: 0,
    translate: '0 100%',
  },
}));

export interface IHeaderSearchProps extends BoxProps {
  clearButtonAriaLabel?: string;
  onChange?: (value: string) => void;
  onSubmit?: (event: FormEvent) => void;
  opened?: boolean;
  value?: string;
}

/** Additional props will be forwarded to the [Mantine Box component](https://mantine.dev/core/box) */
export function HeaderSearch(props: IHeaderSearchProps): ReactElement {
  const {
    clearButtonAriaLabel = 'Clear',
    opened,
    onChange,
    onSubmit,
    value,
    ...boxProps
  } = props;
  const { classes } = useStyles();
  const inputRef = useRef<HTMLInputElement>(null);

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
    <Box className={classes.search} {...boxProps}>
      <form onSubmit={onSubmit}>
        <Input
          ref={inputRef}
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
        />
      </form>
    </Box>
  );
}
