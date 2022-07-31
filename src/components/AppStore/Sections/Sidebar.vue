<template>
    <div class="fixed h-full left-[0rem] top-[0.5rem] right-auto w-[5rem] pl-2 overflow-y-auto">
        <div place="items-center" grid="~ flow-col">
            <span m-b="3" flex="~" cursor="pointer" text="2xl success-500">1000</span>
            <div class="i-emojione-v1:diamond-with-a-dot" m-b="3" w="4" h="4"></div>
        </div>
        <div @click="activeToggle()" :class="!activeState ? 'bg-w-10 text-w-50 border-w-40 border-2' : 'hover:bg-w-10 hover:-translate-y-1 hover:scale-100 border-w-10 text-w-50 border-2 transition delay-10 cursor-pointer'" rounded="lg" p="3" m-b="3" place="items-center" grid="~ flow-row"
            class="place-content-center">
            <div class="i-ant-design:home-filled" w="8" h="8"></div>
            <span class="mt-2">الرئيسية</span>
        </div>
        <div :class="false ? 'bg-w-10 text-w-50 border-w-40 border-2' : 'hover:bg-w-10 hover:-translate-y-1 hover:scale-100 border-w-10 text-w-50 border-2 transition delay-10 cursor-pointer'" rounded="lg" p="3" m-b="3" place="items-center" grid="~ flow-row"
            class="place-content-center">
            <div class="i-charm:apps" text="w-50" w="8" h="8"></div>
            <span text="sm w-50" class="mt-2">التطبيقات</span>
        </div>
        <div :class="false ? 'bg-w-10 text-w-50 border-w-40 border-2' : 'hover:bg-w-10 hover:-translate-y-1 hover:scale-100 border-w-10 text-w-50 border-2 transition delay-10 cursor-pointer'" rounded="lg" p="3" m-b="3" place="items-center" grid="~ flow-row"
            class="absolute bottom-2 left-2 place-content-center">
            <div class="i-carbon:help-desk" text="w-50" w="8" h="8"></div>
            <span text="sm w-50" class="mt-2">مساعدة</span>
        </div>
    </div>
</template>

<script setup>
import { useToggle } from '@vueuse/core'
const props = defineProps({
  app: {
    type: Object,
    required: true,
  }
})
const [activeState,activeToggle] = useToggle()
</script>

<style>
</style>