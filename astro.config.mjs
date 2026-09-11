// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: true, // Necesario para que funcione la IP 192.168.100.6
    port: 4322, 
  },
  vite: {
    server: {
      hmr: {
        host: '192.168.100.6', // IP local para que el WebSocket conecte
      },
      cors: true,
    },
    css: { devSourcemap: true },
  },
  markdown: { syntaxHighlight: 'prism' },
});