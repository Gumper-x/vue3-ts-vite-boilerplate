import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    // How use - https://next.router.vuejs.org/guide/advanced/transitions.html#per-route-transition
    transition?: string;
  }
}
