<template>
  <div class="fade-in-out">
    <div m-t="3%" flex="~ col">
      <div v-if="!(breakpoint.twoXs || breakpoint.xs)" grid="~" place="items-center" :class="(breakpoint.md || breakpoint.sm ) ? 'grid-cols-4' : breakpoint.lg ? 'grid-cols-4' : breakpoint.xl ? 'grid-cols-6' : breakpoint.twoXl ? 'grid-cols-7' : 'grid-cols-8' ">
        <AppStoreAppsPackCard v-for="pack in appStore.getPacks" :key="'pack-'+ pack.id " :pack="pack" />
      </div>
      <div v-else class="max-w-90% mx-auto min-w-0">
        <div class="overflow-x-auto flex gap-2">
          <AppStoreAppsPackCard v-for="pack in appStore.getPacks" :key="'pack-'+ pack.id " :pack="pack" />
        </div>
      </div>
      <div m-t="6" grid="~ gap-2" place="items-center" :class="(breakpoint.twoXs || breakpoint.xs ) ? 'grid-cols-2' : (breakpoint.md || breakpoint.sm ) ? 'grid-cols-3' : breakpoint.lg ? 'grid-cols-4' : breakpoint.xl ? 'grid-cols-5' : breakpoint.twoXl ? 'grid-cols-6' : 'grid-cols-8' ">
        <AppStoreAppsCard v-for="card in appStore.appsWithoutCore" :key="'app-'+ card.id " :app="card" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore , computed , useAppManager } from "#imports";

const appStore = useAppStore()
const appManager = useAppManager()
const packs = computed(() => appStore.packs);
const breakpoint = appStore.getBreakpoints

appStore.setPacks(appManager.getPacks)

</script>
<style>
  .fade-in-out {
  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
