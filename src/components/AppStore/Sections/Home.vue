<template>
  <!-- Header -->
  <div flex="~" justify="between" m-b="3">
    <UiInput placeholder="البحث عن تطبيق" > 
      <UiButton @click="appsToggle()" icon="i-fa:filter" title="تطبيقاتي" :solid="appsState ? true : false" color="slate" />
    </UiInput>
  </div>
  <!-- Apps -->
  <div p="2" h="96" grid="~ lg:cols-4 cols-2 gap-2" border="rounded-lg" overflow-y="auto">
    <div v-for="app in apps" :key="app.id" cursor="pointer" grid="~ flow-row" h="40" bg="w-10" place="items-center" p="4" border="rounded-lg 2" :class="app.owned?'transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 border-success-500' : 'border-error-500 cursor-pointer'" >
      <div :class="app.icon" text="w-35" w="15" h="15"></div>
      <span self="auto" text="xl w-50" m="4">{{app.title}}</span>
      <span self="auto" text="2xl" :class="app.points > 1000 && !app.owned ?'text-error-500' : 'text-success-500'">{{app.points}} نقطة</span>
    </div>
  </div>
</template>

<script setup>
import { useStoreApps } from '~/composables/useStore/useStoreApps'
import { useToggle } from '@vueuse/core'
const props = defineProps({
  app: {
    type: Object,
    required: true,
  }
})
const [appsState,appsToggle] = useToggle()

const something = () =>{
  console.log('clicked')
}
const appsStore = useStoreApps();

const apps = computed(() => {
  console.log(appsState.value)
  return appsState.value ? appsStore.getOwned : appsStore.getApps
})


</script>

<style>

</style>