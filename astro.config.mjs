// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: true, // Necesario para que funcione la IP 192.168.100.6
    port: 4321, 
  },
  vite: {
    server: {
      // ❌ DEJA COMENTADO TODO LO DE NGROK:
      // allowedHosts: ['tapioca-applicant-deem.ngrok-free.dev'],
      // ws: { clientPort: 443 }, 
      cors: true,
    },
    css: { devSourcemap: true },
  },
  markdown: { syntaxHighlight: 'prism' },
});
  /* security: {
    csp: {
      scriptDirective: {
        resources: [
          "'self'", 
          "'unsafe-inline'", 
          "'unsafe-eval'", 
          "https://kit.fontawesome.com"
        ]
      },
      styleDirective: {
        resources: [
          "'self'", 
          "'unsafe-inline'"
        ]
      },
      directives: [
        "font-src 'self' https://kit.fontawesome.com https://fonts.gstatic.com data:",
        "img-src 'self' data: https:",
        // ✅ Permitimos explícitamente WebSockets en cualquier puerto local
        "connect-src 'self' https://kit.fontawesome.com ws://localhost:* wss://localhost:*",
      ],
    },
  },*/
