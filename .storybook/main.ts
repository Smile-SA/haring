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
    '../packages/react-front-kit/src/Components/BitConverted/*.stories.tsx',
    '../packages/react-front-kit/src/Components/Breadcrumbs/*.stories.tsx',
    '../packages/react-front-kit/src/Components/ButtonListOrDropdown/*.stories.tsx',
    '../packages/react-front-kit/src/Components/CardHeader/*.stories.tsx',
    '../packages/react-front-kit/src/Components/CollapseButton/*.stories.tsx',
    '../packages/react-front-kit/src/Components/ConfirmModal/*.stories.tsx',
    '../packages/react-front-kit/src/Components/DocumentBox/*.stories.tsx',
    '../packages/react-front-kit/src/Components/DocumentList/*.stories.tsx',
    '../packages/react-front-kit/src/Components/SelectableList/*.stories.tsx',
    // '../packages/*/src/**/*.mdx', // TODO: once all components are migrated, revert to this
    // '../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
};
export default config;
