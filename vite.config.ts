import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
  ],
  server: {},

  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      theme: path.resolve(__dirname, 'src/theme'),
      types: path.resolve(__dirname, 'src/types'),
      'ui-library': path.resolve(__dirname, 'src/ui-library'),
    },
  },
});
