<template>
  <div class="flex no-wrap">
    <LanguageSelect />
    <div class="column no-wrap full-width">
      <BaseBreadcrumb class="q-py-lg q-px-xl" :crumbs="breadcrumbStore.crumbs" />
      <router-view v-slot="{ Component }">
        <transition name="scale" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useBreadcrumbStore } from "@/app/store";
  import { BaseBreadcrumb, LanguageSelect } from "@/shared/ui/components";
  const breadcrumbStore = useBreadcrumbStore();
</script>
