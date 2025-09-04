import axios from 'axios';
import { GetSession } from '../hooks/useSession';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
    },  
    withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
    const token = GetSession();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default apiClient;