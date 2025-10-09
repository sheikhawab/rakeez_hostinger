// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
  
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 0.0.0.0 bind for ngrok
    port: 5173,
    strictPort: true,
    // allowedHosts: ['e91e26f086e9.ngrok-free.app'], // ngrok domain allow
    // allowedHosts: ['11b6826f455b.ngrok-free.app '], // ngrok domain allow
     allowedHosts: ['11b6826f455b.ngrok-free.app'], // ✅ no space here
  },
})
