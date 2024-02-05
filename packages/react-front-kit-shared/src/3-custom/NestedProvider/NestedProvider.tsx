import type { MantineProviderProps } from '@mantine/core';
import type { ElementType, ReactElement, ReactNode } from 'react';

import { MantineProvider } from '@mantine/core';
import { useId } from 'react';

import { useMainTheme } from '../../contexts';

import classes from './NestedProvider.module.css';

export interface INestedProviderProps extends MantineProviderProps {
  Component?: ElementType;
  children: ReactNode;
  className?: string;
}

export function NestedProvider(props: INestedProviderProps): ReactElement {
  const {
    Component = 'div',
    children,
    className,
    theme,
    ...providerProps
  } = props;
  const id = useId();
  const main = useMainTheme();
  const selector = `#${CSS.escape(id)}`;
  const rootClassNames = [classes.nestedProvider];
  if (className) {
    rootClassNames.push(className);
  }

  return (
    <MantineProvider
      cssVariablesSelector={selector}
      forceColorScheme={theme !== main ? 'dark' : undefined}
      getRootElement={() =>
        document.querySelector<HTMLElement>(selector) ?? undefined
      }
      theme={theme}
      {...providerProps}
    >
      <Component className={rootClassNames.join(' ')} id={id}>
        {children}
      </Component>
    </MantineProvider>
  );
}
