import type { Preview, StoryContext, StoryFn } from '@storybook/react';
import type { ReactElement } from 'react';

import { Provider } from '../src/3-custom/Provider/Provider';
import { themes } from '../src/theme';

function withProvider(Story: StoryFn, context: StoryContext): ReactElement {
  return (
    <Provider
      colorScheme={context.globals.colorScheme as 'dark' | 'light'}
      theme={
        themes[context.globals.theme as 'main' | 'primary' | 'secondary'].theme
      }
    >
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
    colorScheme: {
      defaultValue: 'light',
      description: 'Light mode / Dark mode',
      toolbar: {
        dynamicTitle: true,
        items: [
          { icon: 'circlehollow', title: 'Light', value: 'light' },
          { icon: 'circle', title: 'Dark', value: 'dark' },
        ],
      },
    },
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
