import { DIContainer } from "@/shared/di";
import { RouteLocationNormalized, RouteLocationRaw } from "vue-router";

export interface MiddlewareContext {
  to: RouteLocationNormalized;
  from: RouteLocationNormalized;
  di: DIContainer;
}
export type MiddlewareReturn = void | boolean | RouteLocationRaw;
export type Middleware = (args: MiddlewareContext) => MiddlewareReturn | Promise<MiddlewareReturn>;
