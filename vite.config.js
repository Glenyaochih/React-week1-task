import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //下面這一段是設定是判斷使用開發中的路徑，還是產品的路徑
  base: process.env.NODE_ENV === 'production'? '/React-week1-task/':'/',
  plugins: [react()],
})
