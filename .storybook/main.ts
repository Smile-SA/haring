import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  stories: [
    '../packages/react-front-kit/src/Components/ActionBar/ActionBar.stories.@(js|jsx|ts|tsx)',
    '../packages/react-front-kit/src/Components/ActionRowOverflow/*.stories.tsx',
    '../packages/react-front-kit/src/Components/ConfirmModal/*.stories.tsx',
    // '../packages/*/src/**/*.mdx',
    // '../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
};
export default config;
