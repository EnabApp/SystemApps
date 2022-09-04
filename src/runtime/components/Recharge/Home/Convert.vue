<template>
<div m-t="19px">
  <div flex="~">
    <UiInput label="عراقي" placeholder="عراقي" rounded="xl" v-model="iqd" type="number"/>
    <div justify="items-center" class="i-ci:transfer" text="primaryOp dark:primary" m-t="55px"  w="32px" h="32px"></div>
    <UiInput label="نقاط عنب" placeholder="نقاط عنب" rounded="xl" v-model="points"/>
  </div>
</div>
</template>

<script setup>
import { ref, watch } from 'vue'
const iqd = ref(0)
const points = ref(0)
//convert
watch(iqd, (newX) => {
  points.value = newX * 1.5
})
// watch(points, (newX) => {
//   iqd.value = newX % 3
// })
</script>

<style>

</style>
