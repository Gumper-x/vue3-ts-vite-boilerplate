import {
  LocalePort,
  LocaleRepositoryPort,
  ReboundRepositoryPort,
  useLocale,
  useLocaleRepository,
  useReboundRepository,
} from "@/shared/services";
import { BreadcrumbPort, useBreadcrumb } from "@/shared/domains";

export interface DIContainer {
  localeRepository: LocaleRepositoryPort;
  localeService: LocalePort;
  reboundRepository: ReboundRepositoryPort;
  breadcrumbDomain: BreadcrumbPort;
}

let diContainer: DIContainer;
initDIContainer();
export function initDIContainer(): void {
  diContainer = {
    localeRepository: useLocaleRepository(),
    localeService: useLocale({ localeRepository: useLocaleRepository() }),
    reboundRepository: useReboundRepository(),
    breadcrumbDomain: useBreadcrumb(),
  };
}

export function getDIContainer(): DIContainer {
  return diContainer;
}
