import type { MantineThemeOverride } from '@mantine/core';
import type {
  ChangeEventHandler,
  FormEvent,
  MouseEvent,
  MouseEventHandler,
} from 'react';

import {
  Box,
  Button,
  CloseButton,
  Input,
  MantineProvider,
  useMantineTheme,
} from '@mantine/core';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useEffect, useRef } from 'react';

interface IHeaderSearchProps {
  height?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClear?: MouseEventHandler<HTMLButtonElement>;
  onSubmit?: (event: FormEvent) => void;
  onToggle?: (opened: boolean) => void;
  opened?: boolean;
  theme?: MantineThemeOverride;
  value?: string;
}

export function HeaderSearch(props: IHeaderSearchProps): JSX.Element {
  const {
    height = 90,
    opened,
    onChange,
    onClear,
    onSubmit,
    onToggle,
    theme,
    value,
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const defaultTheme = useMantineTheme();

  useEffect(() => {
    if (inputRef.current && opened) {
      inputRef.current.focus();
    }
  }, [opened]);

  function handleClick(): void {
    onToggle?.(!opened);
  }

  function handleSearchClear(event: MouseEvent<HTMLButtonElement>): void {
    onClear?.(event);
    if (inputRef.current && opened) {
      inputRef.current.focus();
    }
  }

  return (
    <>
      <Button
        onClick={handleClick}
        sx={(theme) => ({
          ...(!opened && {
            '&::after': {
              background: theme.colors.gray[3],
              content: '""',
              display: 'block',
              height: 36,
              position: 'absolute',
              right: 0,
              top: '50%',
              translate: '0 -50%',
              width: 1,
            },
          }),
          ...(opened && {
            background: theme.fn.primaryColor(),
            color: theme.white,
          }),
          borderRadius: 0,
          height,
          position: 'relative',
          width: height,
        })}
        variant="white"
      >
        <MagnifyingGlass size={32} />
      </Button>
      {Boolean(opened) && (
        <MantineProvider theme={theme ?? defaultTheme}>
          <Box
            sx={(theme) => ({
              background:
                theme.colorScheme === 'dark' ? theme.black : theme.white,
              bottom: 0,
              left: 0,
              padding: '30px 64px',
              position: 'absolute',
              right: 0,
              translate: '0 100%',
            })}
          >
            <form onSubmit={onSubmit}>
              <Input
                ref={inputRef}
                onChange={onChange}
                rightSection={
                  <CloseButton
                    aria-label="Clear"
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
        </MantineProvider>
      )}
    </>
  );
}
