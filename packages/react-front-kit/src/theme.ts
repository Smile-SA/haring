'use client';

import type { MantineThemeOverride } from '@mantine/core';

import { DEFAULT_THEME } from '@mantine/core';

export const baseTheme: MantineThemeOverride = {
  activeStyles: {
    transform: '',
  },
  components: {
    Checkbox: {
      defaultProps: {
        radius: 'sm',
      },
    },
  },
  cursorType: 'pointer',
  defaultRadius: '1.5rem',
  fontFamily: 'var(--rfk-font, Open Sans)',
  fontSizes: {
    lg: '18px',
    md: '14px',
    sm: '12px',
    xl: '20px',
    xs: '10px',
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

export const mainTheme: MantineThemeOverride = {
  ...baseTheme,
  black: DEFAULT_THEME.colors.dark[6],
  colorScheme: 'light',
  globalStyles: (theme) => ({
    a: {
      color: 'inherit',
    },
    body: {
      background:
        theme.colorScheme === 'light'
          ? theme.colors.gray[1]
          : theme.colors.gray[9],
    },
  }),
  primaryColor: 'cyan',
  primaryShade: 9,
  white: '#fff',
};

export const primaryTheme: MantineThemeOverride = {
  ...baseTheme,
  black: DEFAULT_THEME.colors.cyan[9],
  colorScheme: 'dark',
  colors: {
    dark: [
      '#fff',
      DEFAULT_THEME.colors.cyan[1],
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
    ...baseTheme.components,
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

export const secondaryTheme: MantineThemeOverride = {
  ...baseTheme,
  black: DEFAULT_THEME.colors.gray[8],
  colorScheme: 'dark',
  colors: {
    dark: [
      '#fff',
      DEFAULT_THEME.colors.gray[1],
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
    ...baseTheme.components,
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
  main: {
    color: '#fff',
    theme: mainTheme,
    title: 'Main theme',
  },
  primary: {
    color: DEFAULT_THEME.colors.cyan[9],
    theme: primaryTheme,
    title: 'Primary theme',
  },
  secondary: {
    color: DEFAULT_THEME.colors.gray[8],
    theme: secondaryTheme,
    title: 'Secondary theme',
  },
};
