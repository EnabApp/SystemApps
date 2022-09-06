import { acceptHMRUpdate, defineStore } from "pinia";
import { ref, useSupabaseClient, useUser, useNuxtApp,useAppManager } from "#imports";
export const useAppStore = defineStore("appStore", {
  state: () => ({
    selectedTab: ref(0),
    user_id: ref(null),
    points: ref(0),
    selectedApp: ref(null),
    selectedService: ref(null),
    selectedPack: ref(null),
    search: ref(null),
    apps: ref([]),
    services: ref([]),
    packs: ref([
      // Pack 1
      {
        id: 1,
        title: "Pack 1",
        description: "This is pack 1",
        points: 1999,
        discount: 20,//percentage
        apps: [
          {
            id: 1,
            title: "App 1",
            points: 10,
            description: "This is app 1",
            icon: "i-ri-todo-fill",
            owned: false,
          },
          {
            id: 2,
            title: "App 2",
            points: 20,
            description: "This is app 2",
            icon: "i-bxs-cart",
            owned: true,
          },
          {
            id: 3,
            title: "App 3",
            points: 30,
            description: "This is app 3",
            icon: "i-ri-todo-fill",
            owned: false,
          },
        ],
        services: [
          {
            id: 1,
            title: "Service 1",
            points: 10,
            description: "This is service 1",
            icon: "i-ri-todo-fill",
            owned: false,
            //type 0 = app , 1 = service
            type: 1,
          },
          {
            id: 2,
            title: "Service 2",
            points: 30,
            description: "This is service 2",
            icon: "i-ri-todo-fill",
            owned: false,
            //type 0 = app , 1 = service
            type: 1,
          },
        ],
      },
      // Pack 2
      {
        id: 2,
        title: "Pack 2",
        description: "This is pack 2",
        points: 2999,
        discount: 35, //percentage
        apps: [
          {
            id: 4,
            title: "App 4",
            points: 40,
            description: "This is app 4",
            icon: "i-ri-todo-fill",
            owned: false,
          },
          {
            id: 5,
            title: "App 5",
            points: 50,
            description: "This is app 5",
            icon: "i-bxs-cart",
            owned: false,
          },
          {
            id: 6,
            title: "App 6",
            points: 60,
            description: "This is app 6",
            icon: "i-ri-todo-fill",
            owned: false,
          },
        ],
        services: [
        ],
      },
    ]),
    banners: ref([
      {
        src: "https://adsterra.com/blog/wp-content/uploads/2021/06/how-banners-make-you-money.png",
      },
      {
        src: "https://www.fotor.com/blog/wp-content/uploads/2019/07/3-solid-background.png",
      },
      {
        src: "https://gbsn.org/wp-content/uploads/2019/03/CBCB_AUC-event-banner.png",
      },
      {
        src: "https://ssb-prod.ec.aucegypt.edu/wtlgifs/main-banner-image.png",
      },
    ]),
    // Just add a SVG icon without sizes and key must be a name of component
    icons:{
      home:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7Z"/></svg>',
      Calculator:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M8 18h1.5v-2h2v-1.5h-2v-2H8v2H6V16h2Zm5-.75h5v-1.5h-5Zm0-2.5h5v-1.5h-5Zm1.1-3.8l1.4-1.4l1.4 1.4l1.05-1.05l-1.4-1.45l1.4-1.4L16.9 6l-1.4 1.4L14.1 6l-1.05 1.05l1.4 1.4l-1.4 1.45ZM6.25 9.2h5V7.7h-5ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/></svg>',
      AppStore: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M10 13H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Zm-1 7H4v-5h5ZM21 2h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1 7h-5V4h5Zm1 4h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Zm-1 7h-5v-5h5ZM10 2H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM9 9H4V4h5Z"/></svg>',
      Todo: '<svg viewBox="0 0 512 512"><path fill="currentColor" d="M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72l-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69l72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"/></svg>',
      SystemManagerApp: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 15H9v-4H7.5v1.25H6v1.5h1.5Zm2.5-1.25h8v-1.5h-8ZM15 11h1.5V9.75H18v-1.5h-1.5V7H15ZM6 9.75h8v-1.5H6ZM8 21v-2H4q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v12q0 .825-.587 1.413Q20.825 19 20 19h-4v2Zm-4-4h16V5H4v12Zm0 0V5v12Z"/></svg>',
      Recharge: '<svg viewBox="0 0 576 512"><path fill="currentColor" d="M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm208 128h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 112c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zm-91.9-144v6.3c6.6 1.2 16.6 3.2 21 4.4c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-3.8-1-17.4-3.7-21.7-4.3c-12.2-1.9-22.2-.3-28.6 2.6c-6.3 2.9-7.9 6.2-8.2 8.1c-.6 3.4 0 4.7.1 5c.3.5 1 1.8 3.6 3.5c6.1 4.2 15.7 7.2 29.9 11.4l.8.2c12.1 3.7 28.3 8.5 40.4 17.4c6.7 4.9 13 11.4 16.9 20.5c4 9.1 4.8 19.1 3 29.4c-3.3 19-15.9 32-31.6 38.7c-4.9 2.1-10 3.6-15.4 4.6v5.5c0 11.1-9 20.1-20.1 20.1s-20.1-9-20.1-20.1v-6.4c-9.5-2.2-21.9-6.4-29.8-9.1c-1.7-.6-3.2-1.1-4.4-1.5c-10.5-3.5-16.1-14.8-12.7-25.3s14.8-16.1 25.3-12.7c2 .7 4.1 1.4 6.4 2.1c9.5 3.2 20.2 6.9 26.2 7.9c12.8 2 22.7.7 28.8-1.9c5.5-2.3 7.4-5.3 8-8.8c.7-4 .1-5.9-.2-6.7c-.4-.9-1.3-2.2-3.7-4c-5.9-4.3-15.3-7.5-29.3-11.7l-2.2-.7c-11.7-3.5-27-8.1-38.6-16c-6.6-4.5-13.2-10.7-17.3-19.5c-4.2-9-5.2-18.8-3.4-29c3.2-18.3 16.2-30.9 31.1-37.7c5-2.3 10.3-4 15.9-5.1v-6c0-11.1 9-20.1 20.1-20.1s20.1 9 20.1 20.1z"/></svg>',
    },
  }),

  getters: {
    // All apps with filter
    allApps: (state) => state.apps.filter((app) => app.title.includes(state.search)),
    // Get apps without core with filter
    appsWithoutCore: (state) => state.apps.filter((app) => app.title.includes(state.search) && !app.core),
    // Get owned apps without core apps with filter
    ownedAppsWithoutCore: (state) => state.apps.filter((app) => app.title.includes(state.search) && !app.core && app.owned),
    // Get core apps with filter
    coreApps: (state) => state.apps.filter((app) => app.title.includes(state.search) && app.core),
  },

  actions: {
    // Set Selected Tap - sidebar( 0 = home, 1 = apps, 2 = myApps )
    setSelectedTap(id: any) {
      this.selectedTab = id
      this.selectedApp = null
      this.selectedService = null
      this.selectedPack = null
    },
    // Set Selected App
    setSelectedApp(app: any) {
      this.selectedPack = null
      this.selectedService = null
      this.selectedApp = app
    },
    // Set Selected Pack
    setSelectedPack(pack: any) {
      this.selectedApp = null
      this.selectedService = null
      this.selectedPack = pack
    },
    // Set Selected Service
    setSelectedService(service: any) {
      this.selectedPack = null
      this.selectedService = service
    },
    back() {
      this.selectedService = null
      this.selectedApp = null
      this.selectedPack = null
    },
    serviceBack() {
      this.selectedService = null
    },
    async servicesApp(app_id: any) {
      const supabase = useSupabaseClient();
      let { data: apps_services, error } = await supabase
        .from('apps_services')
        .select('*')
        .eq('app_id', app_id)
      console.log(apps_services)
      return apps_services
    },
    async buyService() {
      const user = useUser()
      const supabase = useSupabaseClient();
      const { $toast } = useNuxtApp();
      let { data, error } = await supabase
        .rpc('buyService', {
          _service_id: this.selectedService.id,
          _user_id: this.user_id
        })
      if (error) $toast.success("حدث خطأ اثناء الاشتراك")
    },
    async buyPack() {
      const supabase = useSupabaseClient();
      let { data, error } = await supabase
        .rpc('buyPack', {
          _pack_id: this.selectedPack.id,
          _user_id: this.user_id
        })

      if (error) console.error(error)
      else console.log(data)
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}
