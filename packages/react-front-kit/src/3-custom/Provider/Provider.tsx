'use client';

import type { MantineThemeOverride } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import { MantineProvider } from '@mantine/core';

import { mainTheme } from '../../theme';

interface IProviderProps {
  children?: ReactNode;
  colorScheme?: 'dark' | 'light';
  theme?: MantineThemeOverride;
}
export function Provider(props: IProviderProps): ReactElement {
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
