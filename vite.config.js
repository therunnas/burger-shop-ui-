import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE para GitHub Pages (subpasta do repositório)
  base: '/burger-shop-ui-/',
})
