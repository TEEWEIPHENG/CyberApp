import { useState } from 'react';
import * as login from '../api/login';

export default function useLogin() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleLogin = async (data) => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await login.processLogin(data);
            if(response && response.data && response.data.success){
                const { sessionToken, expiresAt } = response.data;

                sessionStorage.setItem("auth_session", sessionToken);
                sessionStorage.setItem("session_expiry", expiresAt);
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