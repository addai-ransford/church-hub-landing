import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import obfuscator from 'vite-plugin-javascript-obfuscator'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5173,
    allowedHosts: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [react(),
  obfuscator({
    include: ['**/*.js'],
    apply: 'build',
    options: {
      compact: true,
      controlFlowFlattening: true,
    },
  }),
  ],
  build: {
    sourcemap: false
  }
})
