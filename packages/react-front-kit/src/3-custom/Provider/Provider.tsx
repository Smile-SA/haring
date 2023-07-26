'use client';

import type { MantineThemeOverride } from '@mantine/core';
import type { ReactNode } from 'react';

import { MantineProvider } from '@mantine/core';

import { mainTheme } from '../../theme';

interface IProviderProps {
  children?: ReactNode;
  colorScheme?: 'light' | 'dark';
  theme?: MantineThemeOverride;
}
export function Provider(props: IProviderProps): JSX.Element {
  const { children, colorScheme = 'light', theme = mainTheme } = props;

  return (
    <MantineProvider
      theme={{ ...theme, colorScheme }}
      withGlobalStyles
      withNormalizeCSS
    >
      {children}
    </MantineProvider>
  );
}
