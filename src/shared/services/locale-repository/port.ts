import { LanguageList } from "@/shared/constants";

export interface LocaleRepositoryPort {
  get: () => LanguageList | undefined;
  set: (value: LanguageList) => void;
  clear: () => void;
}
