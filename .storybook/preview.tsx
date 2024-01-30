/* eslint-disable import/order */

import type { Preview } from '@storybook/react';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/carousel/styles.css';
import { themes } from '@smile/react-front-kit-shared';
import '@smile/react-front-kit-shared/style.css';

import WithProvider from './WithProvider';

const style = {
  border: '1px solid lightgrey',
  borderRadius: 7,
  height: 14,
  width: 14,
};
const preview: Preview = {
  decorators: [WithProvider],
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
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
