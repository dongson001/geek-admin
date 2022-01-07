const path = require('path');
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteMockServe } from "vite-plugin-mock";
function resolve(dir) {
  return path.join(__dirname, dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9094,
    host: '0.0.0.0',
  },
  plugins: [
    vue(),
    vueJsx(),
    viteMockServe({
      mockPath: "mock",
      supportTs: false,
      localEnabled: true
    })
  ],

  resolve: {
    extensions: ['.js', '.vue', '.json', 'jsx'],
    alias: {
      '@': resolve('src'),
    },
  },
});
