import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // ⚠️ 关键：设置 base
  // 个人站点（<username>.github.io）设为 '/'
  // 项目站点（<username>.github.io/<repo>/）设为 '/<repo>/'
  base: '/my-vue3-app/',
})