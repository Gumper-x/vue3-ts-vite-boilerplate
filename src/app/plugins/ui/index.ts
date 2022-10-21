import { Dialog, Notify, Quasar } from "quasar";
import { Plugin } from "vue";
import "@/app/assets/fonts/ProximaNova/stylesheet.css";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import { getUserLang } from "@/shared/utils";
import { DYNAMIC_IMPORT_QUASAR } from "@/shared/constants";

const uiOption = {
  plugins: { Notify, Dialog },
  lang: (await DYNAMIC_IMPORT_QUASAR[getUserLang()]()).default,
  config: {
    dark: true,
    notify: {
      position: "top-right",
    },
  },
};
export const uiPlugin: Plugin = {
  install(app) {
    app.use(Quasar, uiOption);
  },
};
