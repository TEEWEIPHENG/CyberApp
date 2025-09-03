import apiClient from './index';

export const ProcessLoginApi = async (payload) => {
    try {
        const response = await apiClient.post('/Login/Process', payload);
        return response;
    } catch (error) {
        throw error;
    }
}

export const LogoutApi = async () => {
    try {
        const response = await apiClient.post('/Login/Logout');
        return response;
    } catch (error) {
        throw error;
    }
};