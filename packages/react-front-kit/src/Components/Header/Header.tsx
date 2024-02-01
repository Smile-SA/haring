'use client';

import type { IHeaderMobileProps } from '../HeaderMobile/HeaderMobile';
import type {
  AppShellHeaderProps,
  MantineThemeOverride,
  TextInputProps,
} from '@mantine/core';
import type { ElementType, FormEvent, ReactElement, ReactNode } from 'react';

import { AppShell, Button, Flex, useMantineTheme } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { NestedProvider } from '@smile/react-front-kit-shared';
import { useState } from 'react';

import { HeaderMobile } from '../HeaderMobile/HeaderMobile';
import { HeaderSearch } from '../HeaderSearch/HeaderSearch';

import classes from './Header.module.css';

export interface IHeaderProps
  extends Omit<AppShellHeaderProps, 'height' | 'left' | 'right'> {
  children: ReactNode;
  childrenComponent?: ElementType;
  hasResponsiveMode?: boolean;
  hasSearch?: boolean;
  height?: number;
  left?: ReactNode;
  mobileProps?: IHeaderMobileProps;
  onSearchChange?: (value: string) => void;
  onSearchSubmit?: (event: FormEvent) => void;
  right?: ReactNode;
  searchInputProps?: Omit<TextInputProps, 'onChange' | 'value'>;
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
    searchInputProps,
    searchTheme,
    searchValue,
    withBorder = true,
    ...headerProps
  } = props;
  const defaultMobileProps = {
    children,
    left,
    right,
    searchInputProps,
    ...mobileProps,
  };

  const [searchOpened, setSearchOpened] = useState(false);
  const searchButtonRef = useClickOutside(() => setSearchOpened(false));

  const defaultTheme = useMantineTheme();

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
        <AppShell.Header
          h={searchOpened ? height + 110 : height}
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
                    aria-label={searchInputProps?.title ?? 'Search'}
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
                  <NestedProvider theme={searchTheme ?? defaultTheme}>
                    <HeaderSearch
                      data-testid="searchBar"
                      inputAriaLabel={searchInputProps?.title ?? 'Search'}
                      inputPlaceholder={searchInputProps?.placeholder}
                      onChange={onSearchChange}
                      onSearchSubmit={onSearchSubmit}
                      opened={searchOpened}
                      value={searchValue}
                      {...searchInputProps}
                    />
                  </NestedProvider>
                )}
              </div>
              {right}
            </Flex>
          </Flex>
        </AppShell.Header>
      </div>
      {/* Mobile Header */}
      <div className={hasResponsiveMode ? classes.sizeMobile : classes.none}>
        <HeaderMobile
          {...defaultMobileProps}
          hasSearch={hasSearch}
          onSearchChange={onSearchChange}
          onSearchSubmit={onSearchSubmit}
          searchValue={searchValue}
          withBorder={withBorder}
          {...headerProps}
        />
      </div>
    </>
  );
}
