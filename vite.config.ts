import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['framer-motion', 'react-i18next', 'i18next'],
  },
  build: {
    // Enable minification and optimization
    minify: 'esbuild',
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-framer': ['framer-motion'],
          'vendor-i18n': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          'vendor-icons': ['lucide-react', 'react-icons'],
        },
      },
    },
    // Enable source maps for debugging (disable in production if needed)
    sourcemap: false,
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
  },
  // Enable CSS code splitting
  css: {
    devSourcemap: true,
  },
});
