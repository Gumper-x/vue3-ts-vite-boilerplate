import { RouteRecordRaw } from "vue-router";
import { RouteName, LayoutName } from "@/shared/constants";
import { loadLayout, loadPage } from "./utils";
import { checkAuth, checkAbsenceAuth } from "./middleware";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: loadLayout(LayoutName.Auth),
    meta: {
      middleware: [checkAbsenceAuth],
    },
    children: [
      {
        path: "/login",
        name: RouteName.Login,
        component: loadPage(RouteName.Login),
      },
      {
        path: "/recovery",
        name: RouteName.Recovery,
        component: loadPage(RouteName.Recovery),
      },
    ],
  },
  {
    path: "",
    component: loadLayout(LayoutName.Default),
    redirect: { name: RouteName.Home },
    meta: {
      middleware: [checkAuth],
    },
    children: [
      {
        path: "home",
        name: RouteName.Home,
        meta: {
          hideNavigation: true,
        },
        component: loadPage(RouteName.Home),
      },
    ],
  },
  // { path: "/:pat hMatch(.*)*", name: "NotFound", component: loadPage("NotFound") },
];
