import { defineNuxtPlugin } from '#app'
import { useAppManager } from '#imports'
import appstore from './appstore.json'
import recharge from './recharge.json'


export default defineNuxtPlugin((nuxtApp) => {
    // Registering App
    const appManager = useAppManager()
    appManager.addApp(appstore)
    appManager.addApp(recharge)
})
