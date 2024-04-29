import type { StoryContext, StoryFn } from '@storybook/react';
import type { ReactElement } from 'react';

import { MantineProvider } from '@mantine/core';

import { Provider, themes } from '@smile/haring-react-shared';

import ColorScheme from './ColorScheme';

export default function WithProvider(
  Story: StoryFn,
  context: StoryContext,
): ReactElement {
  const {
    globals: { theme },
  } = context;
  return (
    <Provider>
      <MantineProvider
        theme={themes[theme as 'main' | 'primary' | 'secondary'].theme}
      >
        <ColorScheme context={context} />
        <Story />
      </MantineProvider>
    </Provider>
  );
}
