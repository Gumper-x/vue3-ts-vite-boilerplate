// Helpers
import { defineRoutes } from "./helpers/define";
// Constants
import { Route } from "@/constants/routes";

export default defineRoutes([
  {
    path: "/",
    name: Route.Home,
    component: () => import("@/pages/Home.vue"),
  },
]);
