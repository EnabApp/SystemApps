<template>
  <!-- App -->
  <div @click="appStore.setSelectedApp(app)" cursor="pointer" h="150px" w="128px" flex="~ gap-2 col" items="center" justify="start" class="group" p="3" bg="primaryOp dark:primary" rounded="~ lg" position="relative" transition="~ 0.15s ease-in-out" transform="~ active:scale-95">
    <!-- App Icon -->
    <div h="full" w="60%">
      <component text="primary dark:primaryOp" h="full" w="full" :is="`${app.name}Icon`"></component>
    </div>

    <div flex="~ col gap-2" justify="center" items="center">
      <!-- App Title -->
      <span text="primary dark:primaryOp md center">{{ app.title }}</span>

      <!-- Not Owned - Points -->
        <div v-if="!app.owned" flex="~ gap-2" items="center" justify="end" rounded="lg">
          <span text="sm primary dark:primaryOp">
            {{ app.points > 0 ? app.points : "مجانا" }}
          </span>
          <AppStoreIconCoin text="primary dark:primaryOp" h="4" w="4"/>
        </div>

      <div v-else rounded="~" text="sm primary dark:primaryOp">
        <AppStoreIconCheck text="primary dark:primaryOp" h="6" w="6"/>
      </div>
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
<style scoped>

  .v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>