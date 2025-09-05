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

export const GetUserInfoApi = async () => {
    try{
        const response = await apiClient.get('/Login/GetUserInfo');
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
}