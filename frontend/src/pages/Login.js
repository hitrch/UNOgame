import {render} from "react-dom";
import TelegramLoginButton from "react-telegram-login";
import React from "react";

render(
    <TelegramLoginButton dataOnauth={this.responseTelegram} botName="UNOgBot" />,
    document.getElementById('telegramButton')
);