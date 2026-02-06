/**
 * Vite Configuration for ipablo.dev Portfolio
 * Optimized for performance with React 18 and TypeScript
 * Last updated: 2026-02-06
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, './src/core'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@ui': path.resolve(__dirname, './src/ui'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@types': path.resolve(__dirname, './src/core/types'),
    },
  },
  server: {
    port: 3000,
    open: true,
    headers: {
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  },
  build: {
    outDir: 'build',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-redux', 'redux', '@reduxjs/toolkit'],
          icons: ['react-icons/fa'],
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    chunkSizeWarningLimit: 500,
  },
});
