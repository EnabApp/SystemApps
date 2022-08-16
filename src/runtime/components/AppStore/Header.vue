<template>
<div class="flex justify-between grid-cols-3">
  <div class="flex place-items-center">
    <UiInput placeholder="البحث عن تطبيق" bg="primary dark:primaryOp" rounded="lg" icon="i-akar-icons:search" w="[484px]" />
  </div>
  <div class="flex place-items-center">
    <span hover="cursor-pointer" text="primaryOp dark:primary" m-l="6">الخدمات</span>
    <span hover="cursor-pointer" text="primaryOp dark:primary" m-l="6">التطبيقات</span>
    <span hover="cursor-pointer" text="primaryOp dark:primary" m-l="6">الحزم</span>
  </div>
  <div class="flex place-items-center">
    <div class="i-ri:copper-coin-fill" text="primaryOp dark:primary" w="[32px]" h="[32px]"></div>
    <span text="primaryOp dark:primary" m-r-3>{{points}}</span>
  </div>
</div>
</template>

<script setup>
import { useSupabaseClient } from "#imports"
import { ref } from 'vue'

const supabase = useSupabaseClient()

const { data, error } = await supabase
.from('user_protected')
.select('points')

const points = ref(data[0].points)
</script>

<style>

</style>
