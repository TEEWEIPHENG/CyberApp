import { useState, useEffect } from 'react';
import * as register from '../api/register';

export default function useRegister() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleRegister = async (data) => {
        setLoading(true);
        setError(null);
        try {
            const response = await register.processRegister(data);
            return response;
        } catch (err) {
            setError(err?.response?.data || err.message);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { handleRegister, loading, error };
}