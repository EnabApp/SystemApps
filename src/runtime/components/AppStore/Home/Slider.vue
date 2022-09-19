<template>
  <!-- Imgs banner and search -->
  <div w="full">
    <div cursor="pointer">
      <nuxt-img
        v-if="banner"
        class="transition-all duration-300 ease-in delay-75"
        w="full"
        :h="(breakpoint.twoXs || breakpoint.xs || breakpoint.sm) ? '40' : breakpoint.md ? '40' : breakpoint.lg ? '60' : breakpoint.xl ? '80' : breakpoint.twoXl ? '120' : '120' "
        rounded="lg"
        :src="banner.src"
      />
    </div>
  </div>
</template>

<script setup>
import { useAppManager , useAppStore ,computed} from "#imports";
import { useCycleList } from "@vueuse/core";

const appManager = useAppManager();
const appStore = useAppStore();
const breakpoint = appStore.getBreakpoints

const apps = computed(() => appManager.getApps);

const banners = computed(() => {
  if (apps.value.length <= 0) return [];
  return appStore.banners
});

const { state: banner, next, prev } = useCycleList(banners.value);

setInterval(function () {
  next();
}, 5000);
</script>

<style></style>
