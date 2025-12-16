import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  // ⚠️ 关键配置：这里的 'blame-web-note' 是你你实际的 GitHub 仓库名
  base: '/blame-web-note/', 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})