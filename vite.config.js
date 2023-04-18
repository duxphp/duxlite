import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'duxweb-cli/plugins/unocss'
import duxweb from 'duxweb-cli/plugins/duxweb'
import { resolve } from 'path'

import fs from 'fs'
import { parse } from 'yaml'

const requestConfig = (() => {
  let config = {}
  const url = './config/use.yaml'
  const devUrl = './config/use.dev.yaml'
  if (fs.existsSync(devUrl)) {
    config = parse(fs.readFileSync(devUrl, { encoding: 'utf8' }))
  } else if (fs.existsSync(url)) {
    config = parse(fs.readFileSync(url, { encoding: 'utf8' }))
  }
  // use 只读取链接地址
  if (config.app) {
    config = {
      domain: config.app.domain,
      websocket: config.app.websocket
    }
  }
  return config
})();


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
    outDir: resolve(__dirname, 'public/client'),
  },
  server: {
    proxy: {
      '^/(?!client\\b).*': requestConfig.domain,
      '^/ws': {
        target: requestConfig.websocket,
        ws: true,
      }
    }
  }
})
