<template>
  <div flex="~" w="full" items="center" bottom="2" justify="center" h="45px" >
    <div flex="~" w="85%" justify="around" bg="primaryOp dark:secondary" rounded="full">
      <component cursor="pointer" v-for="(tab, index) in tabs" :key="tab.title" @click="appStore.setSelectedTap(index)" :text="appStore.selectedTab === index ? 'purple-600 dark:purple-600' : 'secondary dark:secondaryOp'" w="32px" h="32px" :is="tab.icon"></component>
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
