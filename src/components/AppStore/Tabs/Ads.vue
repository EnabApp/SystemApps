<template>
    <div>
        <div flex="~" justify="between">
            <span text="w-90">ما الجديد 🔥</span>
            <span text="w-100" cursor="pointer" class="animate-pulse" border="w-10 2" rounded="lg" bg="purple-700">اعلن عندنا الان🔥</span>
        </div>
        <nuxt-img cursor="pointer" border="rounded-lg" m-t="2" w="full" src="https://adsterra.com/blog/wp-content/uploads/2021/06/how-banners-make-you-money.png" />
        <div flex="~ grow col gap-2" h="96" overflow-y="scroll" m="2" p="x-2">
            <nuxt-img v-for="ad in 9" :key="ad" cursor="pointer" border="rounded-lg" w="100" src="https://adsterra.com/blog/wp-content/uploads/2021/06/how-banners-make-you-money.png" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    app: {
        type: Object,
        required: true,
    },
});
</script>

<style>
</style>