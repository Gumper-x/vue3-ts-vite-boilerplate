<template>
  <div class="flex">
    <template v-if="!isEmpty(props.crumbs)">
      <transition-group name="fade" mode="out-in" appear>
        <div v-for="(crumb, index) in props.crumbs" :key="crumb.title + index" class="text-h6 text-uppercase">
          <component :is="crumb.to ? 'RouterLink' : 'span'" :to="crumb.to" class="base-breadcrumb__crumb">
            {{ t(crumb.title) }}
          </component>
          <span v-if="props.crumbs.length !== index + 1" class="q-mx-xs">{{ crumb.separator || "/" }}</span>
        </div>
      </transition-group>
    </template>
    <q-skeleton
      v-for="index in 3"
      v-else
      :key="index"
      bordered
      animation="wave"
      type="rect"
      class="q-mr-xs"
      style="width: 100px"
    />
  </div>
</template>

<script lang="ts" setup>
  import { isEmpty } from "@/shared/utils";
  import { useI18n } from "vue-i18n";
  import { Crumb } from "./types";

  const props = defineProps<{
    crumbs: Crumb[] | null;
  }>();
  const { t } = useI18n();
</script>

<style lang="scss">
  .base-breadcrumb__crumb {
    color: $grey-3;
    transition: color 0.2s ease-in-out;
    &:not(span):hover {
      color: $primary;
      text-decoration: underline;
    }
  }
</style>
