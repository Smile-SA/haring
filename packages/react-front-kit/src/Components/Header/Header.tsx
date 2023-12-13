'use client';

import type { HeaderProps, MantineThemeOverride } from '@mantine/core';
import type { ElementType, FormEvent, ReactElement, ReactNode } from 'react';

import {
  Button,
  Flex,
  Header as MantineHeader,
  MantineProvider,
  useMantineTheme,
} from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useState } from 'react';

import { HeaderMobile } from '../HeaderMobile/HeaderMobile';
import { HeaderSearch } from '../HeaderSearch/HeaderSearch';

import { useStyles } from './Header.style';

export interface IHeaderProps
  extends Omit<HeaderProps, 'height' | 'left' | 'right'> {
  children: ReactNode;
  childrenComponent?: ElementType;
  hasResponsiveMode?: boolean;
  hasSearch?: boolean;
  height?: number;
  left?: ReactNode;
  mobileProps?: {
    children?: ReactNode;
    height?: number;
    left?: ReactNode;
    menuAriaLabel?: string;
    right?: ReactNode;
    searchPlaceholder?: string;
  };
  onSearchChange?: (value: string) => void;
  onSearchSubmit?: (event: FormEvent) => void;
  right?: ReactNode;
  searchAriaLabel?: string;
  searchPlaceholder?: string;
  searchTheme?: MantineThemeOverride;
  searchValue?: string;
}

/** Additional props will be forwarded to the [Mantine AppShell (Header) component](https://mantine.dev/core/app-shell/) */
export function Header(props: IHeaderProps): ReactElement {
  const {
    children,
    childrenComponent,
    hasResponsiveMode = true,
    hasSearch = true,
    height = 90,
    left,
    onSearchChange,
    onSearchSubmit,
    right,
    mobileProps,
    searchAriaLabel = 'Search',
    searchPlaceholder,
    searchTheme,
    searchValue,
    withBorder = true,
    ...headerProps
  } = props;
  const defaultMobileProps = {
    children,
    left,
    right,
    ...mobileProps,
  };

  const [searchOpened, setSearchOpened] = useState(false);
  const searchButtonRef = useClickOutside(() => setSearchOpened(false));

  const defaultTheme = useMantineTheme();
  const { classes } = useStyles();

  function handleClick(): void {
    setSearchOpened(!searchOpened);
  }

  const buttonClasses = [classes.button];
  if (searchOpened) {
    buttonClasses.push(classes.buttonOpened);
  }

  return (
    <>
      {/* Desktop Header */}
      <div className={hasResponsiveMode ? classes.sizeDesktop : undefined}>
        <MantineHeader
          height={searchOpened ? height + 110 : height}
          withBorder={withBorder}
          {...headerProps}
        >
          <Flex className={classes.container} h={height}>
            <Flex className={classes.around}>{left}</Flex>
            <Flex
              className={classes.menu}
              // @ts-expect-error wrong type for polymorphic component
              component={childrenComponent}
            >
              {children}
            </Flex>
            <Flex className={classes.around}>
              <div ref={searchButtonRef}>
                {Boolean(hasSearch) && (
                  <Button
                    aria-label={searchAriaLabel}
                    className={buttonClasses.join(' ')}
                    data-testid="search"
                    h={height}
                    onClick={handleClick}
                    variant="white"
                    w={height}
                  >
                    <MagnifyingGlass size={32} />
                  </Button>
                )}
                {Boolean(searchOpened) && (
                  <MantineProvider theme={searchTheme ?? defaultTheme}>
                    <HeaderSearch
                      data-testid="searchBar"
                      inputAriaLabel={searchAriaLabel}
                      inputPlaceholder={searchPlaceholder}
                      onChange={onSearchChange}
                      onSearchSubmit={onSearchSubmit}
                      opened={searchOpened}
                      value={searchValue}
                    />
                  </MantineProvider>
                )}
              </div>
              {right}
            </Flex>
          </Flex>
        </MantineHeader>
      </div>
      {/* Mobile Header */}
      <div className={hasResponsiveMode ? classes.sizeMobile : classes.none}>
        <HeaderMobile
          {...defaultMobileProps}
          hasSearch={hasSearch}
          onSearchChange={onSearchChange}
          onSearchSubmit={onSearchSubmit}
          searchInputProps={{
            placeholder: searchPlaceholder,
            title: searchAriaLabel,
          }}
          searchValue={searchValue}
          withBorder={withBorder}
          {...headerProps}
        />
      </div>
    </>
  );
}
