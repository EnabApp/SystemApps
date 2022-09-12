<template>
  <!-- Pack -->
  <div @click="appStore.setSelectedPack(pack)" cursor="pointer" class="col-span-2" flex="~" justify="around" items="center" w="100%" max-w="280px" h="160px" rounded="lg" bg="primaryOp dark:primary">
    <div grid="~ flow-row" m-r="2">
      <div
        class="grid grid-cols-2 place-items-center"
        rounded="md"
        bg="primary dark:primaryOp"
        w="[82px]"
        h="[82px]"
      >
        <component
          v-for="app in pack.apps.slice(0, 3)" :key="'app-'+ app.id "
          :is="`${app.name}Icon`"
          text="primaryOp dark:primary"
          h="23px"
          w="23px"
        >
        </component>
        <span v-if="pack.apps.length > 4" text="lg primaryOp dark:primary">+ {{pack.apps.length - 3}}</span>
      </div>
      <div w="82px" h="31px" m-t="3" grid="~ flow-row" class="place-items-center" rounded="md" bg="primary dark:primaryOp">
        <span text="md primaryOp dark:primary">{{pack.points}}</span>
      </div>
    </div>
    <div grid="~ flow-row" m="2">
      <span font="bold" text="primary dark:primaryOp 2xl" m-b="2">{{pack.title}}</span>
      <span font="semibold" text="md primary dark:primaryOp">{{pack.apps.length}} تطبيقات</span>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from '#imports'

const props = defineProps({
  pack: {
    type: Object,
    required: true,
  },
});
const appStore = useAppStore()
</script>

<style>

</style>
