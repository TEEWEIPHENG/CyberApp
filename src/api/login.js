import apiClient from './index';

export const ping = () => apiClient.get('/Login/Ping');
export const processLogin = (payload) =>  apiClient.post('/Login/Process', payload);
export const verifySession = () =>  apiClient.get('/Login/Session');
export const logoutApi = () =>  apiClient.post('/Login/Logout');