<template>
  <div>
    <!-- Slider -->
    <AppStoreUtilitiesHomeSlider />
    <!-- Apps -->
    <div m-t="5">
      <span text="lg w-90" cursor="pointer" m-r="3">see all</span>
      <div class="grid grid-cols-3 gap-2">
        <div v-for="app in apps.slice(0, 6)" :key="'app-' + app.id" grid="~ flow-col" align="center" cursor="pointer" border="w-10 2 rounded-lg" m="3" bg="w-20" class="transition duration-300 ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:bg-w-30">
          <span self="auto" flex="~" text="xl" m="4" :class="false ? 'text-success-300' : 'text-error-400'">{{app.points}} <div class="i-fxemoji:grapes" w="8" h="8"></div></span>
          <div  grid="~ flow-col" align="center">
            <div grid="~ flow-row" align="center">
              <span self="auto" text="2xl w-90" m="2">{{app.title}} </span>
              <span self="auto" text="lg w-90" m="2">تخفيضات تصل الى 60% </span>
            </div>
            <div class="rounded-r-3xl place-items-center bg-w-30">
              <div :class="app.icon" text="w-70" w="15" h="full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ADS -->
    <div flex="~" justify="between" w="full-10" m-y="20" m-x="6" rounded="3xl" class="bg-gradient-to-l from-indigo-500">
      <div p="3" m="3" align="center">
        <div grid="~ flow-row" align="center">
          <span self="auto" text="3xl w-90" m="4">تخفيضات على حزمة التجار </span>
          <span self="auto" text="xl w-90" m="4">تخفيضات تصل الى 30% </span>
        </div>
      </div>
      <div>
        <nuxt-img transition="all duration-100 delay-75 ease-in-out" class="-ml-6 skew-y-12 rotate-12 hover:skew-y-0 hover:scale-80 hover:rotate-0" w="60" rounded="lg" h="40" cursor="pointer" border="w-70" src="imgs/bg.jpg" />
        <nuxt-img transition="all duration-100 delay-75 ease-in-out" class="-ml-6 skew-y-12 rotate-12 hover:skew-y-0 hover:scale-80 hover:rotate-0" w="60" rounded="lg" h="40" cursor="pointer" border="w-70" src="https://adsterra.com/blog/wp-content/uploads/2021/06/how-banners-make-you-money.png" />
        <nuxt-img transition="all duration-100 delay-75 ease-in-out" class="ml-6 skew-y-12 rotate-12 hover:skew-y-0 hover:scale-80 hover:rotate-0" w="60" rounded="lg" h="40" cursor="pointer" border="w-70" src="imgs/bg.jpg" />
      </div>
    </div>
    <!-- Apps -->
    <div m-t="5">
      <span text="lg w-90" cursor="pointer" m-r="3">see all</span>
      <div class="grid grid-cols-3 gap-2">
        <div v-for="app in apps.slice(0, 6)" :key="'app-' + app.id" grid="~ flow-col" align="center" cursor="pointer" border="w-10 2 rounded-lg" m="3" bg="w-20" class="transition duration-300 ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:bg-w-30">
          <span self="auto" flex="~" text="xl" m="4" :class="false ? 'text-success-300' : 'text-error-400'">{{app.points}} <div class="i-fxemoji:grapes" w="8" h="8"></div></span>
          <div  grid="~ flow-col" align="center">
            <div grid="~ flow-row" align="center">
              <span self="auto" text="2xl w-90" m="2">{{app.title}} </span>
              <span self="auto" text="lg w-90" m="2">تخفيضات تصل الى 60% </span>
            </div>
            <div class="rounded-r-3xl place-items-center bg-w-30">
              <div :class="app.icon" text="w-70" w="15" h="full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStoreApps } from '~/composables/useStore/useStoreApps'

const appsStore = useStoreApps();

const apps = appsStore.getApps

</script>

<style>

</style>