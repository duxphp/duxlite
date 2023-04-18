import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, 'web'),
  base: '/web/',
  plugins: [
    react()
  ],
  publicDir: false,
  build: {
    outDir: resolve(__dirname, 'dist', 'h5'),
  }
})
