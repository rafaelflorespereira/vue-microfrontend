import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import federation from '@originjs/vite-plugin-federation'
import topLevelAwait from 'vite-plugin-top-level-await'

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    host: 'localhost',
    port: 5001,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  base: 'http://localhost:5001',
  build: {
    minify: false,
    target: ['chrome89']
  },
  plugins: [
    vue(),
    vueJsx(),
    federation({
      name: 'todo-list-remote',
      filename: 'remoteEntry.js',
      exposes: {
        './About': './src/views/AboutView.vue',
        './HelloWorld': './src/components/HelloWorld.vue'
      },
      shared: ['vue']
    }),
    topLevelAwait({
      promiseExportName: '__tla',
      promiseImportName: (i) => `__tla_${i}`
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
