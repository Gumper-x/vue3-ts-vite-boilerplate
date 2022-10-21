### Слой - app 
    app --> Слой инициализации приложения, тут все что запускается один раз или регистрируется глобально
```mermaid
graph TD;
    i(app)-->assets;
    i(app)-->locales;
    i(app)-->plugins;
    i(app)-->router;
    i(app)-->store;
    i(app)-->types;
    i(app)-->App.vue;
    i(app)-->main.ts;
```
    assets --> Слой для медиа файлов и прочего контента
```mermaid
graph TD;
    sh(assets)-.->ft(fonts);
    ft(fonts)-->FONT_NAME;
    sh(assets)-->sc(scss);
    sh(assets)-->fv(favicon.ico);
    sc(scss)-->gl(global);
    gl(global)-->i[(index.scss)];
    gl(global)-->sc2(default.scss);
    gl(global)-->sc3(TYPE_NAME.scss);
    sc(scss)-->quasar-variables.scss;
```
    locales --> Слой хранения глобальной локализации
```mermaid
graph TD;
    sh(locales)-->i[(index.ts)];
    sh(locales)-->l(LANG_NAME);
    l(LANG_NAME)-->i2[(index.ts)];
    l(LANG_NAME)-->i3(common.ts);
    l(LANG_NAME)-->i4(TYPE_NAME.ts);
```
    plugins --> Слой регистрации плагинов
```mermaid
graph TD;
    sh(plugins)-->p(PLUGIN_NAME);
    p(PLUGIN_NAME)-->i[(index.ts)];
```
    router --> Слой роутинга
```mermaid
graph TD;
    sh(router)-->r(middleware);
    sh(router)-->r2(routes.ts);
    sh(router)-->r3(types.ts);
    sh(router)-->r4(utils.ts);
    sh(router)-->r1[(index.ts)];
    r(middleware)-.->i2(MIDDLEWARE_NAME.ts);
    r(middleware)-->i[(index.ts)];
```
    store --> Слой роутинга
 - Глобальное хранения основана на **pinia** вместо *vuex*
```mermaid
graph TD;
    sh(store)-->r1[(index.ts)];
    sh(store)-.->r2(STORE_NAME.ts);
```
    types --> Слой глобальных типов и регистрации пакетов
```mermaid
graph TD;
    sh(types)-->r1[(index.ts)];
    sh(types)-.->r2(TYPE_NAME.ts);
    sh(types)-.->r3(global);
    r3(global)-.->r4(TYPE_NAME.d.ts);
```
    App.vue --> Корневой vue файл, для инициализации приложения
***
    main.ts --> Корневой "RUN FILE" с которого запускается приложения и регистрируется плагины