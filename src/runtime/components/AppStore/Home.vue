<template>
  <div mt="4">
    <!-- Slider -->
    <AppStoreHomeSlider />
    <div mt="4">
      <!-- Best Apps -->
      <span text="3xl primary">{{sme}}</span>
        <AppStoreHomeBestApps />
      <!-- New Apps -->
        <AppStoreHomeBestApps m-t="8" />
    </div>
  </div>
</template>

<script setup>
  import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
  import { useAppManager } from "#imports"

  const breakpoints = useBreakpoints(breakpointsTailwind)
  const smWidth = breakpointsTailwind.sm

  const sme = breakpoints.smallerOrEqual('sm')


const appManager = useAppManager()
const apps = appManager.apps;

console.log( "sme")
console.log( sme)
</script>

<style></style>
