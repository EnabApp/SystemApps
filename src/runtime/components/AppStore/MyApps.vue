<template>
  <div m-t="90px">
    <div flex="~" items="center" justify="center" h="auto" w="full" py="4">
      <div flex="~ row" justify="around" w="85%" h="full" bg="secondaryOp dark:secondary" rounded="lg">
        <div>
          <span w="full" text="primary dark:primaryOp xl">التطبيق</span>
        </div>
        <div>
          <span w="full" text="primary dark:primaryOp xl">تاريخ الشراء</span>
        </div>
        <div>
          <span w="full" text="primary dark:primaryOp xl">موعد الانتهاء</span>
        </div>
        <div>
          <span w="full" text="primary dark:primaryOp xl">المدفوع</span>
        </div>
      </div>
    </div>
    <div h="420px" m-t="2" overflow="y-scroll">
      <div flex="~ col gap-y-4" items="center" justify="center" h="auto" w="full" py="4">
        <div v-for="app in appStore.ownedAppsWithoutCore" :key="'app-' + app.id" flex="~ row" justify="around" w="85%">
          <div flex="~" w="auto">
            <component text="primary" w="64px" h="64px" :is="`${app.name}Icon`"></component>
            <span text="primaryOp dark:primary xl" mr="2">{{app.title}}</span>
          </div>
          <div>
            <span w="full" text="primaryOp dark:primary xl"> 05/8/2021</span>
          </div>
          <div w="auto">
            <div :class="6 <= 10 ? 'bg-warning' : 'bg-green'" w="74px" h="34px" rounded="lg" align="center" cursor="pointer">
              <span text="primaryOp xl" justify="center">6 يوم</span>
            </div>
          </div>
          <div>
            <span xw="full" text="primaryOp dark:primary xl">{{app.points}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "#imports"

const appStore = useAppStore();
const breakpoint = appStore.getBreakpoints

</script>

<style>

</style>
