import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx"; // 配置vue使用jsx

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  server: {
    // 始终显示
    open: true,
    // ���口号
    port: 8080,
  },
});
