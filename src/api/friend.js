import apiClient from './index';

export const SendFriendRequestApi = async (payload) => {
    try {
        const response = await apiClient.post('/Friend/SendFriendRequest', payload);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const GetPendingFriendRequestApi = async () => {
    try {
        const response = await apiClient.get('/Friend/GetPendingFriendRequest');
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const RespondFriendRequestApi = async (payload) => {
    try {
        const response = await apiClient.post('/Friend/RespondFriendRequest', payload);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const GetFriendsApi = async () => {
    try {
        const response = await apiClient.get('/Friend/GetFriends');
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}