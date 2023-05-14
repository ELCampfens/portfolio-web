import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "../node_modules/bootstrap/scss/mixins";
        @import "../node_modules/bootstrap/scss/functions";
        @import "../node_modules/bootstrap/scss/variables";
        @import "./src/styles/light-style.scss";
        `
      }
    }
  },
})
