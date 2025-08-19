import { useState, useEffect } from 'react';
import * as login from '../api/login';

export default function useLogin() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async (data) => {
        setLoading(true);
        setError(null);
        try {
            const response = await login.processLogin(data);
            return response;
        } catch (err) {
            setError(err?.response?.data || err.message);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { handleLogin, loading, error };
}