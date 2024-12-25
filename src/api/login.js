import apiClient from './index';

export const processLogin = async (payload) => {
    try {
        const response = await apiClient.post('/Login/Process', payload);
        return response;
    } catch (error) {
        throw error;
    }
};