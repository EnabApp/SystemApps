<template>
  <!-- App -->
  <div @click="appStore.setSelectedApp(app)" cursor="pointer" grid="~ flow-row" class="place-items-center" w="128px" h="160px" bg="primaryOp dark:primary" rounded="lg">
    <div
      :class="app.icon"
      text="primary dark:primaryOp"
      w="[55px]"
      h="[55px]"
    ></div>
    <span text="primary dark:primaryOp lg">{{app.title}}</span>
    <div v-if="!app.owned" w="108px" h="31px" grid="~ flow-row" class="place-items-center" rounded="lg" bg="primary dark:primaryOp">
      <span text="md primaryOp dark:primary">
        {{ app.points > 0 ? app.points : "مجانا"}}
      </span>
    </div>
    <div v-else w="108px" h="31px" grid="~ flow-row" class="place-items-center" rounded="lg" bg="green dark:green">
      <spa text="md primaryOp dark:primary">
        <div class="i-ci:check-bold"></div>
      </spa>
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
