<template>
  <AuthForm :title="t('recovery.title')">
    <q-card-section>
      <span class="text-body2 text-grey">{{ t("recovery.body_form") }}</span>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <q-input v-model="email" outlined bg-color="dark" :label="t('recovery.input_email')" />
    </q-card-section>
    <q-card-section class="q-pt-none">
      <q-card-actions vertical align="center" class="q-px-none">
        <q-btn color="primary" no-caps class="full-width text-dark q-mb-xs">{{ t("recovery.button_submit") }}</q-btn>
        <q-btn flat size="sm" color="grey" :to="{ name: RouteName.Login }">{{ t("recovery.button_login") }}</q-btn>
      </q-card-actions>
    </q-card-section>
  </AuthForm>
</template>

<script setup lang="ts">
  import { RouteName } from "@/shared/constants";
  import { AuthForm } from "@/shared/ui/components";
  import { ref } from "vue";
  import { useI18n } from "vue-i18n";
  import { localePage } from "./locale";
  const email = ref("");
  const { t } = useI18n(localePage);
</script>
