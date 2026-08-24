import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/my-vue3-app/',   // ← 改成你的仓库名，前后带斜杠
})
