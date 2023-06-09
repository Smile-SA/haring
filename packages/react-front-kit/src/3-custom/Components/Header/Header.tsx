import type { HeaderProps, MantineThemeOverride } from '@mantine/core';
import type {
  ChangeEventHandler,
  ElementType,
  FormEvent,
  MouseEventHandler,
  ReactNode,
} from 'react';

import { Flex, Header as MantineHeader } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { useState } from 'react';

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
  const header = useClickOutside(() => setOpened(false));

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
          <HeaderSearch
            height={height}
            onChange={onSearchChange}
            onClear={onSearchClear}
            onSubmit={onSearchSubmit}
            onToggle={setOpened}
            opened={opened}
            theme={searchTheme}
            value={searchValue}
          />
          {right}
        </Flex>
      </Flex>
    </MantineHeader>
  );
}

Header.defaultProps = {
  withBorder: false,
};
