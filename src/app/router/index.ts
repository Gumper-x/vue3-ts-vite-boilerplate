import { getDIContainer } from "@/shared/di";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { collectMiddleware } from "./utils";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach(async (to, from, next) => {
  const middlewareResult = await Promise.all(
    collectMiddleware(to.matched).map((middleware) => middleware({ to, from, di: getDIContainer() }))
  );

  const middlewareResultWithoutEmpty = middlewareResult.filter((result) => result !== undefined);
  const firstMiddlewareResult = middlewareResultWithoutEmpty[0];
  firstMiddlewareResult !== undefined ? next(firstMiddlewareResult as string) : next();
});
