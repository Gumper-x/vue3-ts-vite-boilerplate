<template>
  <div class="full-screen window-height">
    <header class="flex no-wrap justify-between q-px-xl q-py-lg">
      <BaseLogo width="120" />
      <LanguageSelect />
    </header>
    <main class="flex justify-center items-center full-height">
      <router-view v-slot="{ Component, route }">
        <transition name="scale" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script lang="ts" setup>
  import { BaseLogo, LanguageSelect } from "@/shared/ui/components";
</script>
