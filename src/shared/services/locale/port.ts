import { LanguageList } from "@/shared/constants";
import type { UseI18nOptions } from "vue-i18n";

interface LanguageTranslate {
  [key: string]: string | LanguageTranslate;
}
export type LanguageTranslateModel = {
  [Property in LanguageList as Property]: LanguageTranslate;
};

export interface LocalePort {
  defineLocale: <L extends LanguageTranslateModel>(namespace: string, locale: L) => UseI18nOptions;
  updateLanguage: (lang: LanguageList) => Promise<void>;
}
