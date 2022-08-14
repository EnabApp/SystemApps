<template>
  <div m-t="10">
    <!-- Slider -->
    <AppStoreHomeSlider/>
    <div m-t="4">
      <!-- Best Apps -->
        <AppStoreHomeBestApps :apps="apps" />
      <!-- New Apps -->
        <AppStoreHomeBestApps :apps="apps" m-t="8" />
    </div>
  </div>
</template>

<script setup>
import { useAppManager } from "#imports"

const appManager = useAppManager()
const apps = appManager.getApps;

</script>

<style></style>
