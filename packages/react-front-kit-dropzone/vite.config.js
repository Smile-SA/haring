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
        '@mantine/carousel',
        '@mantine/core',
        '@mantine/dates',
        '@mantine/dropzone',
        '@mantine/hooks',
        '@phosphor-icons/react',
        '@smile/react-front-kit',
        '@smile/react-front-kit-dates',
        '@smile/react-front-kit-dropzone',
        '@smile/react-front-kit-shared',
        '@smile/react-front-kit-table',
        '@storybook/addon-actions',
        '@storybook/preview-api',
        '@tabler/icons-react',
        '@testing-library/react',
        'dayjs',
        'embla-carousel-react',
        'mantine-react-table',
        'react',
        'react/jsx-runtime',
      ],
      input: {
        index: resolve(__dirname, 'src/index.tsx'),
      },
      output: {
        banner: (chunkInfo) => {
          if (
            ['src/index.tsx'].find((modulePath) =>
              chunkInfo.facadeModuleId?.endsWith(modulePath),
            )
          ) {
            return `"use client"`;
          }
          return '';
        },
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
