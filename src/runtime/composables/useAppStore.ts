import { acceptHMRUpdate, defineStore } from "pinia";

export const useAppStore = defineStore("app-store", {
    state: () => ({
      selectedTab: 0,
    }),

    getters: {
      getSelectedTab: (state) => state.selectedTab,
    },

    actions: {
      setSelectedTab: state => id => state.selectedTab = id,
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}
