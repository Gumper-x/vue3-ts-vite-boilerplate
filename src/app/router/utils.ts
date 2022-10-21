import { Component } from "vue";
import { LayoutName, RouteName } from "@/shared/constants";
import { RouteRecordNormalized } from "vue-router";
import { Middleware } from "./types";

export function collectMiddleware(routes: RouteRecordNormalized[]): Middleware[] {
  return routes.reduce((accumulator, current) => {
    const currentMiddleware = current.meta.middleware || [];
    return [...accumulator, ...currentMiddleware];
  }, [] as Middleware[]);
}
export function loadPage(name: RouteName): () => Promise<Component> {
  return async () => {
    const nameComponent = `${name}Page`;
    return { name: nameComponent, ...(await import(`../../pages/${name}/page.vue`)).default };
  };
}
export function loadLayout(name: LayoutName): () => Promise<Component> {
  return async () => {
    const nameComponent = `${name}Layout`;
    return { name: nameComponent, ...(await import(`../../shared/ui/layouts/${name}/layout.vue`)).default };
  };
}
