import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      exposes: {
        './Cats': './src/features/cats/components/CatItem.tsx',
      },
      shared: ['react'],
    }),
    react(),
    tsconfigPaths(),
  ],
  build: {
    target: 'esnext',
  },
});
