<template>
  <div>
    <!-- Home -->
    <div
    v-motion
      @click="activePage = 'home'"
      p-x="3"
      m-b="3"
      place="items-center"
      grid="~ flow-row"
      class="place-content-center"
    >
      <div
        :class="
        activePage === 'home'
          ? 'bg-w-90 text-b-90'
          : 'hover:bg-w-70 cursor-pointer text-w-90 hover:text-b-80'"
          grid="~ flow-row"
          rounded="lg"
          class="place-content-center"
          w="[64px]"
          h="[64px]"
        >
        <div class="i-ant-design:home-filled"
          w="[32px]"
          h="[32px]"
          >
        </div>
      </div>
      <span class="mt-2" text="w-90">الرئيسية</span>
    </div>
    <!-- Apps -->
    <div
      @click="activePage = 'apps'"
      p-x="3"
      m-b="3"
      place="items-center"
      grid="~ flow-row"
      class="place-content-center"
    >
      <div
        :class="
        activePage === 'apps'
          ? 'bg-w-90 text-b-90'
          : 'hover:bg-w-70 cursor-pointer text-w-90 hover:text-b-80'"
          grid="~ flow-row"
          rounded="lg"
          class="place-content-center"
          w="[64px]"
          h="[64px]"
        >
        <div class="i-charm:apps"
          w="[32px]"
          h="[32px]"
          >
        </div>
      </div>
      <span class="mt-2" text="w-90">التطبيقات</span>
    </div>
    <!-- My Apps -->
    <div
      @click="activePage = 'myApps'"
      p-x="3"
      p-y="6"
      m-b="3"
      place="items-center"
      grid="~ flow-row"
      class="place-content-center"
    >
      <div
        :class="
        activePage === 'myApps'
          ? 'bg-w-90 text-b-90'
          : 'hover:bg-w-70 cursor-pointer text-w-90 hover:text-b-80'"
          grid="~ flow-row"
          rounded="lg"
          class="place-content-center"
          w="[64px]"
          h="[64px]"
        >
        <div class="i-fluent:library-16-filled"
          w="[32px]"
          h="[32px]"
          >
        </div>
      </div>
      <span class="mt-2" text="w-90">تطبيقاتي</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  app: {
    type: Object,
    required: true,
  },
});
const activePage = ref('home');
</script>

<style></style>
