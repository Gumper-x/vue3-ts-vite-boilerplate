export const DOCKERMODE = import.meta.env.APP_DOCKERMODE;
export const ROOT_URL = DOCKERMODE ? "*GRAPHQLURL*" : "https://smart-factory.online/app-graphql";
export const GRAPHQL_URL = `${ROOT_URL}/api/graphql`;
export const REST_URL = `${ROOT_URL}/api`;
export const WS_URL = DOCKERMODE ? "*WEBSERVICEURL*" : "/ws/";
export const BASE_URL = DOCKERMODE ? import.meta.env.APP_BASE_PATH : "/webapps/";
export const SIGNAL_R_URL = DOCKERMODE ? "*SIGNALRURL*" : "https://m.it.ua/ws/signalr/hubs";
export const APPLICATION_VERSION = DOCKERMODE ? "*APPLICATION_VERSION*" : "Last";
