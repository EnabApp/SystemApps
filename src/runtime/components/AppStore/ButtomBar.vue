<template>
  <div w="85%" h="45px" bg="primaryOp dark:secondary" rounded="full">
    <div flex="~ row" justify="around">
      <component v-for="(tab, index) in tabs" :key="tab.title" @click="appStore.setSelectedTap(index)" :text="appStore.selectedTab === index ? 'primary dark:primaryOp' : 'secondaryOp dark:secondaryOp'" w="32px" h="32px" :is="tab.icon"></component>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "#imports"
const appStore = useAppStore();
const tabs = [
  {
    title: "الرئيسية",
    icon: "AppStoreIconHome",
  },
  {
    title: "التطبيقات",
    icon: "AppStoreIconApps",
  },
  {
    title: "تطبيقاتي",
    icon: "AppStoreIconLibrary",
  },
]
</script>

<style>

</style>
