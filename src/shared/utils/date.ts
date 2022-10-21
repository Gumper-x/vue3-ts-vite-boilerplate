import type { TranslateLocale } from "@/app/types";
import { Duration, format } from "date-fns";
import { DEFAULT_FORMAT_DATE, LanguageList } from "@/shared/constants";
import { enUS, ru, uk } from "date-fns/locale";
import { capitalize, Ref } from "vue";
import { getUserLang } from "./locale";
import { i18n } from "@/app/plugins/i18n";

export function formatLocale(date: Date | number, formatString = DEFAULT_FORMAT_DATE): string {
  const locales = {
    [LanguageList.En]: enUS,
    [LanguageList.Ru]: ru,
    [LanguageList.Uk]: uk,
  };
  return capitalize(format(date, formatString, { locale: locales[getUserLang()] }));
}
export function clearTime(date: Date): Date {
  return new Date(date.toDateString());
}
export function durationToString(duration: Duration, t: TranslateLocale): string {
  const result: string[] = [];

  if (duration.years) {
    result.push(t("common.time.year", duration.years));
  }
  if (duration.months) {
    result.push(t("common.time.month", duration.months));
  }
  if (duration.weeks) {
    result.push(t("common.time.week", duration.weeks));
  }
  if (duration.days) {
    result.push(t("common.time.day", duration.days));
  }
  if (duration.hours) {
    result.push(t("common.time.hour", duration.hours));
  }
  if (duration.minutes) {
    result.push(t("common.time.minute", duration.minutes));
  }
  if (duration.seconds) {
    result.push(t("common.time.second", duration.seconds));
  }
  return result.join(", ");
}
export function parseDuration(duration: string): Duration {
  const resultDuration: Duration = {};
  const locale = (i18n.global.locale as unknown as Ref<typeof i18n.global.locale>).value;
  const messages = (i18n.global.messages as unknown as Ref<typeof i18n.global.messages>).value[locale];
  const splitedDuration = duration.split(", ");
  const keyTimeMap = new Map<string, keyof Duration>();
  for (const [key, value] of Object.entries(messages.common.time)) {
    const parsedWords = value
      .replace(/[{n} \\|]/g, " ")
      .split(" ")
      .filter((word) => word.length > 0);
    parsedWords.forEach((word) => keyTimeMap.set(word, `${key}s` as keyof Duration));
  }
  splitedDuration.forEach((word) => {
    const splitedWord = word.split(" ");
    const keyWord = keyTimeMap.get(splitedWord[1]);
    if (keyWord) {
      resultDuration[keyWord] = Number(splitedWord[0]);
    }
  });
  return resultDuration;
}

export function durationInSeconds(duration: Duration): number {
  return (
    (duration.years || 0) * 31536000 +
    (duration.months || 0) * 2592000 +
    (duration.weeks || 0) * 604800 +
    (duration.days || 0) * 86400 +
    (duration.hours || 0) * 3600 +
    (duration.minutes || 0) * 60 +
    (duration.seconds || 0)
  );
}

export function createDate(date: string | number | Date | undefined): Date | undefined {
  return date ? new Date(date) : undefined;
}
