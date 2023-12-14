import type { MantineThemeColors, MantineThemeOverride } from '@mantine/core';

export interface IThemeOverride {
  baseTheme?: MantineThemeOverride;
  mainTheme?: MantineThemeOverride;
  primaryColor?: keyof MantineThemeColors;
  primaryTheme?: MantineThemeOverride;
  secondaryColor?: keyof MantineThemeColors;
  secondaryTheme?: MantineThemeOverride;
}

export interface IThemes {
  main: MantineThemeOverride;
  primary: MantineThemeOverride;
  secondary: MantineThemeOverride;
}
