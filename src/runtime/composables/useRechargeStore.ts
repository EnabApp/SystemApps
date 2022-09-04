import { acceptHMRUpdate, defineStore } from "pinia";

export const useAppRecharge = defineStore("recharge", {
    state: () => ({
      selectedTab: 0 ,
    }),

    getters: {
    },

    actions: {
      setSelectedTap(id){
        this.selectedTab = id
      },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAppRecharge, import.meta.hot));
}
