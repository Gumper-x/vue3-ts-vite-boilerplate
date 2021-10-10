<template>
  <div class="page-home">
    {{ title }}
    <VButton>Base button</VButton>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from "vue";
  import { VButton } from "@/shared/ui/components/kit";

  const title = computed<string>(() => import.meta.env.VITE_TITLE);
</script>
