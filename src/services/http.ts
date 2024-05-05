import axios, { AxiosInstance } from 'axios';

export const $axios: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SOME_KEY,
});

$axios.interceptors.request.use((config) => {
    config.headers['x-auth-header'] = '123';
    return config;
});
