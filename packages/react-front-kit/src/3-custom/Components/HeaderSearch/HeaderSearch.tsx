import type { BoxProps } from '@mantine/core';
import type {
  ChangeEventHandler,
  FormEvent,
  MouseEvent,
  MouseEventHandler,
} from 'react';

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

interface IHeaderSearchProps extends BoxProps {
  clearButtonAriaLabel?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClear?: MouseEventHandler<HTMLButtonElement>;
  onSubmit?: (event: FormEvent) => void;
  opened?: boolean;
  value?: string;
}

export function HeaderSearch(props: IHeaderSearchProps): JSX.Element {
  const {
    clearButtonAriaLabel = 'Clear',
    opened,
    onChange,
    onClear,
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

  function handleSearchClear(event: MouseEvent<HTMLButtonElement>): void {
    onClear?.(event);
    if (inputRef.current && opened) {
      inputRef.current.focus();
    }
  }

  return (
    <Box className={classes.search} {...boxProps}>
      <form onSubmit={onSubmit}>
        <Input
          ref={inputRef}
          onChange={onChange}
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
