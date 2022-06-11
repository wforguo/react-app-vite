import path from 'path';
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';
import vitePluginImp from 'vite-plugin-imp'

const vars = path.resolve(__dirname, './src/style/var.less');

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    plugins: [
        react(),
        viteCompression(),
        vitePluginImp({
            optimize: true,
            libList: [
                {
                    libName: 'antd',
                    libDirectory: 'es',
                    style: (name) => `antd/es/${name}/style`
                }
            ]
        })
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
