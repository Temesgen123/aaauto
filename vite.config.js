import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   base : "/aaauto/",
//   plugins: [react()],
// })

export default defineConfig({
  build: {
    outDir: 'dist'
  }
})

