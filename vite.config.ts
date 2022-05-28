import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';
const vars = path.resolve(__dirname, './src/assets/style/var.less');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      viteCompression(),
  ],
    css: {
        preprocessorOptions: {
            less: {
                globalVars: {
                    hack: `true; @import "${vars}"`
                },
                modifyVars: {},
                javascriptEnabled: true
            }
        }
    }
})
