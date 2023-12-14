'use client';

import { DEFAULT_THEME } from '@mantine/core';

import { createThemes } from './helpers';

const { main, primary, secondary } = createThemes();

export const mainTheme = main;
export const primaryTheme = primary;
export const secondaryTheme = secondary;
export const themes = {
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
