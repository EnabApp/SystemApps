<template>
  <div flex="~ col gap-4">
    <!-- Home -->
    <div v-for="(tab, index) in tabs" :key="tab.title" @click="appStore.setSelectedTap(index)" cursor="pointer" class="group" flex="~ col gap-2" items="center">
      <div :class="
      appStore.selectedTab === index
        ? 'bg-primaryOp dark:bg-primary text-primary dark:text-primaryOp'
        : 'dark:group-hover:bg-primary group-hover:bg-secondaryOp text-primaryOp group-hover:text-primary dark:group-hover:text-primaryOp dark:text-primary cursor-pointer'" rounded="lg" flex="~" items="center" justify="center" w="64px" h="64px">
        <!-- Icon -->
        <component :text="appStore.selectedTab === index ? 'primary dark:primaryOp' : 'primaryOp dark:primary group-hover:primaryOp'" w="32px" h="32px" :is="tab.icon"></component>
      </div>
      <span text="primaryOp dark:primary">{{ tab.title }}</span>
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
