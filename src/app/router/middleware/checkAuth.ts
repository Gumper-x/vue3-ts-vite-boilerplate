import { Middleware } from "@/app/router/types";
import { useUserStore } from "@/app/store";

export const checkAuth: Middleware = async ({ di }) => {
  if (await di.authService.hasAuth()) {
    useUserStore().loadUser();
  } else {
    await di.authService.logout();
  }
};
