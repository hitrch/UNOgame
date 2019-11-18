import React from 'react';
import TelegramLoginButton from 'react-telegram-login';
import { render } from 'react-dom';
import Home from '../pages/Home';

function Login() {
    const handleTelegramResponse = response => {
        console.log(response);
    };

    render(
            <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="UNOgBot"/>,
                document.getElementById('telegramButton')
        );
}



export default Login;

