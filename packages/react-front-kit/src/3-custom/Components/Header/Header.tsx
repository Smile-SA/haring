import type { HeaderProps, MantineThemeOverride } from '@mantine/core';
import type {
  ChangeEventHandler,
  ElementType,
  FormEvent,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
} from 'react';

import {
  Box,
  CloseButton,
  Flex,
  Input,
  Header as MantineHeader,
  MantineProvider,
  useMantineTheme,
} from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { useEffect, useRef, useState } from 'react';

import { HeaderSearch } from '../HeaderSearch/HeaderSearch';

interface IHeaderProps extends Omit<HeaderProps, 'height' | 'left' | 'right'> {
  childrenComponent?: ElementType;
  height?: number;
  left?: ReactNode;
  onSearchChange?: ChangeEventHandler<HTMLInputElement>;
  onSearchClear?: MouseEventHandler<HTMLButtonElement>;
  onSearchSubmit?: (event: FormEvent) => void;
  right?: ReactNode;
  searchTheme?: MantineThemeOverride;
  searchValue?: string;
}

export function Header(props: IHeaderProps): JSX.Element {
  const {
    children,
    childrenComponent,
    height = 90,
    left,
    onSearchChange,
    onSearchClear,
    onSearchSubmit,
    right,
    searchTheme,
    searchValue,
    ...headerProps
  } = props;
  const [opened, setOpened] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const header = useClickOutside(() => setOpened(false));
  const theme = useMantineTheme();

  useEffect(() => {
    if (inputRef.current && opened) {
      inputRef.current.focus();
    }
  }, [opened]);

  function handleSearchClear(event: MouseEvent<HTMLButtonElement>): void {
    onSearchClear?.(event);
    if (inputRef.current && opened) {
      inputRef.current.focus();
    }
  }

  return (
    <MantineHeader
      ref={header}
      height={opened ? height + 110 : height}
      {...headerProps}
    >
      <Flex
        align="center"
        h={height}
        justify="space-between"
        p="16px 64px"
        pos="relative"
        w="100%"
      >
        <Flex align="center" gap="xs">
          {left}
        </Flex>
        <Flex
          align="center"
          // @ts-expect-error wrong type for Flex component
          component={childrenComponent}
          gap="xl"
          left="50%"
          m="auto"
          pos="absolute"
          sx={{ translate: '-50% -50%' }}
          top="50%"
        >
          {children}
        </Flex>
        <Flex align="center" gap="xs">
          <HeaderSearch height={height} onChange={setOpened} opened={opened} />
          {right}
        </Flex>
      </Flex>
      {Boolean(opened) && (
        <MantineProvider theme={searchTheme ?? theme}>
          <Box
            p="30px 64px"
            sx={(theme) => ({
              background:
                theme.colorScheme === 'dark' ? theme.black : theme.white,
            })}
          >
            <form onSubmit={onSearchSubmit}>
              <Input
                ref={inputRef}
                onChange={onSearchChange}
                rightSection={
                  <CloseButton
                    aria-label="Clear"
                    onClick={handleSearchClear}
                    size="lg"
                    variant="white"
                  />
                }
                size="lg"
                value={searchValue}
              />
            </form>
          </Box>
        </MantineProvider>
      )}
    </MantineHeader>
  );
}

Header.defaultProps = {
  withBorder: false,
};
