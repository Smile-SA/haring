'use client';

import type {
  BurgerProps,
  CollapseProps,
  HeaderProps,
  TextInputProps,
} from '@mantine/core';
import type { FormEvent, ReactElement, ReactNode } from 'react';

import {
  Burger,
  Collapse,
  Divider,
  Flex,
  Header as MantineHeader,
  Stack,
  TextInput,
  useMantineTheme,
} from '@mantine/core';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useState } from 'react';

import { useStyles } from './HeaderMobile.style';

export interface IHeaderMobileProps
  extends Omit<HeaderProps, 'children' | 'height' | 'left' | 'right'> {
  burgerProps?: Omit<BurgerProps, 'onClick' | 'opened'>;
  children?: ReactNode;
  collapseProps?: Omit<CollapseProps, 'in'>;
  hasSearch?: boolean;
  height?: number;
  left?: ReactNode;
  onSearchChange?: (value: string) => void;
  onSearchSubmit?: (event: FormEvent) => void;
  right?: ReactNode;
  searchInputProps?: Omit<TextInputProps, 'onChange' | 'value'>;
  searchValue?: string;
}

/** Additional props will be forwarded to the [Mantine AppShell (Header) component](https://mantine.dev/core/app-shell/) */
export function HeaderMobile(props: IHeaderMobileProps): ReactElement {
  const {
    burgerProps,
    children,
    collapseProps,
    hasSearch = true,
    height = 76,
    left,
    onSearchChange,
    onSearchSubmit,
    right,
    searchInputProps,
    searchValue,
    withBorder = true,
    ...headerProps
  } = props;
  const [burgerOpened, setBurgerOpened] = useState(false);

  const theme = useMantineTheme();
  const { classes } = useStyles(height);

  return (
    <MantineHeader height={height} withBorder={withBorder} {...headerProps}>
      <Flex className={classes.containerMobile} h={height}>
        <Flex gap={16}>
          <Burger
            color={useMantineTheme().fn.primaryColor()}
            onClick={() => setBurgerOpened((o) => !o)}
            opened={burgerOpened}
            size={22}
            title="Open navigation"
            {...burgerProps}
          />
          <Divider className={classes.separator} orientation="vertical" />
        </Flex>
        <Flex className={classes.around}>{left}</Flex>
        <Flex className={classes.around}>{right}</Flex>
      </Flex>
      <Collapse in={burgerOpened} {...collapseProps}>
        <Stack className={classes.burgerMenu}>
          {children}
          {Boolean(hasSearch) && (
            <form className={classes.burgerSearch} onSubmit={onSearchSubmit}>
              <TextInput
                aria-label="Search"
                onChange={(e) => onSearchChange?.(e.target.value)}
                placeholder="Search on the site"
                radius={32}
                rightSection={
                  <MagnifyingGlass
                    className={classes.searchIcon}
                    color={theme.fn.primaryColor()}
                    size={20}
                  />
                }
                size="md"
                value={searchValue}
                {...searchInputProps}
              />
            </form>
          )}
        </Stack>
      </Collapse>
    </MantineHeader>
  );
}
