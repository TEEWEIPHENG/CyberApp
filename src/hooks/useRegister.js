import { useState } from 'react';
import * as register from '../api/register';

export default function useRegister() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleRegister = async (data) => {
        setLoading(true);
        setError(null);
        try {
            console.log("Registering with data:", data);
            console.log("loading:", loading);

            const response = await register.ProcessRegisterApi(data);
            return response;
        } catch (err) {
            setError(err?.response?.data || err.message);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { handleRegister, isLoading: loading, apiError: error };
}