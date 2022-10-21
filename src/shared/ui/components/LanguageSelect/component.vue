<template>
  <q-select
    :model-value="locale"
    :options="availableLocales"
    outlined
    dense
    @update:model-value="(lang) => di.localeService.updateLanguage(lang)"
  />
</template>

<script lang="ts" setup>
  import { DI_KEY } from "@/shared/constants";
  import { injectStrict } from "@/shared/utils";
  import { useI18n } from "vue-i18n";
  const { availableLocales, locale } = useI18n({ useScope: "global" });

  const di = injectStrict(DI_KEY);
</script>
