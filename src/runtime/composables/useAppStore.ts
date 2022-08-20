import { acceptHMRUpdate, defineStore } from "pinia";
import { ref } from "#imports"
export const useAppStore = defineStore("appStore", {
    state: () => ({
      selectedTab: ref(0),
      user_id: ref(null),
      points:ref(0),
      selectedApp:ref(null),
      selectedPack:ref(null),
      search:ref(null),
      apps:ref([]),
      banners:ref([
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
                  src:"https://ssb-prod.ec.aucegypt.edu/wtlgifs/main-banner-image.png",
                },
              ])
    }),

    getters: {
      // No getters yet
    },

    actions: {
      // Set Selected Tap - sidebar( 0 = home, 1 = apps, 2 = myApps )
      setSelectedTap(id: any){
        this.selectedTab = id
        this.selectedApp = null
        this.selectedPack = null
      },
      // Set Selected App
      setSelectedApp(app: any){
        this.selectedApp = null
        this.selectedPack = null
        this.selectedApp = app
      },
      // Set Selected Pack
      setSelectedPack(app: any){
        this.selectedPack = null
        this.selectedApp = null
        this.selectedPack = app
      },
      back(){
        this.selectedPack = null
        this.selectedApp = null
      },
      // Get all apps with filter
      allApps() {
        return this.apps.filter(app => {
          return app.title.toLowerCase().includes(this.search.toLowerCase())
        })
      },
      // Get apps without core with filter
      AppsWithoutCore() {
        return this.apps.filter(app => {
          return app.title.toLowerCase().includes(this.search.toLowerCase())
          && !app.core
        })
      },
      // Get owned apps without core apps
      ownedAppsWithoutCore() {
        return this.apps.filter(app => {
          return app.title.toLowerCase().includes(this.search.toLowerCase())
          && app.owned
          && !app.core
        })
      },
      // Get core apps
      coreApps() {
        return this.apps.filter(app => {
          return app.title.toLowerCase().includes(this.search.toLowerCase())
          && app.core
        })
      },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}
