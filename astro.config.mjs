import { defineConfig } from 'astro/config';

export default defineConfig({
  server: { host: true, port: 4322 },
  devToolbar: { enabled: false },
  vite: { css: { devSourcemap: true } },
  markdown: { syntaxHighlight: 'prism' },
});