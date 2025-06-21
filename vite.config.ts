import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ops/', // 👈 aqui define o subcaminho da URL
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
