import { getDIContainer } from "@/shared/di";

export const localePage = getDIContainer().localeService.defineLocale("home", {
  En: {
    hello: "Hello",
  },
  Ru: {
    hello: "Привет",
  },
  Uk: {
    hello: "Привіт",
  },
});
