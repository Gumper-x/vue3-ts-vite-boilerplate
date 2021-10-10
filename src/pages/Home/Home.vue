<template>
  <div class="page-home">
    {{ title }}
    <Description />
    <VButton>Base button</VButton>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from "vue";
  import { VButton } from "@/shared/ui/components/kit";
  import { Description } from "./components";

  const title = computed<string>(() => import.meta.env.VITE_TITLE);
</script>
