// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    // Permite que el servidor escuche en todas las interfaces de red (necesario para Ngrok)
    host: true, 
    port: 4321, // Asegúrate de que sea el mismo puerto que usas localmente
  },
  vite: {
    server: {
      // IMPORTANTE: Sin https:// y sin barra al final
      allowedHosts: ['tapioca-applicant-deem.ngrok-free.dev'],
      // Permite que el Hot Module Replacement (HMR) funcione a través del proxy seguro de Ngrok
      hmr: {
        clientPort: 443, 
      },
      // Permite peticiones CORS (útil para Ngrok)
      cors: true,
    },
    // Configuración de CSS para desarrollo
    css: {
      devSourcemap: true,
    },
  },
  // Configuración de seguridad para el desarrollo
  security: {
    // Esto es clave para que la CSP no bloquee los scripts de Vite/Astro en dev.
    // Permite scripts inline y eval solo en modo desarrollo.
    csp: {
      directives: [
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://kit.fontawesome.com",
        "style-src 'self' 'unsafe-inline'",
        "font-src 'self' https://kit.fontawesome.com https://fonts.gstatic.com",
        "img-src 'self' data: https:",
        "connect-src 'self' https://kit.fontawesome.com",
      ],
    },
  },
});