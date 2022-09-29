<template>
  <div class="fade-in-out" mt="4">
    <!-- Slider -->
    <AppStoreHomeSlider />
    <div mt="4">
      <!-- Best Apps -->
        <AppStoreHomeBestApps />
      <!-- New Apps -->
        <AppStoreHomeBestApps m-t="8" />
    </div>
  </div>
</template>

<script setup>
import { useAppManager } from "#imports"

const appManager = useAppManager()
const apps = appManager.apps;
const props= defineProps(['breakpoints'])
const { twoXs, xs, sm, md, lg, xl, twoXl } = props.breakpoints

</script>

<style>
.fade-in-out {
  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
