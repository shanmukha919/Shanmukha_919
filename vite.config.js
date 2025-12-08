import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Shannu-lakshmi-919/',   // EXACT repo name
  build: {
    outDir: 'docs'
  }
})
