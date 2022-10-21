import { RouteLocationRaw } from "vue-router";

export interface Crumb {
  title: string;
  separator?: string;
  to?: string | RouteLocationRaw;
}
