import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入path，可以获取绝对路径
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  // src文件夹配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // 配置跨域代理
  server: {
    proxy: {
      '/api': {
        target: 'http://syt.atguigu.cn',
        changeOrigin: true,
      }
    }
  }
})
