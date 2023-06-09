import type { MantineThemeOverride } from '@mantine/core';
import type { ReactNode } from 'react';

import { MantineProvider } from '@mantine/core';

import { mainTheme } from '../../theme';

interface IProviderProps {
  children?: ReactNode;
  theme?: MantineThemeOverride;
}
export function Provider(props: IProviderProps): JSX.Element {
  const { children, theme = mainTheme } = props;

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  );
}
