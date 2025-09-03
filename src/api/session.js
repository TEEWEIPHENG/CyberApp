import apiClient from './index';

export const UpdateSessionApi = async () => {
    try {
        const response = await apiClient.put('/Session/Renew');
        return response;
    } catch (error) {
        throw error;
    }
};

export const ValidateSessionApi = () =>  apiClient.get('/Session/Validate');

