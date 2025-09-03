import apiClient from './index';

export const ProcessRegisterApi = (payload) => apiClient.post('/Register/Process', payload);
