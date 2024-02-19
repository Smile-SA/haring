// vite.config.js
import { resolve } from 'path';
import react from 'file:///Users/valentin/Developer/smile/react-front-kit/node_modules/@vitejs/plugin-react-swc/index.mjs';
import { defineConfig } from 'file:///Users/valentin/Developer/smile/react-front-kit/packages/storybook-pages/node_modules/vite/dist/node/index.js';
import dts from 'file:///Users/valentin/Developer/smile/react-front-kit/node_modules/vite-plugin-dts/dist/index.mjs';
var __vite_injected_original_dirname =
  '/Users/valentin/Developer/smile/react-front-kit/packages/storybook-pages';
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, 'src/index.tsx'),
      fileName: '[name]',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: [
        '@emotion/react',
        '@mantine/carousel',
        '@mantine/core',
        '@mantine/dates',
        '@mantine/dropzone',
        '@mantine/hooks',
        '@phosphor-icons/react',
        '@smile/react-front-kit',
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
        index: resolve(__vite_injected_original_dirname, 'src/index.tsx'),
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
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdmFsZW50aW4vRGV2ZWxvcGVyL3NtaWxlL3JlYWN0LWZyb250LWtpdC9wYWNrYWdlcy9zdG9yeWJvb2stcGFnZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy92YWxlbnRpbi9EZXZlbG9wZXIvc21pbGUvcmVhY3QtZnJvbnQta2l0L3BhY2thZ2VzL3N0b3J5Ym9vay1wYWdlcy92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvdmFsZW50aW4vRGV2ZWxvcGVyL3NtaWxlL3JlYWN0LWZyb250LWtpdC9wYWNrYWdlcy9zdG9yeWJvb2stcGFnZXMvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5cbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHN4JyksXG4gICAgICBmaWxlTmFtZTogJ1tuYW1lXScsXG4gICAgICBmb3JtYXRzOiBbJ2NqcycsICdlcyddLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcbiAgICAgICAgJ0BlbW90aW9uL3JlYWN0JyxcbiAgICAgICAgJ0BtYW50aW5lL2Nhcm91c2VsJyxcbiAgICAgICAgJ0BtYW50aW5lL2NvcmUnLFxuICAgICAgICAnQG1hbnRpbmUvZGF0ZXMnLFxuICAgICAgICAnQG1hbnRpbmUvZHJvcHpvbmUnLFxuICAgICAgICAnQG1hbnRpbmUvaG9va3MnLFxuICAgICAgICAnQHBob3NwaG9yLWljb25zL3JlYWN0JyxcbiAgICAgICAgJ0BzbWlsZS9yZWFjdC1mcm9udC1raXQnLFxuICAgICAgICAnQHNtaWxlL3JlYWN0LWZyb250LWtpdC1kcm9wem9uZScsXG4gICAgICAgICdAc21pbGUvcmVhY3QtZnJvbnQta2l0LXNoYXJlZCcsXG4gICAgICAgICdAc21pbGUvcmVhY3QtZnJvbnQta2l0LXRhYmxlJyxcbiAgICAgICAgJ0BzdG9yeWJvb2svYWRkb24tYWN0aW9ucycsXG4gICAgICAgICdAc3Rvcnlib29rL3ByZXZpZXctYXBpJyxcbiAgICAgICAgJ0B0YWJsZXIvaWNvbnMtcmVhY3QnLFxuICAgICAgICAnQHRlc3RpbmctbGlicmFyeS9yZWFjdCcsXG4gICAgICAgICdkYXlqcycsXG4gICAgICAgICdlbWJsYS1jYXJvdXNlbC1yZWFjdCcsXG4gICAgICAgICdtYW50aW5lLXJlYWN0LXRhYmxlJyxcbiAgICAgICAgJ3JlYWN0JyxcbiAgICAgICAgJ3JlYWN0L2pzeC1ydW50aW1lJyxcbiAgICAgIF0sXG4gICAgICBpbnB1dDoge1xuICAgICAgICBpbmRleDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHN4JyksXG4gICAgICB9LFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGJhbm5lcjogKGNodW5rSW5mbykgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIFsnc3JjL2luZGV4LnRzeCddLmZpbmQoKG1vZHVsZVBhdGgpID0+XG4gICAgICAgICAgICAgIGNodW5rSW5mby5mYWNhZGVNb2R1bGVJZD8uZW5kc1dpdGgobW9kdWxlUGF0aCksXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gYFwidXNlIGNsaWVudFwiYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9LFxuICAgICAgICBwcmVzZXJ2ZU1vZHVsZXM6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBkdHMoe1xuICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcbiAgICAgIHRzY29uZmlnUGF0aDogJy4vdHNjb25maWcuYnVpbGQuanNvbicsXG4gICAgfSksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFksU0FBUyxlQUFlO0FBRWxhLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFKaEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxNQUN6QyxVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsT0FBTyxJQUFJO0FBQUEsSUFDdkI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLE9BQU87QUFBQSxRQUNMLE9BQU8sUUFBUSxrQ0FBVyxlQUFlO0FBQUEsTUFDM0M7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLFFBQVEsQ0FBQyxjQUFjO0FBQ3JCLGNBQ0UsQ0FBQyxlQUFlLEVBQUU7QUFBQSxZQUFLLENBQUMsZUFDdEIsVUFBVSxnQkFBZ0IsU0FBUyxVQUFVO0FBQUEsVUFDL0MsR0FDQTtBQUNBLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUFBLFFBQ0EsaUJBQWlCO0FBQUEsTUFDbkI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0Ysa0JBQWtCO0FBQUEsTUFDbEIsY0FBYztBQUFBLElBQ2hCLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
