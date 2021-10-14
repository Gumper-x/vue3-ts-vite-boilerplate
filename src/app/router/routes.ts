// Helpers
import { defineRoutes } from "./utils/define";
// Constants
import { Route } from "@/shared/constants/routes";

export default defineRoutes([
  {
    path: "/",
    component: () => import("@/shared/ui/layout/LayoutDefault.vue"),
    children: [
      {
        path: "",
        name: Route.Home,
        component: () => import("@/pages/Home"),
      },
    ],
  },
]);
