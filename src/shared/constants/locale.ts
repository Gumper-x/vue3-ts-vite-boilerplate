export enum LanguageList {
  En = "En",
  Ru = "Ru",
  Uk = "Uk",
}

export const DEFAULT_LANG = LanguageList.Ru;

export const DYNAMIC_IMPORT_QUASAR: Record<LanguageList, () => Promise<typeof import("quasar/lang/*")>> = {
  En: () => import(`quasar/lang/en-US`),
  Uk: () => import(`quasar/lang/uk`),
  Ru: () => import(`quasar/lang/ru`),
};
