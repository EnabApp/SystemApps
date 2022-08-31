<template>
  <!-- App -->
  <div>
    <div mt="4" w="950px" h="630px" bg="secondaryOp">
      <div justify="center" m="3">
        <div bg="secondary" w="185px" h="15px" rounded="full"></div>
      </div>
      <div w="300px" h="420px" bg="secondary">

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

<style>

</style>
