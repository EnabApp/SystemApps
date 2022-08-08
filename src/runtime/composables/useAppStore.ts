import { acceptHMRUpdate, defineStore } from "pinia";
import App from "~/classes/App";

export const useAppStore = defineStore("appStore", {
    state: () => ({
      selectedTab: 0 ,

      apps:[

        new App({
          id: 1,
          name: 'Calculator',
          title: "الحاسبة",
          owned: false,
          pack:false,
          points: 1999,
          icon: "i-ic-baseline-calculate",
        }),

        new App({
          id: 2,
          name: 'Calculator',
          title: "تطبيق",
          owned: false,
          pack:false,
          points: 1999,
          icon: "i-ic-baseline-calculate",
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
      ]
    }),

    getters: {
      getSelectedTab: (state) => state.selectedTab,
      getAll: (state) => state.apps,
      getPacks: (state) => state.apps.filter(app => app.pack),
      // getApps: (state) => state.apps.filter(app => !app.pack),
    },

    actions: {
      setSelectedTap(id){
        this.selectedTab = id;
      },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}
