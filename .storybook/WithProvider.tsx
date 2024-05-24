import type { DefaultMantineColor } from '@mantine/core';
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
    args,
    globals: { theme },
    title,
  } = context;

  const isPage = title.toLowerCase().startsWith('3-custom/pages/');
  if (isPage) {
    return (
      <Provider
        primaryColor={args.themePrimaryColor as DefaultMantineColor}
        secondaryColor={args.themeSecondaryColor as DefaultMantineColor}
      >
        <Story />
      </Provider>
    );
  }
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
