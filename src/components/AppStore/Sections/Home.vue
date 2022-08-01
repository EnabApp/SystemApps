<template>
  <!-- Slider -->
  <AppStoreUtilitiesHomeSlider />
  
  <div flex="row" w="full" m-t="25" m-x="3" class="bg-gradient-to-l from-indigo-500">
    <div basis="1/4">
      name name 
    </div>
    <div basis="3/4">
      <nuxt-img transition="all duration-100 delay-75 ease-in-out" class="skew-y-12 rotate-12 hover:skew-y-0 hover:scale-75 hover:rotate-0" w="70" rounded="lg" h="70" cursor="pointer" border="w-70" src="imgs/bg.jpg" />
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