import type { IThemeOverride, IThemes } from '../types';
import type { MantineThemeOverride } from '@mantine/core';

import { DEFAULT_THEME } from '@mantine/core';

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
    // focusRingStyles: baseFocusRingStyles,
    fontSizes: baseFontSizes,
    headings: baseHeadings,
    ...baseRest
  } = baseTheme;
  const base: MantineThemeOverride = {
    // TODO: activeStyles is now activeClassName, but it's a type string
    // activeStyles: {
    //   transform: '',
    // },
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
    // TODO: focusRingStyles is now focusClassName, but it's a type string
    // focusRingStyles: {
    //   // Default orange for focus-ring on all elements and Input-based components
    //   inputStyles: (theme) => ({
    //     outline: `${rem(2)} solid ${theme.colors.orange[5]}`,
    //   }),
    //   styles: (theme) => ({
    //     outline: `${rem(2)} solid ${theme.colors.orange[5]}`,
    //   }),
    //   ...baseFocusRingStyles,
    // },
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

  // TODO: globalStyles no longer exists, now need to create a global stylesheet file and import it
  const { /* globalStyles: mainGlobalStyles, */ ...mainRest } = mainTheme;
  const main: MantineThemeOverride = {
    ...base,
    black: DEFAULT_THEME.colors.dark[6],
    // colorScheme: 'light', // TODO: colorScheme no longer exists
    // globalStyles: (theme) => ({ // TODO: globalStyles no longer exists
    //   '.mantine-Carousel-control': {
    //     height: '42px',
    //     svg: {
    //       color: theme.colors[theme.primaryColor][9],
    //     },
    //     width: '42px',
    //   },
    //   '.mantine-Carousel-controls': {
    //     padding: '0 5%',
    //   },
    //   '.mantine-Carousel-indicator': {
    //     '&[data-active="true"]': {
    //       transitionDuration: '500ms',
    //       width: '32px',
    //     },
    //     height: '4px',
    //     transitionDuration: '500ms',
    //     width: '12px',
    //   },
    //   '.mantine-Carousel-indicators': {
    //     justifyContent: 'flex-end',
    //     padding: '3% 5%',
    //   },
    //   '.mantine-Carousel-root': {
    //     borderRadius: '8px',
    //     overflow: 'hidden',
    //   },
    //   a: {
    //     color: 'inherit',
    //   },
    //   body: {
    //     background:
    //       theme.colorScheme === 'light'
    //         ? theme.colors.gray[1]
    //         : theme.colors.gray[9],
    //   },
    //   ...mainGlobalStyles,
    // }),
    primaryColor,
    primaryShade: 9,
    white: '#fff',
    ...mainRest,
  };

  const {
    colors: primaryColors,
    components: primaryComponents,
    ...primaryRest
  } = primaryTheme;
  const primary: MantineThemeOverride = {
    ...base,
    black: DEFAULT_THEME.colors[primaryColor][9],
    // colorScheme: 'dark', // TODO: colorScheme no longer exists
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
    // colorScheme: 'dark', // TODO: colorScheme no longer exists
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
