<template>
<div class="flex justify-between grid-cols-3">
  <div class="flex place-items-center">
    <UiInput v-model="search" placeholder="البحث عن تطبيق" bg="primary dark:primaryOp" rounded="lg" icon="i-akar-icons:search" w="[484px]" />
  </div>
  <!-- <div class="flex place-items-center">
    <span hover="cursor-pointer" text="primaryOp dark:primary" m-l="6">الخدمات</span>
    <span hover="cursor-pointer" text="primaryOp dark:primary" m-l="6">التطبيقات</span>
    <span hover="cursor-pointer" text="primaryOp dark:primary" m-l="6">الحزم</span>
  </div> -->
  <div class="flex place-items-center">
    <AppStoreIconCoin text="primary" w="32px" h="32px"/>
    <span text="primaryOp dark:primary" m-r="3" >{{appStore.points}}</span>
  </div>
</div>
</template>

<script setup>
import { useSupabaseClient ,useAppStore,ref,watch } from "#imports"

const supabase = useSupabaseClient()
const appStore = useAppStore()
const skeleton = ref(true)

const search = ref('')
appStore.search = search

watch(search.value, (newX) => {
  appStore.selectedTab == 1
})

watch(
  () => search.value ,
  (sum) => {
    if(search.value != null && appStore.selectedTab != 2)
    appStore.selectedTab = 1
  }
)

if(appStore.points != 0) skeleton.value = false
</script>

<style>

</style>
