import { useState } from 'react';
import * as login from '../api/login';
import { SetSession } from './useSession';

export default function useLogin() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleLogin = async (data) => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await login.ProcessLoginApi(data);
            console.log(response);
            if(response && response.data && response.data.success){
                SetSession(response.data.sessionToken);
                return true;
            }else{
                return false;
            }
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