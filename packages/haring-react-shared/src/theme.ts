'use client';

import type { MantineThemeOverride } from '@mantine/core';

import { DEFAULT_THEME } from '@mantine/core';

import { createThemes } from './helpers';

const { main, primary, secondary } = createThemes();

export const mainTheme: MantineThemeOverride = main;
export const primaryTheme: MantineThemeOverride = primary;
export const secondaryTheme: MantineThemeOverride = secondary;
export const themes: Record<
  string,
  { color: string; theme: MantineThemeOverride; title: string }
> = {
  main: {
    color: '#fff',
    theme: main,
    title: 'Main theme',
  },
  primary: {
    color: DEFAULT_THEME.colors.cyan[9],
    theme: primary,
    title: 'Primary theme',
  },
  secondary: {
    color: DEFAULT_THEME.colors.gray[8],
    theme: secondary,
    title: 'Secondary theme',
  },
};
