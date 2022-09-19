<template>
  <div flex="~" w="full" items="center" justify="center">
    <div w="95%"  m-t="2" flex="~ col gap-2" overflow="y-scroll">
      <div v-for="app in appStore.apps" :key="'app-' + app.id" p="2" rounded="xl"  grid="~ cols gap-3" border="1 secondaryOp" :class="(breakpoint.twoXs) ? 'grid-cols-2 transition-all duration-300 ease-in delay-75' : 'grid-cols-4 transition-all duration-300 ease-in delay-75'">
        <div flex="~ row gap-2" :class="(breakpoint.twoXs) ? 'col-start-1 col-end-2' : '' ">
          <component text="primaryOp dark:primary" w="24px" h="24px" :is="`${app.name}Icon`"></component>
          <span text="primaryOp dark:primary" >{{app.title}}</span>
        </div>
        <div :class="(breakpoint.twoXs) ? 'col-start-3 col-end-4' : '' ">
          <span w="full" text="primaryOp dark:primary xl"> 05/8/2021</span>
        </div>
        <div :class="(breakpoint.twoXs) ? 'col-start-1 col-end-2' : '' ">
          <span :text="expire >= 5 ? 'error' : expire >= 5 ?  'primaryOp dark:primary xl' : 'green'">6 يوم</span>
        </div>
        <div flex="~ row gap-2" :class="(breakpoint.twoXs) ? 'col-start-3 col-end-4' : '' ">
          <AppStoreIconCoin text="primary" w="24px" h="24px"/>
          <span text="primaryOp dark:primary xl">{{app.points}}</span>
        </div>
      </div>
    </div>
    <!-- new -->
  </div>
</template>

<script setup>
import { useAppStore } from "#imports"

const appStore = useAppStore();
const breakpoint = appStore.getBreakpoints
const expire = 5
const headers = [
  {
    title: "التطبيق",
  },
  {
    title: "تاريخ الشراء",
  },
  {
    title: "موعد الانتهاء",
  },
  {
    title: "المدفوع",
  },
]
</script>

<style>

</style>
