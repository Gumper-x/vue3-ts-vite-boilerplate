import type { LocalePort, LocaleRepositoryPort } from "@/shared/services";
import { DYNAMIC_IMPORT_QUASAR, LanguageList } from "@/shared/constants";
import { i18n } from "@/app/plugins/i18n";
import { Ref } from "vue";
import { Quasar } from "quasar";

export function useLocale(dp: { localeRepository: LocaleRepositoryPort }): LocalePort {
  return {
    defineLocale: (namespace, locale) => {
      const localeUnion = {
        En: {},
        Ru: {},
        Uk: {},
      };

      for (const lang of Object.values(LanguageList)) {
        localeUnion[lang] = { [namespace]: locale[lang] };
      }
      return {
        useScope: "global",
        messages: localeUnion,
      };
    },
    async updateLanguage(lang) {
      dp.localeRepository.set(lang);
      Quasar.lang.set((await DYNAMIC_IMPORT_QUASAR[lang]()).default);
      // Invalid i18n types, waiting for a fix in the next release: https://github.com/intlify/vue-i18n-next/issues/785
      (i18n.global.locale as unknown as Ref<string>).value = lang;
    },
  };
}
