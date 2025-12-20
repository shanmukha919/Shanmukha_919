import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Shanmukha_919/',
  build: {
    outDir: 'docs'
  }
})
