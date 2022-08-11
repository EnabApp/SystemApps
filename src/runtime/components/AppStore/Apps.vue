<template>
  <div>
    <!-- <div m-t="25px">
      <span text="primaryOp dark:primary" align="right">التطبيقات</span>
    </div> -->
    <div m-t="90px">
      <div class="grid grid-cols-8 gap-x-2 gap-y-2">
        <AppStoreAppsPackCard v-for="pack in packs" :key="'pack-'+ pack.id " :app="pack" />
      </div>
      <div class="grid grid-cols-8 gap-x-2 gap-y-2 m-t-34px">
        <AppStoreAppsCard v-for="card in apps" :key="'app-'+ card.id " :app="card" />
      </div>
    </div>
  </div>
</template>

<script setup>
const appStore = useAppStore()
const apps = appStore.getApps
const packs = appStore.getPacks
</script>

<style></style>
