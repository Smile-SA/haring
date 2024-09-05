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
        '@mantine/core',
        '@mantine/hooks',
        '@phosphor-icons/react',
        '@smile/haring-react',
        '@smile/haring-react-shared',
        '@storybook/addon-actions',
        '@storybook/preview-api',
        '@tabler/icons-react',
        '@testing-library/react',
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
