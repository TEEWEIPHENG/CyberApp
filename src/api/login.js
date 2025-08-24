import apiClient from './index';

export const ping = () => apiClient.get('/Login/Ping');
export const processLogin = (payload) =>  apiClient.post('/Login/Process', payload);