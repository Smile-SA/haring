import type { IThemeOverride, IThemes } from '../types';
import type { MantineThemeOverride } from '@mantine/core';

import { DEFAULT_THEME } from '@mantine/core';

import './globalStyles.css';

export function createThemes(themeConfig: IThemeOverride = {}): IThemes {
  const {
    baseTheme = {},
    mainTheme = {},
    primaryColor = 'cyan',
    primaryTheme = {},
    secondaryColor = 'gray',
    secondaryTheme = {},
  } = themeConfig;

  const {
    components: baseComponents,
    fontSizes: baseFontSizes,
    headings: baseHeadings,
    ...baseRest
  } = baseTheme;
  const base: MantineThemeOverride = {
    activeClassName: 'haring-active',
    components: {
      Checkbox: {
        defaultProps: {
          radius: 'sm',
        },
      },
      ...baseComponents,
    },
    cursorType: 'pointer',
    defaultRadius: '1.5rem',
    focusClassName: 'haring-focus',
    fontFamily: 'var(--rfk-font, Open Sans)',
    fontSizes: {
      lg: '18px',
      md: '14px',
      sm: '12px',
      xl: '20px',
      xs: '10px',
      ...baseFontSizes,
    },
    headings: {
      fontWeight: '700',
      sizes: {
        h1: { fontSize: '26px', lineHeight: '135%' },
        h2: { fontSize: '18px', lineHeight: '155%' },
        h3: { fontSize: '14px', lineHeight: '155%' },
      },
      ...baseHeadings,
    },
    ...baseRest,
  };

  const main: MantineThemeOverride = {
    ...base,
    black: DEFAULT_THEME.colors.dark[6],
    primaryColor,
    primaryShade: 9,
    white: '#fff',
    ...mainTheme,
  };

  const {
    colors: primaryColors,
    components: primaryComponents,
    ...primaryRest
  } = primaryTheme;
  const primary: MantineThemeOverride = {
    ...base,
    black: DEFAULT_THEME.colors[primaryColor][9],
    colors: {
      dark: [
        '#fff',
        DEFAULT_THEME.colors[primaryColor][1],
        DEFAULT_THEME.colors[primaryColor][7],
        DEFAULT_THEME.colors[primaryColor][7],
        DEFAULT_THEME.colors[primaryColor][7],
        DEFAULT_THEME.colors[primaryColor][8],
        DEFAULT_THEME.colors[primaryColor][8],
        DEFAULT_THEME.colors[primaryColor][9],
        DEFAULT_THEME.colors[primaryColor][9],
        DEFAULT_THEME.colors[primaryColor][9],
      ],
      ...primaryColors,
    },
    components: {
      ...base.components,
      Input: {
        defaultProps: {
          variant: 'filled',
        },
      },
      ...primaryComponents,
    },
    primaryColor: 'dark',
    primaryShade: 0,
    white: '#000',
    ...primaryRest,
  };

  const {
    colors: secondaryColors,
    components: secondaryComponents,
    ...secondaryRest
  } = secondaryTheme;
  const secondary: MantineThemeOverride = {
    ...base,
    black: DEFAULT_THEME.colors[secondaryColor][8],
    colors: {
      dark: [
        '#fff',
        DEFAULT_THEME.colors[secondaryColor][1],
        DEFAULT_THEME.colors[secondaryColor][6],
        DEFAULT_THEME.colors[secondaryColor][6],
        DEFAULT_THEME.colors[secondaryColor][6],
        DEFAULT_THEME.colors[secondaryColor][7],
        DEFAULT_THEME.colors[secondaryColor][7],
        DEFAULT_THEME.colors[secondaryColor][8],
        DEFAULT_THEME.colors[secondaryColor][9],
        DEFAULT_THEME.colors[secondaryColor][9],
      ],
      ...secondaryColors,
    },
    components: {
      ...base.components,
      Input: {
        defaultProps: {
          variant: 'filled',
        },
      },
      ...secondaryComponents,
    },
    primaryColor: 'dark',
    primaryShade: 0,
    white: '#000',
    ...secondaryRest,
  };

  return {
    main,
    primary,
    secondary,
  };
}
