import { acceptHMRUpdate, defineStore } from "pinia";
import App from "~/classes/App";
import Widget from "~/classes/Widget";

export const useStoreApps = defineStore("apps", {
    state: () => ({
        all: [

        ],
        focused: "",

        apps: [
            new App({
                id: 1,
                name: 'Calculator',
                title: "الحاسبة",
                owned: false,
                points: 1999,
                icon: "i-ic-baseline-calculate",
                size: "min-w-md min-h-xl",
                maximizable: false,
                resizeable: false,
                utility: true,
            }),

            new App({
                id: 2,
                name: 'Test',
                title: "تجريبي",
                owned: true,
                points: 1999,
                icon: "i-emojione-v1:diamond-with-a-dot",
                size: "min-w-md min-h-xl",
                maximizable: false,
                resizeable: false,
                utility: true,
                subApps: [
                    new App({
                        id: 3,
                        name: 'Second',
                        title: "تجريبي",
                        owned: true,
                        icon: "i-ic-baseline-calculate",
                        size: "min-w-md min-h-xl",
                        maximizable: false,
                        resizeable: false,
                    }),
                ]
            }),

            new App({
                id: 3,
                name: 'AppStore',
                title: "متجر الخدمات",
                icon: "i-bxs-cart",
                owned:true,
                points:1999,
                size: "min-w-xl min-h-3xl xl:min-w-xl xl:min-h-2xl md:min-w-xl md:min-h-2xl sm:min-w-xl sm:min-h-xl",
                maximized: true,
            }),
            new App({
                id: 4,
                name: 'Test3',
                title: "خدمة تجريبية",
                icon: "i-emojione-v1:diamond-with-a-dot",
                owned:false,
                points:1999,
                size: "min-w-xl min-h-3xl xl:min-w-xl xl:min-h-2xl md:min-w-xl md:min-h-2xl sm:min-w-xl sm:min-h-xl",
                maximized: true,
            }),
            new App({
                id: 5,
                name: 'Test4',
                title: "خدمة تجريبية",
                icon: "i-emojione-v1:diamond-with-a-dot",
                owned:false,
                points:1999,
                size: "min-w-xl min-h-3xl xl:min-w-xl xl:min-h-2xl md:min-w-xl md:min-h-2xl sm:min-w-xl sm:min-h-xl",
                maximized: true,
            }),
            new App({
                id: 6,
                name: 'Test5',
                title: "خدمة تجريبية",
                icon: "i-emojione-v1:diamond-with-a-dot",
                owned:false,
                points:1999,
                size: "min-w-xl min-h-3xl xl:min-w-xl xl:min-h-2xl md:min-w-xl md:min-h-2xl sm:min-w-xl sm:min-h-xl",
                maximized: true,
            }),
            new App({
                id: 7,
                name: 'Test6',
                title: "خدمة تجريبية",
                icon: "i-emojione-v1:diamond-with-a-dot",
                owned:false,
                points:1999,
                size: "min-w-xl min-h-3xl xl:min-w-xl xl:min-h-2xl md:min-w-xl md:min-h-2xl sm:min-w-xl sm:min-h-xl",
                maximized: true,
            }),
            new App({
                id: 8,
                name: 'Test7',
                title: "خدمة تجريبية",
                icon: "i-emojione-v1:diamond-with-a-dot",
                owned:false,
                points:1999,
                size: "min-w-xl min-h-3xl xl:min-w-xl xl:min-h-2xl md:min-w-xl md:min-h-2xl sm:min-w-xl sm:min-h-xl",
                maximized: true,
            }),
        ],
    }),

    getters: {
        getApps: state => state.apps,
        // isRunning: (state) => (app) => state.all.find(a => a.title === app.title).running,
        getApp: state => id => state.apps.find(app => app.id === id),
        getRunningApps: (state) => state.apps.filter(app => app.running),
        getOwned: (state) => state.apps.filter(app => app.owned),
        // getLockedApps: (state) => state.all.filter(a => a.locked),
        getFocused: (state) => state.focused,
        getChildrenApps: (state) => (title) => state.apps.filter(app => app.parentApp === title),
        anyRunningIsMaximized: (state) => state.apps.some(app => app.maximized && app.running && !app.minimized),
    },

    actions: {
        setFocus(title){
            this.focused = title;
        },
        
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStoreApps, import.meta.hot));
}