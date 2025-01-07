import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically opens the app in the browser
    port: 3000, // Sets the development server to run on port 3000
  },
  build: {
    outDir: 'dist', // Specifies the output directory for the build
    rollupOptions: {
      input: './index.html', // Explicitly defines the entry point (optional for most cases)
    },
  },
});

