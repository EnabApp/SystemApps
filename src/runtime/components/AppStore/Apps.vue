<template>
  <div>
    <!-- <div m-t="25px">
      <span text="primaryOp dark:primary" align="right">التطبيقات</span>
    </div> -->
    <div m-t="90px">
      <div class="grid grid-cols-8 gap-x-2 gap-y-2">
        <AppStoreAppsPackCard v-for="pack in packs" :key="'pack-'+ pack.id " :pack="pack" />
      </div>
      <div m-t="3" class="grid 2xl:grid-cols-10 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-x-2 gap-y-2">
        <AppStoreAppsCard v-for="card in apps" :key="'app-'+ card.id " :app="card" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore , useAppManager ,computed } from "#imports";

const appStore = useAppStore()
const appManager = useAppManager()
const apps = computed(() => appStore.AppsWithoutCore());
const packs = computed(() => appStore.packs);
</script>

<style></style>
