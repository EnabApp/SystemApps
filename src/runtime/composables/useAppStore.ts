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
    breakpoints : null ,
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
    // Get breakpoints
    getBreakpoints: (state) => state.breakpoints,
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
    },
    setBreakpoints(breakpoints : any){
      this.breakpoints = breakpoints
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}
