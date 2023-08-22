import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const rootDir = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ tsDecorators: true })],
  resolve: {
    alias: {
      '@config': path.resolve(rootDir, 'config'),
      '@app': path.resolve(rootDir, 'src/app'),
      '@widgets': path.resolve(rootDir, 'src/widgets'),
      '@pages': path.resolve(rootDir, 'src/pages'),
      '@routing': path.resolve(rootDir, 'src/routing'),
      '@entities': path.resolve(rootDir, 'src/entities'),
      '@shared': path.resolve(rootDir, 'src/shared'),
      '@tests': path.resolve(rootDir, 'src/tests'),
    },
  },
});
