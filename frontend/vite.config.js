import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server : {
    proxy: {
      '/api' :"https://e-tracker-backend-git-main-agap-0251.vercel.app",
    }

  },
  plugins: [react()]
})
