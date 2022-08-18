<template>
  <!-- App -->
  <div @click="appStore.setSelectedApp(app)" cursor="pointer" grid="~ flow-row" class="place-items-center" w="auto" h="auto" p="3" bg="primaryOp dark:primary" rounded="lg">
    <div
      :class="app.icon"
      text="primary dark:primaryOp"
      w="2xl:110px xl:90px lg:90px md:90px sm:90px"
      h="2xl:110px xl:90px lg:90px md:90px sm:90px"
    ></div>
    <span text="primary dark:primaryOp lg">{{app.title}}</span>
    <div v-if="!app.owned" w="full" h="31px" m="2" grid="~ flow-row" class="place-items-center" rounded="lg" bg="primary dark:primaryOp">
      <span text="md primaryOp dark:primary">
        {{ app.points > 0 ? app.points : "مجانا"}}
      </span>
    </div>
    <div v-else w="full" h="31px" m="2" grid="~ flow-row" class="place-items-center" rounded="lg" bg="green dark:green">
      <span text="md primaryOp dark:primary">
        <div class="i-ci:check-bold"></div>
      </span>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "#imports"
const props = defineProps({
  app: {
    type: Object,
    required: true,
  },
});
const appStore = useAppStore()
</script>

<style>

</style>
