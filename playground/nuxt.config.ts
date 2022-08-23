import { defineNuxtConfig } from 'nuxt'
import MyModule from '..'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,

    autoImports: {
        global: true
    },

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
