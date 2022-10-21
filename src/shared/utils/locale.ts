import { DEFAULT_LANG, LanguageList } from "@/shared/constants";
import { useLocaleRepository } from "@/shared/services";

export function isLanguageList(value: string): value is LanguageList {
  return Object.keys(LanguageList).includes(value);
}

export function getUserLang(): LanguageList {
  return useLocaleRepository().get() || DEFAULT_LANG;
}
