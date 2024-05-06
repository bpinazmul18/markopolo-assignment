import axios, { AxiosInstance } from 'axios';

export const $axios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

$axios.interceptors.request.use((config) => {
  config.headers['x-auth-header'] = '123';
  return config;
});
