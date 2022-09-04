<template>
  <div>
    <!-- Home -->
    <div
      @click="appRecharge.setSelectedTap(0)"
      p-x="3"
      m-b="3"
      place="items-center"
      grid="~ flow-row"
      class="place-content-center"
    >
      <div
        :class="
        appRecharge.selectedTab === 0
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
      @click="appRecharge.setSelectedTap(1)"
      p-x="3"
      m-b="3"
      place="items-center"
      grid="~ flow-row"
      class="place-content-center"
    >
      <div
        :class="
        appRecharge.selectedTab === 1
          ? 'bg-primaryOp dark:bg-primary text-primary dark:text-primaryOp'
          : 'dark:hover:bg-primary hover:bg-secondaryOp text-primaryOp hover:text-primary dark:hover:text-primaryOp dark:text-primary cursor-pointer'"
          grid="~ flow-row"
          rounded="lg"
          class="place-content-center"
          w="[64px]"
          h="[64px]"
        >
        <div class="i-ci:transfer"
          w="[32px]"
          h="[32px]"
          >
        </div>
      </div>
      <span class="mt-2" text="primaryOp dark:primary">التحويلات</span>
    </div>
    <!-- My Apps -->
    <div
      @click="appRecharge.setSelectedTap(2)"
      p-x="3"
      p-y="3"
      place="items-center"
      grid="~ flow-row"
      class="place-content-center"
    >
      <div
        :class="
        appRecharge.selectedTab === 2
          ? 'bg-primaryOp dark:bg-primary text-primary dark:text-primaryOp'
          : 'dark:hover:bg-primary hover:bg-secondaryOp text-primaryOp hover:text-primary dark:hover:text-primaryOp dark:text-primary cursor-pointer'"
          grid="~ flow-row"
          rounded="lg"
          class="place-content-center"
          w="[64px]"
          h="[64px]"
        >
        <div class="i-fa6-solid:money-check-dollar"
          w="[32px]"
          h="[32px]"
          >
        </div>
      </div>
      <span class="mt-2" text="primaryOp dark:primary">الشحن</span>
    </div>
    <!-- My Apps -->
    <div
      @click="appRecharge.setSelectedTap(3)"
      p-x="3"
      p-y="3"
      place="items-center"
      grid="~ flow-row"
      class="place-content-center"
    >
      <div
        :class="
        appRecharge.selectedTab === 3
          ? 'bg-primaryOp dark:bg-primary text-primary dark:text-primaryOp'
          : 'dark:hover:bg-primary hover:bg-secondaryOp text-primaryOp hover:text-primary dark:hover:text-primaryOp dark:text-primary cursor-pointer'"
          grid="~ flow-row"
          rounded="lg"
          class="place-content-center"
          w="[64px]"
          h="[64px]"
        >
        <div class="i-ant-design:gift-filled"
          w="[32px]"
          h="[32px]"
          >
        </div>
      </div>
      <span class="mt-2" text="primaryOp dark:primary">الهدايا</span>
    </div>
  </div>
</template>

<script setup>
import { useAppRecharge } from "#imports"
const appRecharge = useAppRecharge()

</script>

<style></style>
