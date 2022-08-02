<template>
  <div w="full">
    <!-- Imgs banner and search -->
    <div left="2" position="relative" cursor="pointer">
      <nuxt-img v-if="banner" class="transition-all duration-300 ease-in delay-75" w="full" h="130" cursor="pointer" border="w-70" rounded="3xl" :src="banner.src" />
      <div class="bg-gradient-to-b from-transparent to-black" position="absolute" w="full" h="full" top="0" rounded="3xl">
          <div class="absolute bottom-10 right-10" grid="~ flow-row" align="center">
            <span text="3xl w-90">{{banner.app.title}}</span>
            <span self="auto" text="lg w-90" m="2">تخفيضات تصل الى 60% </span>
            <span flex="~" text="3xl center w-90">{{banner.app.points - 1200}} <div class="i-fxemoji:grapes" w="8" h="8"></div></span>
          </div>
      </div>
      <!-- <div position="absolute" top="0">
        <UiInput placeholder="البحث عن تطبيق" class="fixed top-0 caret-pink-500 " /> 
      </div> -->
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
  ]
})

const { state: banner, next, prev } = useCycleList(banners.value)

setInterval(function(){ 
  next()
}, 5000);

</script>

<style>

</style>