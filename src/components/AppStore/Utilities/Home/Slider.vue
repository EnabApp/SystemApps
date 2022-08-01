<template>
  <div w="full" m-l="3" position="relative">
    <!-- Imgs banner and search -->
    <nuxt-img v-if="banner" class="transition-all duration-300 ease-in delay-75"  relative="~" w="full" h="130" cursor="pointer" border="w-70" :src="banner.src" />
    <div class="bg-gradient-to-b from-transparent to-black" position="absolute" w="full" h="full" top="0">
    </div>
    <div position="absolute" top="0">
      <UiInput placeholder="البحث عن تطبيق" class="fixed top-0 caret-pink-500 " /> 
    </div>
    <!-- Apps -->
    <div position="absolute" bottom="-10" p="2" class="grid grid-flow-col overflow-x-scroll scroll-smooth snap-x" w="full" rounded="lg">
      <div v-for="app in apps" :key="'banner-app-' + app.id" m-r="2" cursor="pointer" grid="~ flow-row" h="40" w="40" :class="[
        app.id == banner?.app?.id
        ? 'bg-w-30 transition ease-in-out delay-75 -translate-y-2 scale-x-110 border-success-300 snap-center'
        : 'bg-w-10 border-w-10'
      ]" rounded="lg" place="items-center" p="4">
          <div :class="app.icon" text="w-35" w="15" h="15"></div>
          <span self="auto" text="xl w-50" m="4">{{app.title}}</span>
          <span v-if="!app.owned" self="auto" text="2xl" :class="app.points > 1000 ?'text-error-500' : 'text-success-500'">{{app.points}} نقطة</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStoreApps } from '~/composables/useStore/useStoreApps'
import { useCycleList } from '@vueuse/core'
  

const appsStore = useStoreApps();

const apps = computed( () => appsStore.getApps)

const banners = computed(() => {
  if (apps.value.length <= 0) return []
  return [
    {
      src:'https://adsterra.com/blog/wp-content/uploads/2021/06/how-banners-make-you-money.png',
      app:apps.value[0] ?? '',
    },
    {
      src:'imgs/bg.jpg',
      app:apps.value[1] ?? '',
    },
    {
      src:'https://adsterra.com/blog/wp-content/uploads/2021/06/how-banners-make-you-money.png',
      app:apps.value[2] ?? '',
    },
    {
      src:'imgs/bg.jpg',
      app:apps.value[3] ?? '',
    },
    {
      src:'https://adsterra.com/blog/wp-content/uploads/2021/06/how-banners-make-you-money.png',
      app:apps.value[4] ?? '',
    },
    {
      src:'imgs/bg.jpg',
      app:apps.value[5] ?? '',
    },
    {
      src:'https://adsterra.com/blog/wp-content/uploads/2021/06/how-banners-make-you-money.png',
      app:apps.value[6] ?? '',
    },
    {
      src:'imgs/bg.jpg',
      app:apps.value[7] ?? '',
    },
    {
      src:'https://adsterra.com/blog/wp-content/uploads/2021/06/how-banners-make-you-money.png',
      app:apps.value[8] ?? '',
    },
    {
      src:'imgs/bg.jpg',
      app:apps.value[9] ?? '',
    },
  ]
})

const { state: banner, next, prev } = useCycleList(banners.value)

setInterval(function(){ 
  next()
}, 5000);

</script>

<style>

</style>