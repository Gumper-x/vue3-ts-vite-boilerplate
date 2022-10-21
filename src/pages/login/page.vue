<template>
  <AuthForm :title="t('login.title')">
    <q-card-section>
      <span class="text-body2">{{ t("login.body_form") }}</span>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <q-input v-model="authData.login" outlined bg-color="dark" :label="t('login.input_username')" />
    </q-card-section>
    <q-card-section class="q-pt-none">
      <q-input
        v-model="authData.password"
        outlined
        bg-color="dark"
        :label="t('login.input_password')"
        :type="showPassword ? 'password' : 'text'"
      >
        <template #append>
          <q-icon
            :name="showPassword ? 'visibility' : 'visibility_off'"
            class="cursor-pointer"
            @click="showPassword = !showPassword"
          />
        </template>
      </q-input>
    </q-card-section>
    <q-card-section class="q-pt-none q-pb-xs">
      <q-checkbox v-model="authData.rememberMe" :label="t('login.label_remember')" />
    </q-card-section>
    <q-card-section class="q-pt-none">
      <q-card-actions vertical align="center" class="q-px-none">
        <q-btn color="primary" :loading="loading" no-caps class="full-width text-dark q-mb-xs" @click="login">{{
          t("login.button_submit")
        }}</q-btn>
        <q-btn flat size="sm" color="grey" :to="{ name: RouteName.Recovery }">{{ t("login.button_recovery") }}</q-btn>
      </q-card-actions>
    </q-card-section>
  </AuthForm>
</template>

<script setup lang="ts">
  import { DI_KEY, RouteName } from "@/shared/constants";
  import { AuthForm } from "@/shared/ui/components";
  import { injectStrict, isString } from "@/shared/utils";
  import { useQuasar } from "quasar";
  import { reactive, ref } from "vue";
  import { useI18n } from "vue-i18n";
  import { useRouter } from "vue-router";
  import { localePage } from "./locale";
  const loading = ref(false);
  const showPassword = ref(true);
  const router = useRouter();
  const $q = useQuasar();
  const authData = reactive({
    login: "",
    password: "",
    rememberMe: false,
  });
  const { t } = useI18n(localePage);
  const di = injectStrict(DI_KEY);
  async function login() {
    try {
      loading.value = true;
      const reboundPath = await di.authService.login(authData.login, authData.password, authData.rememberMe);
      router.push(reboundPath || { name: RouteName.Home });
    } catch (error) {
      $q.notify({
        type: "negative",
        message: isString(error) ? error : "",
      });
    } finally {
      loading.value = false;
    }
  }
</script>
