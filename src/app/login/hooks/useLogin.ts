import { useState, useEffect } from 'react';
import { apiBase } from './../../shared/api/api';

export type Payload_Login = {
    name: string,
    apiKey: string,
}

type Resource_Login = {
    token: {
        name: string,
        token: string,
    },
    image: string,
}

export const useLogin = (
    request: Payload_Login,
    trigger: number,
    done: (response: Resource_Login) => void,
    failed: (msg: string) => void,
) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (trigger <= 0) return;
        const postData = async () => {
            setLoading(true);

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(request)
            };
            const response = await fetch(`${apiBase}/login`, requestOptions);
            const { token, image, msg } = await response.json();
            if (token) {
                done({
                    token,
                    image
                });
            } else {
                msg ? failed(msg) : failed('Login failed');
            }
            setLoading(false);
        };

        postData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger]);

    return { loading };
};