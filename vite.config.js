import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';


const srcPath = path.resolve(__dirname, 'src');


export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [VantResolver()],
        }),
        Components({
            resolvers: [VantResolver()],
        }),
    ],

    resolve: {
        // 配置路径别名
        alias: [
            {find: '@', replacement: srcPath},
        ],
    },

})
