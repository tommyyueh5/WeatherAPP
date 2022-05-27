import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import Path from 'path'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss],
  server: {
    open: true,
    port: 4200
  },
  preview: {
    port: 8080
  },
  resolve: {
    alias: {
      '@': Path.resolve(__dirname, 'src'),
      '/images': 'src/assets/images'
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }

})