import { acceptHMRUpdate, defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
    state: () => ({
      selectedTab: 0 ,
      selectedApp:null,
      selectedPack:null,
    }),

    getters: {
    },

    actions: {
      setSelectedTap(id: any){
        this.selectedTab = id
        this.selectedApp = null
        this.selectedPack = null
      },
      setSelectedApp(app: any){
        this.selectedApp = null
        this.selectedPack = null
        this.selectedApp = app
      },
      setSelectedPack(app: any){
        this.selectedPack = null
        this.selectedApp = null
        this.selectedPack = app
      },
      back(){
        this.selectedPack = null
        this.selectedApp = null
      },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}
