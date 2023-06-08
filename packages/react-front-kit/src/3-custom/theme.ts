import type { MantineThemeOverride } from '@mantine/core';

import { DEFAULT_THEME } from '@mantine/core';

export const baseTheme: MantineThemeOverride = {
  cursorType: 'pointer',
  defaultRadius: '1.5rem',
  fontFamily: 'Open Sans',
  fontSizes: {
    lg: '18px',
    md: '16px',
    sm: '14px',
    xl: '20px',
    xs: '12px',
  },
  headings: {
    fontWeight: 700,
    sizes: {
      h1: { fontSize: '26px', lineHeight: '135%' },
      h2: { fontSize: '18px', lineHeight: '155%' },
      h3: { fontSize: '14px', lineHeight: '155%' },
    },
  },
};

export const lightTheme: MantineThemeOverride = {
  ...baseTheme,
  black: DEFAULT_THEME.colors.dark[6],
  colorScheme: 'light',
  primaryColor: 'cyan',
  primaryShade: 9,
  white: '#fff',
};

export const darkTheme: MantineThemeOverride = {
  ...baseTheme,
  black: DEFAULT_THEME.colors.gray[8],
  colorScheme: 'dark',
  colors: {
    dark: [
      '#fff',
      DEFAULT_THEME.colors.gray[6],
      DEFAULT_THEME.colors.gray[6],
      DEFAULT_THEME.colors.gray[6],
      DEFAULT_THEME.colors.gray[6],
      DEFAULT_THEME.colors.gray[7],
      DEFAULT_THEME.colors.gray[7],
      DEFAULT_THEME.colors.gray[8],
      DEFAULT_THEME.colors.gray[9],
      DEFAULT_THEME.colors.gray[9],
    ],
  },
  components: {
    Input: {
      defaultProps: {
        variant: 'filled',
      },
    },
  },
  primaryColor: 'dark',
  primaryShade: 0,
  white: '#000',
};

export const primaryTheme: MantineThemeOverride = {
  ...baseTheme,
  black: DEFAULT_THEME.colors.cyan[9],
  colorScheme: 'dark',
  colors: {
    dark: [
      '#fff',
      DEFAULT_THEME.colors.cyan[7],
      DEFAULT_THEME.colors.cyan[7],
      DEFAULT_THEME.colors.cyan[7],
      DEFAULT_THEME.colors.cyan[7],
      DEFAULT_THEME.colors.cyan[8],
      DEFAULT_THEME.colors.cyan[8],
      DEFAULT_THEME.colors.cyan[9],
      DEFAULT_THEME.colors.cyan[9],
      DEFAULT_THEME.colors.cyan[9],
    ],
  },
  components: {
    Input: {
      defaultProps: {
        variant: 'filled',
      },
    },
  },
  primaryColor: 'dark',
  primaryShade: 0,
  white: '#000',
};

export const themes = {
  dark: {
    color: DEFAULT_THEME.colors.gray[8],
    theme: darkTheme,
    title: 'Dark',
  },
  light: {
    color: '#fff',
    theme: lightTheme,
    title: 'Light',
  },
  primary: {
    color: DEFAULT_THEME.colors.cyan[9],
    theme: primaryTheme,
    title: 'Primary',
  },
};
