import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'duxweb-cli/plugins/unocss'
import duxweb from 'duxweb-cli/plugins/duxweb'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, 'client'),
  base: '/client/',
  plugins: [
    react(),
    duxweb(),
    Unocss()
  ],
  publicDir: false,
  resolve: {
    alias: {
      '@/app': resolve(__dirname, 'client/app')
    }
  },
  build: {
    outDir: resolve(__dirname, 'public')
  }
})
