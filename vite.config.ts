import path from 'path';
import { defineConfig } from 'vite';
import relay from 'vite-plugin-relay';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

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
