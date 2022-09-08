<template>
  <div flex="~ col gap-4">
    <!-- Home -->
    <div v-for="(tab, index) in tabs" :key="tab.title" @click="appRecharge.setSelectedTap(index)" cursor="pointer" class="group" flex="~ col gap-2" items="center">
      <div :class="
      appRecharge.selectedTab === index
        ? 'bg-primaryOp dark:bg-primary text-primary dark:text-primaryOp'
        : 'dark:group-hover:bg-primary group-hover:bg-secondaryOp text-primaryOp group-hover:text-primary dark:group-hover:text-primaryOp dark:text-primary cursor-pointer'" rounded="lg" flex="~" items="center" justify="center" w="64px" h="64px">
        <!-- Icon -->
        <component :text="appRecharge.selectedTab === index ? 'primary dark:primaryOp' : 'primaryOp dark:primary group-hover:primaryOp'" w="32px" h="32px" :is="tab.icon"></component>
      </div>
      <span text="primaryOp dark:primary">{{ tab.title }}</span>
    </div>
  </div>
</template>

<script setup>
import { useAppRecharge } from "#imports"
const appRecharge = useAppRecharge()
const tabs = [
  {
    title: "الرئيسية",
    icon: "RechargeIconHome",
  },
  {
    title: "التحويلات",
    icon: "RechargeIconTransfers",
  },
  {
    title: "الشحن",
    icon: "RechargeIconCharge",
  },
  {
    title: "الهدايا",
    icon: "RechargeIconGift",
  },
]
</script>

<style></style>
