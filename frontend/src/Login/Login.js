import React, { Component } from 'react';
import './Login.css';
import ReactDOM from 'react-dom';
import TelegramLoginButton from 'react-telegram-login';



class Login extends Component {

    componentDidMount() {
        console.log(this.handleTelegramResponse());
        ReactDOM.render(
            <TelegramLoginButton dataOnauth={this.handleTelegramResponse} botName="UNOgBot" />,
            document.getElementById('telegramButton')
        );
    }

    handleTelegramResponse = response => {
        console.log(response);
    };

    render() {
        return(
            <div>
                <div id = "greetings">Welcome to UNOgame</div>
                <div id = "telegramButton" />
            </div>
        );
    }
}

export default Login;