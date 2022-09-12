<template>
  <div mt="4">
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

window.onpopstate = function () {
  history.go(1);
  appManager.toggleRunning()
  alert("backkk")
};
</script>

<style></style>
