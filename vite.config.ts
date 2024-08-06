import { fileURLToPath, URL } from 'node:url'

import { defineConfig, preview } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue({
    //   template: {
    //     compilerOptions: {
    //       isCustomElement: (tag) => tag.includes('Todo') || tag === 'HelloWorld'
    //     }
    //   }
    // }),
    vue(),
    vueDevTools(),
    federation({
      name: 'todo-list-host',
      remotes: {
        'todo-list-remote': 'http://localhost:5001/assets/remoteEntry.js'
      },
      shared: ['vue']
    })
  ],
  build: {
    minify: false,
    target: ['chrome89']
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
