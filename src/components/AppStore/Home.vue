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
import { useStoreApps } from "~/composables/useStore/useStoreApps";
import { ref } from "vue";

const appsStore = useStoreApps();

const apps = appsStore.getApps;

</script>

<style></style>
