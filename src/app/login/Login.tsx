/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import './styles/Login.scss';
import { useLogin, Payload_Login } from './hooks/useLogin';
import { useHistory } from 'react-router-dom';
import { toastGoodNews, toastBadNews, toastWarning } from './../shared/toastify/toasts';
import { setAuthToken, setAuthName } from './utils/sessionUtils';
import { setAuthImage } from './utils/sessionUtils';

export default function Login(props: any) {
    const defaultData = { apiKey: '', name: '' }
    const [formData, setFormData] = useState<Payload_Login>(defaultData);
    const [triggerLogin, setTriggerLogin] = useState(0);
    let history = useHistory();
    const pathBeforeRedirect = props?.location?.state?.from?.pathname;

    let { loading } = useLogin(formData, triggerLogin, (response) => {
        if (response.token) {
            if (response.token.token && response.token.name) {
                setAuthToken(response.token.token);
                setAuthName(response.token.name);
                response.image && setAuthImage(response.image);
                toastGoodNews('Login Success');
                if (pathBeforeRedirect) {
                    history.push(pathBeforeRedirect);
                } else {
                    history.push(`${process.env.PUBLIC_URL}/`);
                }
            } else {
                toastBadNews('Login failed');
            }
        } else {
            toastBadNews('Login failed');
        }
    }, (msg) => {
        if (msg.startsWith('401')) {
            toastBadNews('Invalid credentials');
        } else {
            toastBadNews(msg);
        }
    });

    function updateFormData(key: string, value: string) {
        setFormData(prev => ({ ...prev, [key]: value }));
    }

    const handleSubmit = () => {
        if (formData.name
            && formData.name.trim().length > 0
            && formData.apiKey
            && formData.apiKey.trim().length > 0
        ) {
            setTriggerLogin(prev => prev + 1);
        } else {
            toastWarning('Please enter your credentials');
        }
    };

    return (
        <div className='txLogin'>
            <div className='loginInner'>

                <label>Login</label>
                <input
                    type='text'
                    placeholder='Name'
                    value={formData.name}
                    onChange={event => updateFormData('name', event.target.value)}
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={formData.apiKey}
                    onChange={event => updateFormData('apiKey', event.target.value)}
                    onKeyDown={event => event.key === 'Enter' && handleSubmit()}
                />
                <button
                    onClick={handleSubmit}
                    className={loading ? 'loading_wait' : ''}
                    disabled={loading}
                >Login</button>

            </div>
        </div>
    )
}