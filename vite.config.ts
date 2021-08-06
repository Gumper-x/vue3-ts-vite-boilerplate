import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    checker({
      vls: true,
      vueTsc: true,
      typescript: true,
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
          @import '@/assets/scss/mixins';
        `,
      },
    },
  },
});
