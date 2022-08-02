<template>
  <!-- Application -->
  <Transition>
    <UiDesktopWindow v-if="app.running" v-show="!app.minimized" :app="app">
        <!-- sidebare -->
          <AppStoreSectionsSidebar :app="app" />
        <!-- Content -->
        <div class="fixed h-full right-[0rem] top-[0rem] scroll-smooth left-24 overflow-y-scroll overflow-x-hidden">
          <AppStoreSectionsHome :app="app" />
        </div>
    </UiDesktopWindow>
  </Transition>
</template>

<script setup>
const props = defineProps({
  app: {
    type: Object,
    required: true
  }
})

///////////////////////////////
</script>