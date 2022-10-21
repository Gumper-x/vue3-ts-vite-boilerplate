import { createI18n } from "vue-i18n";
import { DEFAULT_LANG, LanguageList } from "@/shared/constants/locale";
import { locales } from "@/app/locales";
import { getUserLang } from "@/shared/utils";

export const i18n = createI18n({
  locale: getUserLang(),
  fallbackLocale: DEFAULT_LANG,
  messages: locales,
  pluralizationRules: {
    [LanguageList.Ru]: function (choice) {
      if (choice % 10 === 1 && choice % 100 !== 11) {
        return 1;
      } else if (choice % 10 >= 2 && choice % 10 <= 4 && (choice % 100 < 10 || choice % 100 >= 20)) {
        return 2;
      }
      return 0;
    },
    [LanguageList.Uk]: function (choice) {
      if (choice % 10 === 1 && choice % 100 !== 11) {
        return 1;
      } else if (choice % 10 >= 2 && choice % 10 <= 4 && (choice % 100 < 10 || choice % 100 >= 20)) {
        return 2;
      }
      return 0;
    },
  },
});
