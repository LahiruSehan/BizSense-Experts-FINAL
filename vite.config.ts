import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base path to ensure flexibility across GitHub Pages and other environments
  base: './', 
  build: {
    outDir: 'dist',
  },
  define: {
    'process.env': {
      API_KEY: process.env.API_KEY
    }
  }
})