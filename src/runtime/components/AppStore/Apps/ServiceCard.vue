<template>
  <div @click="appStore.setSelectedService(service)" m-l="18px" cursor="pointer" m-t="11px" grid="~ flow-col" class="col-span-2 place-items-center" w="270px" h="160px" rounded="lg">
    <div grid="~ flow-row" m-r="2">
      <div
        grid="~ flow-row"
        class="place-items-center"
        rounded="md"
        bg="primaryOp dark:primary"
        w="[82px]"
        h="[82px]"
      >
        <div :class="service.icon" text="primary dark:primaryOp" w="41px" h="41px"></div>
      </div>
      <div flex="~" justify="center" m-t="9px" w="82px" h="24px" grid="~ flow-row" class="place-items-center" rounded="sm" bg="primaryOp dark:secondaryOp">
        <div class="i-charm:download" w="5" h="5" m-l="2" text="primary dark:primary"></div>
        <span text="md primary dark:primary">
          {{service.points >0 ? service.points : 'مجانا' }}
        </span>
      </div>
    </div>
    <div grid="~ flow-row" m="2" m-r="6">
      <span font="bold" text="lg primaryOp dark:primary" m-b="2">{{service.title}}</span>
      <span text="md primaryOp dark:secondaryOp" m-b="2">{{service.description}}</span>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "#imports"
const props = defineProps({
  service: {
    type: Object,
    required: true,
  },
});
const appStore = useAppStore()
</script>

<style>

</style>
