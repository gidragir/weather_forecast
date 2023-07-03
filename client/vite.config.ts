import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
//   // ...vite configures
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
                changeOrigin: true,
      }
    },
    port: 5197
  },
  plugins: [
    react(),
  ],
  optimizeDeps: {
    exclude: [
        '@nestjs/microservices',
        '@nestjs/websockets',
        'cache-manager',
        'class-transformer',
        'class-validator',
        'fastify-swagger',
      ],
  },
});