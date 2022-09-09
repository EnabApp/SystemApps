<template>
  <div absolute="~" bottom="2" w="85%" h="45px" bg="primaryOp dark:primary" rounded="full">
    <div flex="~ row gap-3" justify="around" content="center">
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
