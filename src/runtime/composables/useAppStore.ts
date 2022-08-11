import { acceptHMRUpdate, defineStore } from "pinia";
import App from "~/classes/App";

export const useAppStore = defineStore("appStore", {
    state: () => ({
      selectedTab: 0 ,

      selectedApp:null,
      selectedPack:null,

      apps:[

        new App({
          id: 1,
          name: 'Calculator',
          title: "الحاسبة",
          owned: false,
          pack:false,
          points: 0,
          icon: "i-ic-baseline-calculate",
        }),

        new App({
          id: 2,
          name: 'Calculator',
          title: "تطبيق",
          owned: false,
          pack:false,
          points: 1999,
          icon: "i-ant-design:star-filled",
          }),

          new App({
            id: 3,
            name: 'Calculator',
            title: "حزمة",
            owned: true,
            pack:true,
            points: 1999,
            icon: "i-ic-baseline-calculate",
            }),

            new App({
              id: 4,
              name: 'Management',
              title: "حزمة",
              owned: false,
              pack:true,
              points: 3999,
              icon: "i-ic-baseline-calculate",
            }),
      ]
    }),

    getters: {
      getSelectedTab: (state) => state.selectedTab,
      getSelectedApp: (state) => state.selectedApp,
      getAll: (state) => state.apps,
      getPacks: (state) => state.apps.filter(app => app.pack),
      getApps: (state) => state.apps.filter(app => !app.pack),
    },

    actions: {
      setSelectedTap(id){
        this.selectedTab = id
        console.log(this.selectedTab)
        this.selectedApp = null
        this.selectedPack = null
      },
      setSelectedApp(app){
        this.selectedApp = null
        this.selectedPack = null
        this.selectedApp = app
      },
      setSelectedPack(app){
        this.selectedPack = null
        this.selectedApp = null
        this.selectedPack = app
      },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}
