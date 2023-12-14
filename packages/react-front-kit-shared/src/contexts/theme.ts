import type { IThemes } from '../types';
import type { MantineThemeOverride } from '@mantine/styles';

import { createContext, useContext } from 'react';

export const themeContext = createContext<IThemes>({
  main: {},
  primary: {},
  secondary: {},
});

export function useThemes(): IThemes {
  return useContext(themeContext);
}

export function useMainTheme(): MantineThemeOverride {
  const { main } = useContext(themeContext);
  return main;
}

export function usePrimaryTheme(): MantineThemeOverride {
  const { primary } = useContext(themeContext);
  return primary;
}

export function useSecondaryTheme(): MantineThemeOverride {
  const { secondary } = useContext(themeContext);
  return secondary;
}
