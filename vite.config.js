import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import Path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open:true,
    port: 4200
  },
  preview: {
    port: 8080
  },
  resolve: {
    alias: {
      '@': Path.resolve(__dirname, 'src')
    },
  },
  plugins: [vue()]
})