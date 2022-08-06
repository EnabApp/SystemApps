<template>
  <div m-t="10">
    <!-- Slider -->
    <AppStoreUtilitiesHomeSlider/>
    <span bg="w-90" text="b-90" m-r="5" @click="page ='home'">page1</span>
    <span bg="w-90" text="b-90" @click="page ='page2'">page2</span>
    <div m-t="4">
      <!-- Best Apps -->
        <AppStoreUtilitiesHomeBestApps :apps="apps" />
      <!-- New Apps -->
        <AppStoreUtilitiesHomeBestApps :apps="apps" m-t="8" />
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
