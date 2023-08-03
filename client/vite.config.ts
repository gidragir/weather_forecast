import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/graphql': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
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
        '@apollo/client/core',
        '@apollo/client/cache'
      ],
  },
});