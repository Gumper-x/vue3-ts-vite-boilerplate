import { InjectionKey } from "vue";
import { DIContainer } from "@/shared/di";

export const DI_KEY: InjectionKey<DIContainer> = Symbol("$di");
