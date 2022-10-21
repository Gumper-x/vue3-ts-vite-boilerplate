# Слой - shared
    shared --> Слой в котором можно хранить всю логику которая может быть использована во всех местах приложения
```mermaid
graph TD;
    sh(shared)-->constants;
    sh(shared)-->di;
    sh(shared)-->domains;
    sh(shared)-->services;
    sh(shared)-->transports;
    sh(shared)-->ui;
    sh(shared)-->utils;
```
    constants --> Слой для всех постоянных значений

 - *Константы* -- неизменяемые константы должны быть названы в стиле UPPER_SNAKE_CASE
```mermaid
graph TD;
    constants-->i[(index.ts)];
    constants-->i2(CONSTANT_NAME.ts);
```
    di --> Слой регистрации всех сервисов и доменов
```mermaid
graph TD;
    di-->i(index.ts);
```
    domains --> Слой для доменов приложения
```mermaid
graph TD;
    domains-->i[(index.ts)];
    domains-.->d(DOMAIN_NAME);
    d(DOMAIN_NAME)-->d1[(index.ts)];
    d(DOMAIN_NAME)-->d2(adapter.ts);
    d(DOMAIN_NAME)-->d3(port.ts);
    d(DOMAIN_NAME)-.->d4(graphql);
    d4(graphql)-.->d5(query);
    d5(query)-.->d7(QUERY_NAME.gql);
    d5(query)-->d8[(index.ts)];
    d4(graphql)-.->d9(mutation);
    d9(mutation)-.->d11(MUTATION_NAME.gql);
    d9(mutation)-->d10[(index.ts)];
    d4(graphql)-->d6[(index.ts)];
```
    services --> Слой сервисов которые не связанны с доменами

 - *Сервисы* -- не могут делать запросы или вызывать домен, они могут быть вызваны только в помощь к домену или внутри приложения
```mermaid
graph TD;
    services-->i[(index.ts)];
    services-->s(SERVICE_NAME);
    s(SERVICE_NAME)-->s1(adapter.ts);
    s(SERVICE_NAME)-->r[(index.ts)];
    s(SERVICE_NAME)-->s2(port.ts);
```
    transports --> Слой транспортных менеджеров
```mermaid
graph TD;
    transports-->i[(index.ts)];
    transports-->i2(http.ts);
    transports-->i3(graphql.ts);
    transports-->i4(utils);
    transports-->s(schema);
    s(schema)-->r[(index.ts)];
    i4(utils)-->i5(index.ts);
```
    ui --> Слой для общих компонентов и лейаутов

 - *layout* -- подгружается автоматически через функцию **loadLayout()**
```mermaid
graph TD;
    ui-->layouts
    layouts-.->LAYOUT_NAME
    LAYOUT_NAME-->layout.vue
    LAYOUT_NAME-.->l1(locale.ts)

    ui-->components
    components-->c5[(index.ts)]
    components-- Базовые компоненты из которых можно сделать новые -->cc2(common)
    cc2(common)-.->cc(Base + COMPONENT_NAME)
    cc(Base + COMPONENT_NAME)-->c1(component.vue);
    cc(Base + COMPONENT_NAME)-->c2[(index.ts)];
    cc(Base + COMPONENT_NAME)-.->c3(locale.ts);
    components-.->COMPONENT_NAME
    COMPONENT_NAME-->component.vue;
    COMPONENT_NAME-->i2[(index.ts)];
    COMPONENT_NAME-.->i3(locale.ts);
```
    utils --> Слой для вспомогательных функций
```mermaid
graph TD;
    utils-->i2[(index.ts)]
    utils-.->UTIL_NAME.ts
```

