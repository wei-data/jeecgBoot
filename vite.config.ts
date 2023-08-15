import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        createSvgIconsPlugin({
            // 要缓存的图标文件夹
            iconDirs: [path.resolve(__dirname, 'src/svg')],
            // 执行 icon name 的格式
            symbolId: 'icon-[name]'
        })],
})
