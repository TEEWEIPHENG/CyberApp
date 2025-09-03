import { useState } from 'react';
import * as login from '../api/login';
import * as useSession from './useSession';

export default function useLogin() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleLogin = async (data) => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await login.ProcessLoginApi(data);
            if(response && response.data && response.data.success){
                console.log(response);
                const { sessionToken } = response.data;
                useSession.SetSession(sessionToken);
                return true;
            }

            return false
        } catch (err) {
            console.log(err);
            setError(err?.response?.data || err.message);
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { handleLogin, loading, error };
}