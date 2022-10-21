<template>
  <div>
    {{ t("home.hello") }} <pre>{{ userStore.user }}</pre>
    <q-btn color="primary" push @click="di.authService.logout">EXIT</q-btn>
  </div>
</template>

<script lang="ts" setup>
  import { DI_KEY } from "@/shared/constants";
  import { injectStrict } from "@/shared/utils";
  import { useI18n } from "vue-i18n";
  import { useBreadcrumbStore, useUserStore } from "../../app/store";
  import { localePage } from "./locale";
  const userStore = useUserStore();
  const { t } = useI18n(localePage);
  const di = injectStrict(DI_KEY);
  useBreadcrumbStore().set([
    {
      title: "home.hello",
    },
  ]);
</script>
