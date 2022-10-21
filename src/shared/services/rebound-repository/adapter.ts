import { StorageKey } from "@/shared/constants";
import type { ReboundRepositoryPort } from "@/shared/services";

export function useReboundRepository(): ReboundRepositoryPort {
  return {
    get() {
      return sessionStorage.getItem(StorageKey.Rebound);
    },
    set(path) {
      sessionStorage.setItem(StorageKey.Rebound, path);
    },
    clear() {
      sessionStorage.removeItem(StorageKey.Rebound);
    },
  };
}
