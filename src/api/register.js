import apiClient from './index';

export const ping = () => apiClient.get('/Register/Ping');

export const processRegister = (payload) => apiClient.post('/Register/Process', payload);
