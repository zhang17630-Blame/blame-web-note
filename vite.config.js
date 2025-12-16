import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚠️ 关键配置：这里的 'blame-web-note' 是你你实际的 GitHub 仓库名
  base: '/blame-web-note/', 
})