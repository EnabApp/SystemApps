<template>
  <div>
    <div m-t="3%" flex="~ col">
      <div v-if="!(breakpoint.twoXs || breakpoint.xs)" grid="~" place="items-center" :class="(breakpoint.md || breakpoint.sm ) ? 'grid-cols-4' : breakpoint.lg ? 'grid-cols-4' : breakpoint.xl ? 'grid-cols-6' : breakpoint.twoXl ? 'grid-cols-6' : 'grid-cols-8' ">
        <AppStoreAppsPackCard v-for="pack in packs" :key="'pack-'+ pack.id " :pack="pack" />
      </div>
      <div v-else class="max-w-260px mx-auto min-w-0">
        <div class="overflow-x-auto flex gap-2">
          <AppStoreAppsPackCard v-for="pack in packs" :key="'pack-'+ pack.id " :pack="pack" w="100%" />
        </div>
      </div>

      <div m-t="6" grid="~ gap-2" place="items-center" :class="(breakpoint.twoXs || breakpoint.xs ) ? 'grid-cols-2' : (breakpoint.md || breakpoint.sm ) ? 'grid-cols-3' : breakpoint.lg ? 'grid-cols-4' : breakpoint.xl ? 'grid-cols-5' : breakpoint.twoXl ? 'grid-cols-6' : 'grid-cols-8' ">
        <AppStoreAppsCard v-for="card in appStore.appsWithoutCore" :key="'app-'+ card.id " :app="card" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore , computed } from "#imports";

const appStore = useAppStore()
const packs = computed(() => appStore.packs);
const breakpoint = appStore.getBreakpoints
</script>

<style></style>
