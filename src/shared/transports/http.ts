import axios from "axios";

export const httpClient = axios.create({
  baseURL: "YOUR URL",
  timeout: 80000,
});
httpClient.interceptors.request.use(async (config) => {
  return config;
});
