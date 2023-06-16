import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-4rust.js`,
        chunkFileNames: `assets/[name]-4rust.js`,
        assetFileNames: `assets/[name]-4rust.[ext]`
      }
    }
  }
})