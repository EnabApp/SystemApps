<template>
  <div flex="~" gap="20" class="place-content-center">
    <!-- Name -->
    <div grid="~ flow-row" class="place-content-center">
      <span text="primaryOp dark:primary 3xl">التحويلات</span>
    </div>
    <!-- Search -->
    <UiInput w="50" placeholder="اكتب الاسم او التاريخ" type="text" />
    <!-- Incomming -->
    <div flex="~" grid="~ flow-row" class="place-content-center">
      <RechargeIconUpRight w="25px" h="25px" text="green" m-l="2"/><span text="primaryOp dark:primary md">المدخول الكلي 1999</span>
    </div>
    <!-- Spending -->
    <div flex="~" grid="~ flow-row" class="place-content-center">
      <RechargeIconDownLeft w="25px" h="25px" text="red" m-l="2"/><span text="primaryOp dark:primary md">المصروف الكلي 2099</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style>

</style>
