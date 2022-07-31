# Nuxt Module

## Development

- `yarn install`
- Update the following:
    1. `package.json`: change `@enab/module-starter` to `@enab/your-module-name`.
    2. `src/module.ts`: change `module-starter` and `moduleStarter`.
    3. `components/ModuleName`: change directory name `ModuleName` to your module name.
- `yarn dev:prepare`
- `yarn dev`

* Your playground inside `playground` folder.

# Additions

in `playground/classes/App.ts` : add `points: number ;` to `class` and `this.points = args.points ?? 0` to the constructor .

## UseStoreApps Composable

```js 

apps: [
    new App({
        id: 1,
        name: 'appStore',
        title: "متجر الخدمات",
        icon: "i-bxs-cart",
        owned:true,
        points:1999,
        size: "min-w-xl min-h-3xl xl:min-w-xl xl:min-h-2xl md:min-w-xl md:min-h-2xl sm:min-w-xl sm:min-h-xl",
        maximized: true,
    }),
    new App({
        id: 3,
        name: 'test1',
        title: "خدمة تجريبية 1",
        icon: "i-bxs-cart",
        owned:false,
        points:999,
        size: "min-w-xl min-h-3xl xl:min-w-xl xl:min-h-2xl md:min-w-xl md:min-h-2xl sm:min-w-xl sm:min-h-xl",
        maximized: true,
    }),
    new App({
        id: 3,
        name: 'test2',
        title: "خدمة تجريبية 2",
        icon: "i-emojione-v1:diamond-with-a-dot",
        owned:false,
        points:1999,
        size: "min-w-xl min-h-3xl xl:min-w-xl xl:min-h-2xl md:min-w-xl md:min-h-2xl sm:min-w-xl sm:min-h-xl",
        maximized: true,
    }),
],

```
