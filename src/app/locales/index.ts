import { LanguageList } from "@/shared/constants";
import { en } from "./en";
import { ru } from "./ru";
import { uk } from "./uk";

const checkLocale = (locale: typeof en) => locale;

export const locales = {
  [LanguageList.En]: en,
  [LanguageList.Ru]: checkLocale(ru),
  [LanguageList.Uk]: checkLocale(uk),
};
