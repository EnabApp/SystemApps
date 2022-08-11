<template>
  <div m-t="90px">
    <div bg="secondaryOp dark:secondary" rounded="lg" flex="~" w="full" h="81px" class="justify-around place-items-center">
      <span text="primary dark:primaryOp xl">التطبيق</span>
      <span text="primary dark:primaryOp xl">تاريخ الشراء</span>
      <span text="primary dark:primaryOp xl">حالة الاشتراك</span>
      <span text="primary dark:primaryOp xl">المدفوع</span>
      <span text="primary dark:primaryOp xl">...</span>
    </div>
    <div h="420px" class="overflow-x-hidden overflow-y-scroll ">
      <div v-for="i in 20" :key="i" flex="~" w="full" h="81px" class="justify-around place-items-center">
        <div flex="~" place="items-center" m-r="-2">
          <div
            class="i-ci:check-bold"
            text="primaryOp dark:primary"
            w="[64px]"
            h="[64px]"
          ></div>
          <div>
            <span text="primaryOp dark:primary lg">الحاسبة</span><br>
            <span text="primaryOp dark:primary sm" font="thin">خدمات</span>
          </div>
        </div>
          <span text="dark:primary primaryOp xl">حالة الاشتراك</span>
        <div bg="green" w="74px" h="34px" rounded="lg" align="center" cursor="pointer">
          <span text="primaryOp xl" justify="center">فعال</span>
        </div>
        <span text="dark:primary primaryOp xl">1999</span>
        <div flex="~">
          <div bg="red" w="96px" h="31px" rounded="lg" align="center" cursor="pointer">
            <span text="primary xl">حذف</span>
          </div>
          <div bg="primaryOp dark:primary" w="31px" h="31px" m-r="2" rounded="lg" align="center" cursor="pointer">
            <span text="dark:primaryOp primary xl">...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>

</style>
