import { defineNuxtPlugin } from '#app'
import { useStoreApps } from '~/composables/useStore/useStoreApps' 

export default defineNuxtPlugin((nuxtApp) => {
  const appStore = useStoreApps()
  appStore.addApp({
    id: 3,
    name: 'appStore',
    title: "متجر التطبيقات",
    icon: "i-bxs-cart",
    owned:true,
    points:1999,
    size: "min-w-xl min-h-3xl xl:min-w-xl xl:min-h-2xl md:min-w-xl md:min-h-2xl sm:min-w-xl sm:min-h-xl",
    maximized: true,
  })
})
