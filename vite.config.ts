import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteImageOptimizer()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
