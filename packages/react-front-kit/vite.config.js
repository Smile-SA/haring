import { resolve } from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      fileName: '[name]',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: [
        '@emotion/react',
        '@mantine/core',
        '@mantine/dates',
        '@mantine/dropzone',
        '@mantine/hooks',
        '@phosphor-icons/react',
        '@storybook/addon-actions',
        '@storybook/preview-api',
        '@tabler/icons-react',
        '@testing-library/react',
        'dayjs',
        'mantine-react-table',
        'react',
        'react/jsx-runtime',
      ],
      input: {
        index: resolve(__dirname, 'src/index.tsx'),
        mock: resolve(__dirname, 'src/mock.tsx'),
        server: resolve(__dirname, 'src/server.tsx'),
      },
      output: {
        preserveModules: false,
      },
    },
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
});
