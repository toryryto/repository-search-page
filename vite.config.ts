import path from 'path';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import relay from 'vite-plugin-relay';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  plugins: [
    react({ babel: { plugins: ['relay'] } }),
    relay,
    vanillaExtractPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
