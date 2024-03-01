// vite.config.js
import { resolve } from 'path';
import react from 'file:///home/vaper/Dev/react-front-kit/node_modules/@vitejs/plugin-react-swc/index.mjs';
import { defineConfig } from 'file:///home/vaper/Dev/react-front-kit/packages/react-front-kit/node_modules/vite/dist/node/index.js';
import dts from 'file:///home/vaper/Dev/react-front-kit/node_modules/vite-plugin-dts/dist/index.mjs';
var __vite_injected_original_dirname =
  '/home/vaper/Dev/react-front-kit/packages/react-front-kit';
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
        index: resolve(__vite_injected_original_dirname, 'src/index.tsx'),
        server: resolve(__vite_injected_original_dirname, 'src/server.tsx'),
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS92YXBlci9EZXYvcmVhY3QtZnJvbnQta2l0L3BhY2thZ2VzL3JlYWN0LWZyb250LWtpdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvdmFwZXIvRGV2L3JlYWN0LWZyb250LWtpdC9wYWNrYWdlcy9yZWFjdC1mcm9udC1raXQvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvdmFwZXIvRGV2L3JlYWN0LWZyb250LWtpdC9wYWNrYWdlcy9yZWFjdC1mcm9udC1raXQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5cbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHN4JyksXG4gICAgICBmaWxlTmFtZTogJ1tuYW1lXScsXG4gICAgICBmb3JtYXRzOiBbJ2NqcycsICdlcyddLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcbiAgICAgICAgJ0BlbW90aW9uL3JlYWN0JyxcbiAgICAgICAgJ0BtYW50aW5lL2Nhcm91c2VsJyxcbiAgICAgICAgJ0BtYW50aW5lL2NvcmUnLFxuICAgICAgICAnQG1hbnRpbmUvZGF0ZXMnLFxuICAgICAgICAnQG1hbnRpbmUvZHJvcHpvbmUnLFxuICAgICAgICAnQG1hbnRpbmUvaG9va3MnLFxuICAgICAgICAnQHBob3NwaG9yLWljb25zL3JlYWN0JyxcbiAgICAgICAgJ0BzbWlsZS9yZWFjdC1mcm9udC1raXQnLFxuICAgICAgICAnQHNtaWxlL3JlYWN0LWZyb250LWtpdC1kYXRlcycsXG4gICAgICAgICdAc21pbGUvcmVhY3QtZnJvbnQta2l0LWRyb3B6b25lJyxcbiAgICAgICAgJ0BzbWlsZS9yZWFjdC1mcm9udC1raXQtc2hhcmVkJyxcbiAgICAgICAgJ0BzbWlsZS9yZWFjdC1mcm9udC1raXQtdGFibGUnLFxuICAgICAgICAnQHN0b3J5Ym9vay9hZGRvbi1hY3Rpb25zJyxcbiAgICAgICAgJ0BzdG9yeWJvb2svcHJldmlldy1hcGknLFxuICAgICAgICAnQHRhYmxlci9pY29ucy1yZWFjdCcsXG4gICAgICAgICdAdGVzdGluZy1saWJyYXJ5L3JlYWN0JyxcbiAgICAgICAgJ2RheWpzJyxcbiAgICAgICAgJ2VtYmxhLWNhcm91c2VsLXJlYWN0JyxcbiAgICAgICAgJ21hbnRpbmUtcmVhY3QtdGFibGUnLFxuICAgICAgICAncmVhY3QnLFxuICAgICAgICAncmVhY3QvanN4LXJ1bnRpbWUnLFxuICAgICAgXSxcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIGluZGV4OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50c3gnKSxcbiAgICAgICAgc2VydmVyOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9zZXJ2ZXIudHN4JyksXG4gICAgICB9LFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGJhbm5lcjogKGNodW5rSW5mbykgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIFsnc3JjL2luZGV4LnRzeCddLmZpbmQoKG1vZHVsZVBhdGgpID0+XG4gICAgICAgICAgICAgIGNodW5rSW5mby5mYWNhZGVNb2R1bGVJZD8uZW5kc1dpdGgobW9kdWxlUGF0aCksXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gYFwidXNlIGNsaWVudFwiYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9LFxuICAgICAgICBwcmVzZXJ2ZU1vZHVsZXM6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBkdHMoe1xuICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcbiAgICAgIHRzY29uZmlnUGF0aDogJy4vdHNjb25maWcuYnVpbGQuanNvbicsXG4gICAgfSksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFYsU0FBUyxlQUFlO0FBRWxYLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFKaEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxNQUN6QyxVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsT0FBTyxJQUFJO0FBQUEsSUFDdkI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxPQUFPO0FBQUEsUUFDTCxPQUFPLFFBQVEsa0NBQVcsZUFBZTtBQUFBLFFBQ3pDLFFBQVEsUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUM3QztBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sUUFBUSxDQUFDLGNBQWM7QUFDckIsY0FDRSxDQUFDLGVBQWUsRUFBRTtBQUFBLFlBQUssQ0FBQyxlQUN0QixVQUFVLGdCQUFnQixTQUFTLFVBQVU7QUFBQSxVQUMvQyxHQUNBO0FBQ0EsbUJBQU87QUFBQSxVQUNUO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQUEsUUFDQSxpQkFBaUI7QUFBQSxNQUNuQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsTUFDRixrQkFBa0I7QUFBQSxNQUNsQixjQUFjO0FBQUEsSUFDaEIsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
