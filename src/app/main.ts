import "@/app/assets/scss/global/index.scss";
import { getDIContainer, initDIContainer } from "@/shared/di";
import { createApp } from "vue";
import App from "@/app/App.vue";
import "@/app/plugins/auth";
import { router } from "@/app/router";
import { i18n } from "@/app/plugins/i18n";
import { uiPlugin } from "@/app/plugins/ui";
import { APPLICATION_VERSION, DI_KEY } from "@/shared/constants";
import { store } from "@/app/plugins/store";
// Display version app
if (process.env.NODE_ENV === "production") {
  console.info(`%cVersion: ${APPLICATION_VERSION}`, "color:#5e5ce6; font-size:12px; font-weight: bold;");
}
initDIContainer();

const app = createApp(App);
app.provide(DI_KEY, getDIContainer());
app.use(store);
app.use(i18n);
app.use(router);
app.use(uiPlugin);
app.mount("#app");
