<template>
  <!-- Imgs banner and search -->
  <div w="full">
    <div cursor="pointer">
      <nuxt-img
        v-if="banner"
        class="transition-all duration-300 ease-in delay-75"
        w="full"
        h="70"
        cursor="pointer"
        border="w-70"
        rounded="lg"
        :src="banner.src"
      />
    </div>
  </div>
</template>

<script setup>
import { useAppManager ,computed} from "#imports";
import { useCycleList } from "@vueuse/core";

const appManager = useAppManager();

const apps = computed(() => appManager.getApps);

const banners = computed(() => {
  if (apps.value.length <= 0) return [];
  return [
    {
      src: "https://adsterra.com/blog/wp-content/uploads/2021/06/how-banners-make-you-money.png",
      app: apps.value[0] ?? "",
    },
    {
      src: "https://www.jquery-az.com/html/images/banana.jpg",
      app: apps.value[1] ?? "",
    },
    {
      src: "https://adsterra.com/blog/wp-content/uploads/2021/06/how-banners-make-you-money.png",
      app: apps.value[2] ?? "",
    },
  ];
});

const { state: banner, next, prev } = useCycleList(banners.value);

setInterval(function () {
  next();
}, 5000);
</script>

<style></style>
