import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure proper routing for SPA
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
