import { Middleware } from "@/app/router/types";
import { RouteName } from "@/shared/constants";

export const checkAbsenceAuth: Middleware = async ({ di }) => {
  if (await di.authService.hasAuth()) {
    return { name: RouteName.Home };
  }
};
