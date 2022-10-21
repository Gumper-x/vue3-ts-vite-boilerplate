import type { LocaleRepositoryPort } from "@/shared/services";
import { StorageKey } from "@/shared/constants";
import { isLanguageList } from "@/shared/utils";

export function useLocaleRepository(): LocaleRepositoryPort {
  return {
    get() {
      const lang = localStorage.getItem(StorageKey.Lang);
      if (lang && isLanguageList(lang)) {
        return lang;
      }
      return undefined;
    },
    set(value) {
      localStorage.setItem(StorageKey.Lang, value);
    },
    clear() {
      sessionStorage.removeItem(StorageKey.Lang);
    },
  };
}
