<template>
    <div class="fixed h-full left-[0rem] top-[0.5rem] right-auto w-[5rem] pl-2 overflow-y-auto">
        <div place="items-center" grid="~ flow-col" class="animate-pulse">
            <span m-b="3" flex="~" cursor="pointer" text="2xl success-500">1000</span>
            <div class="i-fxemoji:grapes" m-b="3" w="8" h="8"></div>
        </div>
        <div @click="activeToggle()" :class="!activeState ? 'bg-w-10 text-w-50' : 'hover:bg-w-10 text-w-50 cursor-pointer'" rounded="lg" p="3" m-b="3" place="items-center" grid="~ flow-row"
            class="place-content-center">
            <div class="i-ant-design:home-filled" w="8" h="8"></div>
            <span class="mt-2">الرئيسية</span>
        </div>
        <div :class="false ? 'bg-w-10 text-w-50' : 'hover:bg-w-10 text-w-50 cursor-pointer'" rounded="lg" p="3" m-b="3" place="items-center" grid="~ flow-row"
            class="place-content-center">
            <div class="i-charm:apps" text="w-50" w="8" h="8"></div>
            <span text="sm w-50" class="mt-2">التطبيقات</span>
        </div>
        <div :class="false ? 'bg-w-10 text-w-50' : 'hover:bg-w-10 text-w-50 cursor-pointer'" rounded="lg" p="3" m-b="3" place="items-center" grid="~ flow-row"
            class="absolute bottom-2 left-2 place-content-center">
            <div class="i-fluent:library-16-filled" text="w-50" w="8" h="8"></div>
            <span text="sm w-50" class="mt-2">تطبيقاتي</span>
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