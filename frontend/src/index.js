import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App/App';


import ReactDOM from 'react-dom';
import TelegramLoginButton from 'react-telegram-login';

const handleTelegramResponse = response => {
    console.log(response);
};

ReactDOM.render(
    <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="UNOgBot" />,
    document.getElementById('telegramButton')
);

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));


serviceWorker.unregister();
