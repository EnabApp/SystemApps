<template>
  <div>
    <div m-t="90px">
      <div class="grid grid-cols-8 gap-x-2 gap-y-2">
        <AppStoreAppsPackCard v-for="pack in packs" :key="'pack-'+ pack.id " :pack="pack" />
      </div>
      <div m-t="6" grid="~ 2xl:cols-8 lg:cols-6 md:cols-4 sm:cols-2">
        <AppStoreAppsCard v-for="card in appStore.appsWithoutCore" :key="'app-'+ card.id " :app="card" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore ,computed } from "#imports";

const appStore = useAppStore()

console.log(appStore.appsWithoutCore)
// const apps = computed(() => appStore.AppsWithoutCore());
const packs = computed(() => appStore.packs);
</script>

<style></style>
