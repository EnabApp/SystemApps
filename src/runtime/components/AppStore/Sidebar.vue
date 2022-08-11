<template>
  <div>
    <!-- Home -->
    <div
      @click="appStore.setSelectedTap(0)"
      p-x="3"
      m-b="3"
      place="items-center"
      grid="~ flow-row"
      class="place-content-center"
    >
      <div
        :class="
        appStore.selectedTab === 0
          ? 'bg-primaryOp dark:bg-primary text-primary dark:text-primaryOp'
          : 'dark:hover:bg-primary hover:bg-secondaryOp text-primaryOp hover:text-primary dark:hover:text-primaryOp dark:text-primary cursor-pointer'"
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
      <span class="mt-2" text="primaryOp dark:primary">الرئيسية</span>
    </div>
    <!-- Apps -->
    <div
      @click="appStore.setSelectedTap(1)"
      p-x="3"
      m-b="3"
      place="items-center"
      grid="~ flow-row"
      class="place-content-center"
    >
      <div
        :class="
        appStore.selectedTab === 1
          ? 'bg-primaryOp dark:bg-primary text-primary dark:text-primaryOp'
          : 'dark:hover:bg-primary hover:bg-secondaryOp text-primaryOp hover:text-primary dark:hover:text-primaryOp dark:text-primary cursor-pointer'"
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
      <span class="mt-2" text="primaryOp dark:primary">التطبيقات</span>
    </div>
    <!-- My Apps -->
    <div
      @click="appStore.setSelectedTap(2)"
      p-x="3"
      p-y="3"
      place="items-center"
      grid="~ flow-row"
      class="place-content-center"
    >
      <div
        :class="
        appStore.selectedTab === 2
          ? 'bg-primaryOp dark:bg-primary text-primary dark:text-primaryOp'
          : 'dark:hover:bg-primary hover:bg-secondaryOp text-primaryOp hover:text-primary dark:hover:text-primaryOp dark:text-primary cursor-pointer'"
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
      <span class="mt-2" text="primaryOp dark:primary">تطبيقاتي</span>
    </div>
  </div>
</template>

<script setup>
const appStore = useAppStore();
</script>

<style></style>
