import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    middleware?: Middleware[];
    hideNavigation?: boolean;
  }
}
