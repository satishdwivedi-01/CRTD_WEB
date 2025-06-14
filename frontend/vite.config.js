import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(),tailwindcss()],
   resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // This sets @ to src folder
    },
  },
  extend: {
  keyframes: {
    'fade-out': {
      '0%, 80%': { opacity: '1' },
      '100%': { opacity: '0' },
    },
  },
  animation: {
    'fade-out': 'fade-out 2s ease-in-out forwards',
  },
}

})
