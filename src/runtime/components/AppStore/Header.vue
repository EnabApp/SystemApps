<template>
<div class="flex justify-between grid-cols-3" w="90%">
  <div v-if="!(breakpoint.twoXs || breakpoint.xs || breakpoint.sm)" class="flex place-items-center"  w="25%">
    <UiInput v-model="search" placeholder="البحث عن تطبيق" bg="primary dark:primaryOp" rounded="lg" icon="i-akar-icons:search" w="100%" />
  </div>
  <div v-else flex="~ gap-3">
    <AppStoreIconSearch @mouseover="displaySearchBar()"  @mouseleave="displaySearchBar()" w="24px" h="24px" text="primaryOp dark:primary" />
    <UiInput v-if="searchHover" w="100%" v-model="search" placeholder="البحث عن تطبيق" bg="primary dark:primaryOp" rounded="lg" icon="i-akar-icons:search"  />
  </div>
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
const searchHover = ref(false)
appStore.search = search

const displaySearchBar = () => {
  searchHover.value = true
}

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

const breakpoint = appStore.getBreakpoints
</script>

<style>

</style>
