// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        XWordCheck: resolve(__dirname, 'Round/XWordCheck/index.html'),
        roundtest: resolve(__dirname, 'Round/roundtest.html'),
      },
    },
  },
})