<template>
  <div>
    <div flex="row" w="520px" h="320px" rounded="xl">
        <div
          v-for="i in 3"
          :key="i"
          grid="~ flow-row"
          m-b="19px"
          bg="secondary dark:secondaryOp"
          text="primary dark:primaryOp"
          rounded="lg"
          w="519px"
          h="92px"
        >
          <div grid="~ flow-col" justify="between">
            <div grid="~ flow-col" m="17px">
              <div m-l="2" bg="primaryOp dark:primary" m-r="2" w="[64px]" h="[64px]" rounded="lg" grid="~ flow-row" class="place-content-center">
                <div class="i-fluent:library-16-filled" w="32px" h="32px" text="primary dark:primaryOp"></div>
              </div>
              <div grid="~ flow-row" text="primary">
                <span text="2xl">حسن خالد</span>
                <span text="sm">**** **** **** 9868</span>
              </div>
            </div>
            <div grid="~ flow-row" class="place-items-end" m="17px">
              <span :class="true? 'text-red' : 'text-green'" text="2xl" font="bold">-73</span>
              <span text="sm secondary">8-20-2022</span>
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
