import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // permite usar archivos compartidos de games/_shared (fuentes) en modo dev
  server: { fs: { allow: ['..'] } },
});
