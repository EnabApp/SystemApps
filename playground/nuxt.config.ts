import { defineNuxtConfig } from 'nuxt'
import MyModule from '..'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,

    modules: [
        MyModule,
        '@enab/ui',
        '@enab/core',
        '@nuxtjs/supabase',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@nuxt/image-edge',
        '@unocss/nuxt',
        "@nuxtjs/color-mode",
    ],
})
