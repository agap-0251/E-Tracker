import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server : {
    proxy: {
      '/api' :{
        target : "http://exp-api-qlei.onrender.com/api",
   secure : false}
      }

  },
  plugins: [react()]
})
