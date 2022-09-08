<template>
  <div flex="~ gap-19px">
    <!-- state card -->
    <div bg="primaryOp dark:primary" w="250px" h="92px" rounded="lg" flex="~">
      <div h="64px" w="64px" bg="primary dark:primaryOp" m="16px" rounded="lg" grid="~ flow-row" class="place-content-center">
        <RechargeIconCharge text="primaryOp dark:primary"  w="38px" h="32px"/>
      </div>
      <div grid="~ flow-row" class="place-content-center" m-r="23px" align="center">
        <span text="primary dark:primaryOp xl">الشحن</span>
        <span text="primary dark:primaryOp 3xl" font="bold">433</span>
      </div>
    </div>
    <!-- state card -->
    <div bg="primaryOp dark:primary" w="250px" h="92px" rounded="lg" flex="~">
      <div h="64px" w="64px" bg="primary dark:primaryOp" m="16px" rounded="lg" grid="~ flow-row" class="place-content-center">
        <RechargeIconTransfers text="primaryOp dark:primary"  w="38px" h="32px"/>
      </div>
      <div grid="~ flow-row" class="place-content-center" m-r="23px" align="center">
        <span text="primary dark:primaryOp xl">الصرفيات</span>
        <span text="primary dark:primaryOp 3xl" font="bold">433</span>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style>

</style>
