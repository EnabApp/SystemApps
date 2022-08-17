import { acceptHMRUpdate, defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
    state: () => ({
      selectedTab: 0 ,
      selectedApp:null,
      selectedPack:null,
      search:null,
      apps:[],
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
      // Get all apps apps with filter
      filteredApps() {
        return this.apps.filter(app => {
          return app.title.toLowerCase().includes(this.search.toLowerCase())
        })
      },
      // Get ownd apps with filter
      getFilteredOwned() {
        return this.apps.filter(app => {
          return app.title.toLowerCase().includes(this.search.toLowerCase())
          && app.owned
          && !app.core
        })
      },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}
