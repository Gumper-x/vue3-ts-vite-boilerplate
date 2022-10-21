import { fileURLToPath, URL } from "url";
import { defineConfig, PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import checker from "vite-plugin-checker";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import graphql from "@rollup/plugin-graphql";
import "dotenv/config";

console.log(process.env.APP_BASE_PATH);
export default defineConfig({
  // base: import.meta.,
  plugins: [
    vue({ template: { transformAssetUrls } }),
    quasar({
      sassVariables: "src/app/assets/scss/quasar-variables.scss",
    }),
    checker({
      vueTsc: true,
      overlay: {
        initialIsOpen: false,
      },
    }),
    vueI18n(),
    graphql() as PluginOption,
  ],
  optimizeDeps: {
    include: ["@apollo/client/core"],
    exclude: ["@apollo/client"],
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
