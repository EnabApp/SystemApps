<template>
  <div m-t="90px">
    <div bg="secondaryOp dark:secondary" rounded="lg" flex="~" grid="~ flow-row gap-120px" h="81px" class="place-items-center" align="center">
      <span w="full" text="primary dark:primaryOp xl">التطبيق</span>
      <span w="full" text="primary dark:primaryOp xl">تاريخ الشراء</span>
      <span w="full" text="primary dark:primaryOp xl">حالة الاشتراك</span>
      <span w="full" text="primary dark:primaryOp xl">المدفوع</span>
      <!-- <span w="full" text="primary dark:primaryOp xl">...</span> -->
    </div>
    <div h="420px" m-t="2" class="overflow-x-hidden overflow-y-scroll ">
      <div v-for="app in apps" :key="'app-' + app.id"  flex="~" grid="~ flow-row gap-120px" h="81px" class="place-items-center" align="center">
        <div flex="~" place="items-center" w="full">
          <div
            :class="app.icon"
            text="primaryOp dark:primary"
            w="[64px]"
            h="[64px]"
          ></div>
          <div>
            <span text="primaryOp dark:primary md">{{app.title}}</span><br>
          </div>
        </div>
        <span w="full" text="dark:primary primaryOp xl">05/8/2021</span>
        <div w="full">
          <div bg="green" w="74px" h="34px" rounded="lg" align="center" cursor="pointer">
            <span text="primaryOp xl" justify="center">فعال</span>
          </div>
        </div>
        <span w="full" text="dark:primary primaryOp xl">{{app.points}}</span>
        <!-- <div flex="~" w="full">
          <div bg="red" w="96px" h="31px" rounded="lg" align="center" cursor="pointer">
            <span text="primary xl">تعطيل</span>
          </div>
          <div bg="primaryOp dark:primary" w="31px" h="31px" m-r="2" rounded="lg" align="center" cursor="pointer">
            <span text="dark:primaryOp primary xl">...</span>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore , useSupabaseClient , computed } from "#imports"

const appStore = useAppStore();
const supabase = useSupabaseClient();

const apps = computed(() => appStore.ownedAppsWithoutCore());
console.log(apps);

const deleteApp = async (id) => {
  const { data, error } = await supabase
  .from('users_apps')
  .select('created_at')
  .eq('users.id', appStore.user_id)

  console.log("deleted" , data ,error)
}

</script>

<style>

</style>
