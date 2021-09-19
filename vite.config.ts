import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import ViteVisualizer from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteVisualizer({
      filename: "./dist/report.html",
      open: true,
      template: "network",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  envDir: resolve(__dirname, "./env"),
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '@/assets/scss/global';
          @import '@/assets/scss/mixins';
        `,
      },
    },
  },
});
