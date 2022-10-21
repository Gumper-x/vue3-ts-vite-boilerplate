<template>
  <q-card flat bordered class="auth-form bg-grey-14">
    <q-card-section align="center" class="text-subtitle1 text-weight-bold text-uppercase text-primary">
      {{ props.title }}
    </q-card-section>
    <q-separator dark />
    <slot />
  </q-card>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title?: string;
  }>();
</script>

<style lang="scss">
  .auth-form {
    width: 100%;
    max-width: 400px;
  }
</style>
