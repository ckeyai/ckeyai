import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative base so the build works at /ckeyai/ on GitHub Pages and at any root.
  base: './',
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 3000,
  },
})
