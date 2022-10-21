import { inject, InjectionKey, onMounted, Ref, ref } from "vue";

export function injectStrict<T>(key: InjectionKey<T>, fallback?: T): T {
  const resolved = inject(key, fallback);
  if (!resolved) {
    throw new Error(`Could not resolve ${key.description}`);
  }
  return resolved;
}

export function useLifecycle(): {
  isMounted: Ref<boolean>;
} {
  const isMounted = ref(false);
  onMounted(() => {
    isMounted.value = true;
  });
  return {
    isMounted,
  };
}
