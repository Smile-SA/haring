import type { Preview, StoryContext, StoryFn } from '@storybook/react';

import * as React from 'react';

import { Provider } from '../src/3-custom/Provider/Provider';
import { themes } from '../src/theme';

function withProvider(Story: StoryFn, context: StoryContext): JSX.Element {
  return (
    <Provider theme={themes[context.globals.theme]?.theme}>
      <Story />
    </Provider>
  );
}

const style = {
  border: '1px solid lightgrey',
  borderRadius: 7,
  height: 14,
  width: 14,
};
const preview: Preview = {
  decorators: [withProvider],
  globalTypes: {
    theme: {
      defaultValue: 'main',
      description: 'Theme',
      toolbar: {
        dynamicTitle: true,
        items: Object.entries(themes).map(([key, theme]) => ({
          ...theme,
          left: <div style={{ ...style, background: theme.color }} />,
          value: key,
        })),
        title: 'Theme',
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
