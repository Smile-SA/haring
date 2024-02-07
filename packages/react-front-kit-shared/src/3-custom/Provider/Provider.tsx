'use client';

import type { IThemeOverride } from '../../types';
import type { ReactElement, ReactNode } from 'react';

import { MantineProvider } from '@mantine/core';

import { themeContext } from '../../contexts';
import { createThemes } from '../../helpers';

export interface IProviderProps extends IThemeOverride {
  children?: ReactNode;
}

export function Provider(props: IProviderProps): ReactElement {
  const { children, ...themeConfig } = props;
  const themes = createThemes(themeConfig);
  const { main } = themes;

  return (
    <themeContext.Provider value={themes}>
      <MantineProvider theme={main}>{children}</MantineProvider>
    </themeContext.Provider>
  );
}
