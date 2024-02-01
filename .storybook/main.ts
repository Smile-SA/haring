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
    '../packages/react-front-kit/src/Components/BitConverter/*.stories.tsx',
    '../packages/react-front-kit/src/Components/Breadcrumbs/*.stories.tsx',
    '../packages/react-front-kit/src/Components/ButtonListOrDropdown/*.stories.tsx',
    '../packages/react-front-kit/src/Components/CardHeader/*.stories.tsx',
    '../packages/react-front-kit/src/Components/CollapseButton/*.stories.tsx',
    '../packages/react-front-kit/src/Components/ConfirmModal/*.stories.tsx',
    '../packages/react-front-kit/src/Components/DocumentBox/*.stories.tsx',
    '../packages/react-front-kit/src/Components/DocumentList/*.stories.tsx',
    '../packages/react-front-kit/src/Components/DropdownButton/*.stories.tsx',
    '../packages/react-front-kit/src/Components/FilterList/*.stories.tsx',
    '../packages/react-front-kit/src/Components/SearchableCheckboxList/*.stories.tsx',
    '../packages/react-front-kit/src/Components/SelectableList/*.stories.tsx',
    '../packages/react-front-kit/src/Components/SidebarMenu/*.stories.tsx',
    '../packages/react-front-kit/src/Components/Thumbnail/*.stories.tsx',
    '../packages/react-front-kit/src/Components/ThumbnailGrid/*.stories.tsx',
    // '../packages/*/src/**/*.mdx', // TODO: once all components are migrated, revert to this
    // '../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
};
export default config;
